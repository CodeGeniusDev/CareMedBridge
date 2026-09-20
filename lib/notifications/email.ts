import "server-only";

export interface LeadEmailPayload {
  fullName: string;
  practiceName: string;
  email: string;
  phone: string;
  specialty: string;
  providerCount: string;
  servicesNeeded: string[];
  message: string | null;
}

/**
 * Optional new-lead email notification — PLACEHOLDER.
 *
 * No email provider is configured yet, so this intentionally no-ops.
 * When credentials are available (e.g. Resend), set the server-only vars
 * documented in .env.local.example and implement the send call below.
 *
 * Hard rule: a notification failure must NEVER break form submission —
 * the lead is already stored in Supabase before this runs.
 */
export async function notifyNewLead(lead: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !to) return; // not configured — silently skip

  // Example implementation once a provider is chosen:
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     from: "CareMedBridge Website <website@caremedbridge.com>",
  //     to: [to],
  //     subject: `New consultation request — ${lead.practiceName}`,
  //     text: `Name: ${lead.fullName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\n...`,
  //   }),
  // });

  void lead; // referenced for the future implementation above
  return;
}
