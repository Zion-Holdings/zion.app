import { Resend } from "resend";

type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
  from?: string;
  headers?: Record<string, string>;
  tags?: { name: string; value: string }[];
};

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const DEFAULT_FROM = process.env.RETENTION_EMAIL_FROM || "Zion <noreply@zion.ai>";

export const resend = new Resend(RESEND_API_KEY);

export async function sendEmail(params: SendEmailParams) {
  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const { to, subject, html, from = DEFAULT_FROM, headers, tags } = params;
  return await resend.emails.send({ to, subject, html, from, headers, tags });
}