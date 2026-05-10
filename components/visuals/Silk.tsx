/* eslint-disable react/no-unknown-property */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import type { ShaderMaterial as ThreeShaderMaterial } from "three";
import { Color, Mesh } from "three";

export type SilkProps = {
  /** Animation speed multiplier (shader uniform feed). Default 5. */
  speed?: number;
  /** Pattern tiling scale. */
  scale?: number;
  /** Base hex colour for the silk pattern. */
  color?: string;
  /** Grain / noise vigour over the silk. */
  noiseIntensity?: number;
  /** Rotation of UV space in radians. */
  rotation?: number;
  /** Wrapper classNames (e.g. absolute inset-0). */
  className?: string;
};

function hexToNormalizedRGB(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "").trim().slice(0, 6);
  if (cleaned.length !== 6)
    throw new RangeError(`Silk color "${hex}" is not a 6‑digit hex.`);
  return [
    Number.parseInt(cleaned.slice(0, 2), 16) / 255,
    Number.parseInt(cleaned.slice(2, 4), 16) / 255,
    Number.parseInt(cleaned.slice(4, 6), 16) / 255,
  ];
}

const vertexShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2 r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

function SilkPlane({
  uniforms,
}: {
  uniforms: SilkUniformBundle;
}) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.scale.set(viewport.width, viewport.height, 1);
  }, [viewport]);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh?.material || !("uniforms" in mesh.material)) return;
    const shader = mesh.material as ThreeShaderMaterial;
    shader.uniforms.uTime.value += 0.1 * delta;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial uniforms={uniforms as never} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

type SilkUniformBundle = ReturnType<typeof createUniforms>;

function createUniforms(
  speed: number,
  scale: number,
  noiseIntensity: number,
  rotation: number,
  colorHex: string,
) {
  const rgb = hexToNormalizedRGB(colorHex);
  const c = new Color().setRGB(rgb[0], rgb[1], rgb[2]);
  return {
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uColor: { value: c },
    uRotation: { value: rotation },
    uTime: { value: 0 },
  };
}

/** React Bits Silk: fullscreen plane scaled to R3F viewport. */
export default function Silk({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  className,
}: SilkProps) {
  const uniforms = useMemo(
    () => createUniforms(speed, scale, noiseIntensity, rotation, color),
    [speed, scale, noiseIntensity, rotation, color],
  );

  return (
    <div className={className ?? "absolute inset-0 h-full w-full"}>
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        gl={{
          alpha: false,
          antialias: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 100 }}
        style={{ width: "100%", height: "100%" }}
      >
        <SilkPlane uniforms={uniforms} />
      </Canvas>
    </div>
  );
}
