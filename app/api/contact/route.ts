import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 },
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Ongeldig e-mailadres." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    // Without explicit configuration we never send mail. We just log the
    // submission so the form can be tested locally without external calls.
    if (!apiKey || !to || !from) {
      console.log("[contact] new submission (mail disabled, no env config)", {
        name,
        email,
        company,
        message,
      });
      return NextResponse.json({ ok: true, queued: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nieuw contactformulier bericht van ${name}`,
      html: render({ name, email, company, message }),
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Versturen mislukt, probeer het later opnieuw." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ error: "Er ging iets mis." }, { status: 500 });
  }
}

function render(p: { name: string; email: string; company: string; message: string }) {
  return `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 16px;">Nieuw contactformulier bericht</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #555;">Naam</td><td>${escape(p.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Email</td><td>${escape(p.email)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Bedrijf</td><td>${escape(p.company || "—")}</td></tr>
      </table>
      <p style="margin-top: 16px; white-space: pre-wrap;">${escape(p.message)}</p>
    </div>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
