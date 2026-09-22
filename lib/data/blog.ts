import type { BlogPost } from "@/types";

/**
 * Blog articles for the CareMedBridge resource center.
 *
 * These are demo/placeholder articles so the blog system ships with
 * realistic structure and internal linking. Every entry is marked
 * `demo: true` and should be replaced with real editorial content
 * before launch. Keep slugs stable when replacing content so links
 * do not break.
 */

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-denial-reasons-2024",
    title: "The Top Denial Reasons We See in Medical Billing (and How to Prevent Them)",
    excerpt:
      "Most claim denials trace back to a short list of preventable causes. Here are the patterns denial management teams see most often and the workflow fixes that stop them upstream.",
    category: "Denial Management",
    publishedAt: "2024-06-12",
    readTime: "6 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "Denied claims are frustrating because so many of them are preventable. When we review a practice's denial history, the same handful of causes usually accounts for the majority of rejected or underpaid claims. Understanding these patterns is the first step toward denial management that actually reduces denials instead of just reacting to them.",
      },
      {
        type: "heading",
        text: "Eligibility and coverage issues",
      },
      {
        type: "paragraph",
        text: "The single most common denial category involves insurance eligibility verification. Coverage that lapsed, a plan the front desk didn't verify, or benefits that changed since the last visit all lead to claims that payers reject before they even reach adjudication. Verifying coverage and benefits before the appointment, not after, removes most of this category entirely.",
      },
      {
        type: "heading",
        text: "Coding and documentation gaps",
      },
      {
        type: "paragraph",
        text: "Claims coded without enough specificity, missing modifiers, or diagnoses that don't support the services billed are frequent denial triggers. Clean coding starts with complete documentation, and it holds up when coders follow current ICD-10 and CPT guidance rather than habit.",
      },
      {
        type: "heading",
        text: "Timely filing and administrative errors",
      },
      {
        type: "paragraph",
        text: "Duplicate claims, incorrect patient demographics, and missed filing deadlines round out the usual suspects. These are process failures, not clinical ones, which means a disciplined workflow eliminates them.",
      },
      {
        type: "heading",
        text: "What actually reduces denials",
      },
      {
        type: "list",
        items: [
          "Verify eligibility and benefits before every visit, not just for new patients.",
          "Confirm authorization requirements for services that need prior approval.",
          "Audit a sample of claims for coding specificity and modifier accuracy before submission.",
          "Work denials by root cause, categorizing them so trends become visible.",
          "Track first-pass resolution and appeal success rates as standing metrics.",
        ],
      },
      {
        type: "paragraph",
        text: "A denial management service built on prevention, not just appeals, changes the economics of a practice's revenue cycle. If your denial rate has been flat for years, the cause is almost always upstream of the denial itself.",
      },
    ],
  },
  {
    id: "2",
    slug: "credentialing-guide-2024",
    title: "Provider Credentialing Explained: A Practical Guide for New Practices",
    excerpt:
      "Credentialing delays keep new providers from seeing patients and billing payers. This guide walks through the enrollment process, common bottlenecks, and how to avoid costly delays.",
    category: "Credentialing",
    publishedAt: "2024-07-03",
    readTime: "7 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "Credentialing is the process payers use to verify a provider's qualifications before they will reimburse their claims. For a new practice, it sits on the critical path: no credentialing, no payer contracts, no revenue. Yet many practices underestimate how long it takes and how much coordination it requires.",
      },
      {
        type: "heading",
        text: "What the credentialing process involves",
      },
      {
        type: "paragraph",
        text: "At a high level, credentialing and provider enrollment include verifying education and training history, confirming licenses and board certification, checking work history and malpractice coverage, and then submitting enrollment applications to each payer you intend to bill.",
      },
      {
        type: "heading",
        text: "Where practices get stuck",
      },
      {
        type: "list",
        items: [
          "Incomplete applications, with missing documents or inconsistent dates, cause rejections and restarts.",
          "CAQH profiles that are out of date or not attested.",
          "Payer backlogs, which are outside your control but manageable with early submission.",
          "Delegating the task without an owner, because credentialing stalls when no one is accountable for it.",
        ],
      },
      {
        type: "heading",
        text: "How to keep enrollment moving",
      },
      {
        type: "paragraph",
        text: "Start the process months before a provider's first scheduled patient. Assign a single owner, keep a checklist per payer, follow up on applications at regular intervals, and document every interaction. A medical credentialing service handles exactly this coordination, and persistent follow-up is most of the job.",
      },
      {
        type: "paragraph",
        text: "Done well, credentialing becomes a repeatable onboarding system rather than a recurring emergency. Practices that treat it as a process, with timelines, owners, and checklists, consistently start new providers billing sooner.",
      },
    ],
  },
  {
    id: "3",
    slug: "rcm-kpis-every-practice",
    title: "The Revenue Cycle KPIs Every Practice Should Track",
    excerpt:
      "Days in AR, denial rate, and first-pass resolution: which revenue cycle metrics actually matter, what healthy looks like, and how to build a reporting rhythm around them.",
    category: "Revenue Cycle",
    publishedAt: "2024-08-21",
    readTime: "8 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "Healthcare revenue cycle management runs on measurement. Without a consistent set of key performance indicators, problems hide in the averages until they become cash-flow crises. The good news: a handful of core metrics tell you most of what you need to know about the health of your billing operation.",
      },
      {
        type: "heading",
        text: "Days in accounts receivable",
      },
      {
        type: "paragraph",
        text: "Days in AR measures how long it takes, on average, to collect what you're owed. When the number climbs, money is getting stuck somewhere, often in unworked denials, slow follow-up, or payers sitting on claims. It's the single best pulse check on your revenue cycle.",
      },
      {
        type: "heading",
        text: "Denial rate and first-pass resolution",
      },
      {
        type: "paragraph",
        text: "Your denial rate shows what percentage of claims come back unpaid on the first attempt, while first-pass resolution rate measures how often claims are paid without any rework. Together they reveal whether your front-end processes, including eligibility, coding, and authorization, are doing their job before submission.",
      },
      {
        type: "heading",
        text: "AR aging and net collection rate",
      },
      {
        type: "paragraph",
        text: "An AR aging report breaks balances into buckets by how long they've been outstanding; growth in the older buckets signals follow-up that isn't keeping pace. Net collection rate shows how much of what you legitimately earned you actually collected, after contractual adjustments.",
      },
      {
        type: "heading",
        text: "Building a reporting rhythm",
      },
      {
        type: "list",
        items: [
          "Review a one-page KPI summary monthly, with the same metrics every time.",
          "Tie each metric to an owner and a target so trends trigger action.",
          "Investigate changes month over month instead of reacting to single data points.",
          "Share results with providers and staff, because visibility drives improvement.",
        ],
      },
      {
        type: "paragraph",
        text: "Revenue cycle management services should include this reporting by default. If your current reports are raw data dumps instead of clear metrics with context, you're doing the analysis work yourself, which is exactly the work you outsourced.",
      },
    ],
  },
  {
    id: "4",
    slug: "prior-authorization-tips",
    title: "Prior Authorization Best Practices: Reducing Delays Without Slowing Care",
    excerpt:
      "Prior authorizations delay care and burden staff when handled reactively. Here's how organized practices turn PA into a managed, predictable workflow.",
    category: "Prior Authorization",
    publishedAt: "2024-09-15",
    readTime: "6 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "Prior authorization exists to control costs, but for practices it often means phone queues, faxed forms, and treatment delays. The difference between authorization chaos and a manageable process is almost always organization: knowing what needs auth, starting early, and tracking every request to completion.",
      },
      {
        type: "heading",
        text: "Know your payer rules",
      },
      {
        type: "paragraph",
        text: "Authorization requirements vary by payer, plan, and procedure. Practices that maintain a current matrix of which services require prior authorization and under which plans avoid the two worst outcomes: missing a required auth and chasing auth for services that don't need it.",
      },
      {
        type: "heading",
        text: "Start the clock early",
      },
      {
        type: "paragraph",
        text: "Requests submitted the day before a procedure are where delays hurt most. Build authorization initiation into the scheduling workflow, so clinical documentation is gathered and submitted with enough runway for payer review and any back-and-forth.",
      },
      {
        type: "heading",
        text: "Track every request",
      },
      {
        type: "list",
        items: [
          "Log each authorization with its status, reference number, and expiration date.",
          "Follow up on pending requests at set intervals rather than waiting for payers.",
          "Match scheduled procedures against active auths before the appointment date.",
          "Document denial reasons and appeal outcomes to refine future submissions.",
        ],
      },
      {
        type: "paragraph",
        text: "Prior authorization services take this entire workflow off your team's plate, from payer portal management and documentation collection to status tracking and appeals. For practices with heavy authorization volume, that's hours returned to clinical staff every week.",
      },
    ],
  },
  {
    id: "5",
    slug: "in-house-vs-outsourced-billing",
    title: "In-House vs. Outsourced Medical Billing: An Honest Comparison",
    excerpt:
      "Should your practice bill in-house or outsource? A practical look at cost, control, expertise, and scalability, and the situations where each option makes sense.",
    category: "Outsourcing",
    publishedAt: "2025-01-14",
    readTime: "7 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "Medical billing outsourcing is a big decision for any practice, and it's rarely as simple as \"cheaper\" or \"easier.\" The right answer depends on your practice's size, specialty, growth plans, and how much billing expertise you can realistically maintain in-house. Here's an honest look at both sides.",
      },
      {
        type: "heading",
        text: "The real cost of in-house billing",
      },
      {
        type: "paragraph",
        text: "An in-house billing team means salaries, benefits, training, software licensing, and coverage for turnover and absences. It also means your practice carries the full risk of process gaps, because when a biller leaves, their knowledge leaves with them unless you've documented everything.",
      },
      {
        type: "heading",
        text: "What outsourcing actually provides",
      },
      {
        type: "paragraph",
        text: "A medical billing company spreads specialized expertise, payer knowledge, and process discipline across many practices. You gain a team that lives and breathes coding updates, denial trends, and payer behavior without hiring or training that expertise yourself. Reporting and accountability shift to a partner whose business is billing performance.",
      },
      {
        type: "heading",
        text: "Where practices hesitate, and why it usually works out",
      },
      {
        type: "list",
        items: [
          "Loss of control: modern engagements include transparent reporting and defined escalation paths, so you see more, not less.",
          "Data access: a good partner works within your practice management system, keeping data where you already use it.",
          "Transition risk: structured onboarding with parallel billing during cutover keeps cash flow steady.",
        ],
      },
      {
        type: "paragraph",
        text: "In-house billing can still be the right call for very large, stable groups with deep internal expertise. For most small and mid-sized practices, outsourced medical billing services deliver broader capability at a more predictable cost. The deciding question is usually: do you want to run a billing operation, or a practice?",
      },
    ],
  },
  {
    id: "6",
    slug: "small-practice-billing-tips",
    title: "Billing Tips for Small Practices: Getting Paid Faster on a Lean Team",
    excerpt:
      "Small practices don't have a billing department; they have a person. Practical billing strategies that protect cash flow without adding headcount.",
    category: "Small Practices",
    publishedAt: "2025-02-10",
    readTime: "6 min read",
    author: "CareMedBridge Team",
    demo: true,
    content: [
      {
        type: "paragraph",
        text: "In a small practice, billing usually falls on one person wearing several hats. The practices that thrive aren't the ones with more staff; they're the ones with tighter processes. These are the highest-leverage habits we see in well-run small practices.",
      },
      {
        type: "heading",
        text: "Fix the front end first",
      },
      {
        type: "paragraph",
        text: "Most small-practice denials start at the front desk: unverified insurance, missing authorizations, or inaccurate demographics. A two-minute eligibility check before the visit prevents hours of rework after a denial. Collect copays and known patient responsibility at check-in, not by statement.",
      },
      {
        type: "heading",
        text: "Submit claims fast and clean",
      },
      {
        type: "paragraph",
        text: "Claims sent within a day or two of the visit start the payment clock sooner, and claims checked before submission avoid preventable rejections. If your biller is also your front desk, a pre-submission checklist for the most common error types pays for itself immediately.",
      },
      {
        type: "heading",
        text: "Work AR by age, every week",
      },
      {
        type: "list",
        items: [
          "Set aside a fixed weekly block for follow-up on unpaid claims and protect it.",
          "Start with the oldest balances; they depreciate fastest and many are near timely-filing limits.",
          "Track denial reasons in simple categories so you can fix the source, not the symptom.",
          "Send statements on a consistent schedule and follow up on patient balances by phone when needed.",
        ],
      },
      {
        type: "paragraph",
        text: "When a lean team is still drowning, that's when a medical billing company for small practices earns its keep, handling the claims, denials, and follow-up so your one-person billing operation becomes a full team behind them. Explore our medical billing services or request a consultation to see what that would look like for your practice.",
      },
    ],
  },
];

export const blogCategories = [
  ...new Set(blogPosts.map((post) => post.category)),
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}
