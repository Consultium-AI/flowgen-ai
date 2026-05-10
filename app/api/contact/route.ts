import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  phone?: string;
  subject?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const headline = (body.subject ?? "").trim();
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
        phone,
        headline,
        message,
      });
      return NextResponse.json({ ok: true, queued: true });
    }

    const resend = new Resend(apiKey);

    const { error: notifyError } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: headline
        ? `Contact: ${headline} (${name})`
        : `Nieuw contactformulier bericht van ${name}`,
      html: renderNotifyTeam({ name, email, company, phone, headline, message }),
    });

    if (notifyError) {
      console.error("[contact] notify team error", notifyError);
      return NextResponse.json(
        { error: "Versturen mislukt, probeer het later opnieuw." },
        { status: 500 },
      );
    }

    const { error: autoReplyError } = await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: "Bedankt voor je bericht · Qozen AI",
      html: renderAutoReplyToVisitor(name),
    });

    if (autoReplyError) {
      console.error("[contact] visitor auto-reply error", autoReplyError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ error: "Er ging iets mis." }, { status: 500 });
  }
}

function renderNotifyTeam(p: {
  name: string;
  email: string;
  company: string;
  phone: string;
  headline: string;
  message: string;
}) {
  return `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 16px;">Nieuw contactformulier bericht</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #555;">Naam</td><td>${escape(p.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Email</td><td>${escape(p.email)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Telefoon</td><td>${escape(p.phone || "-")}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Onderwerp</td><td>${escape(p.headline || "-")}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;">Bedrijf</td><td>${escape(p.company || "-")}</td></tr>
      </table>
      <p style="margin-top: 16px; white-space: pre-wrap;">${escape(p.message)}</p>
    </div>`;
}

function visitorFirstName(fullName: string): string {
  const t = fullName.trim();
  return t.split(/\s+/)[0] ?? t;
}

function renderAutoReplyToVisitor(fullName: string): string {
  const dear = escape(visitorFirstName(fullName));
  return `<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#f7f7f7; font-family:Arial, Helvetica, sans-serif; color:#111827;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:32px;">
      <h1 style="font-size:22px; line-height:1.3; margin:0 0 16px; color:#111827;">
        Bedankt voor je bericht
      </h1>

      <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
        Beste ${dear},
      </p>

      <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
        Bedankt voor je bericht via <strong>QozenAI</strong>.
      </p>

      <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
        We hebben je aanvraag goed ontvangen. Ons team bekijkt je bericht en neemt binnen
        <strong>24 uur</strong> contact met je op.
      </p>

      <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
        Bij QozenAI helpen we bedrijven om handmatige processen, zoals leadopvolging,
        approvals, rapportages en workflows, overzichtelijk te automatiseren in één
        AI-dashboard. We kijken graag met je mee welk proces bij jou het meeste tijd kost
        en of dit geschikt is voor een eerste workflow-scan.
      </p>

      <p style="font-size:15px; line-height:1.6; margin:0 0 24px;">
        Heb je in de tussentijd aanvullende informatie? Dan kun je gewoon op deze e-mail reageren.
      </p>

      <p style="font-size:15px; line-height:1.6; margin:0;">
        Met vriendelijke groet,<br />
        <strong>Team QozenAI</strong><br />
        <a href="mailto:info@qozenai.nl" style="color:#111827; text-decoration:underline;">
          info@qozenai.nl
        </a>
      </p>
    </div>
  </body>
</html>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
