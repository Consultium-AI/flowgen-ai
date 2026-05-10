/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Windows + project paths with parentheses can break `next build` when `output: "standalone"` is set (PageNotFoundError for `/_document`). Use standalone on other platforms / paths.
  ...(() => {
    const cwd = process.cwd();
    const winParenPath =
      process.platform === "win32" && /[()]/.test(cwd);
    if (winParenPath) return {};
    return { output: "standalone" };
  })(),
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
