import type { Service } from "@/types";

/**
 * CareMedBridge service catalog — single source of truth for /services index,
 * dynamic /services/[slug] detail pages, navigation, and the footer.
 *
 * Content rules:
 * - No invented statistics, certifications, client names, or compliance claims.
 * - USA market framing; keywords appear naturally, never stuffed.
 */
export const services: Service[] = [
  {
    id: "medical-billing",
    slug: "medical-billing",
    title: "Medical Billing",
    shortDescription: "End-to-end billing that maximizes reimbursements and reduces denials.",
    description:
      "Our expert billing team handles every step of the billing lifecycle — from charge capture and claim creation to submission, follow-up, and patient statements — so your practice can focus on patient care.",
    icon: "FileText",
    href: "/services/medical-billing",
    featured: true,
    detail: {
      overview: [
        "Medical billing sits at the center of your practice's financial health. Every encounter, every procedure, and every visit has to be translated accurately into a claim that payers will accept and pay promptly. When billing falls behind or errors slip through, revenue stalls and your team spends its time chasing paperwork instead of supporting patients.",
        "CareMedBridge provides full-service medical billing for physicians, private practices, clinics, and hospitals across the USA. Our billing specialists manage the complete lifecycle — charge entry, coding review, claim submission, payment posting, denial follow-up, and patient statements — as a seamless extension of your practice.",
      ],
      challenges: [
        { title: "Coding and data entry errors", description: "Small mistakes in demographics, codes, or modifiers trigger rejections and force costly rework." },
        { title: "Constantly changing payer rules", description: "Each insurer updates its policies, fee schedules, and submission requirements on its own timeline." },
        { title: "Slow, inconsistent follow-up", description: "Without dedicated follow-up, claims sit untouched until they age past the timely filing window." },
        { title: "Staff turnover and training costs", description: "Hiring, training, and retaining in-house billers is expensive and disrupts continuity." },
      ],
      howWeHelp: [
        { title: "A dedicated billing team", description: "You get an assigned billing team that learns your practice, your payers, and your workflows — not a rotating queue of strangers." },
        { title: "Clean-claim focus", description: "Every claim is reviewed for completeness and accuracy before submission to maximize first-pass acceptance." },
        { title: "Relentless follow-up", description: "We track every claim from submission to payment and work exceptions until they are resolved." },
        { title: "Clear monthly reporting", description: "You always know your collections, denial patterns, and AR status with plain-language reports." },
      ],
      workflow: [
        { title: "Charge capture & intake", description: "Encounter data flows in from your EHR, practice management system, or daily uploads — whatever fits your workflow." },
        { title: "Coding review & claim creation", description: "Charges are reviewed, coded, and assembled into compliant claims with correct modifiers and documentation links." },
        { title: "Claim scrubbing & submission", description: "Claims pass through pre-submission checks, then go electronically to clearinghouses and payers." },
        { title: "Payment posting & reconciliation", description: "Remittances are posted promptly and reconciled so your books always reflect reality." },
        { title: "Denial management & patient statements", description: "Denials are worked to resolution and patient balances are billed clearly and professionally." },
      ],
      benefits: [
        "Faster, more predictable reimbursements from every major payer",
        "Fewer denials and rejections through front-end quality checks",
        "Lower overhead compared with hiring and training in-house staff",
        "Full visibility into billing performance with monthly reporting",
        "A scalable team that grows with your practice",
        "More time for medicine — less time on the phone with payers",
      ],
      faqs: [
        { question: "What does full-service medical billing include?", answer: "Everything from charge entry and claim submission to payment posting, denial follow-up, and patient statements. You can also add coding, eligibility verification, and credentialing as needed." },
        { question: "Can you take over billing mid-year from our current setup?", answer: "Yes. We handle transitions from in-house teams or other billing companies regularly, including data handover, clearinghouse updates, and payer enrollment changes, with minimal disruption to your cash flow." },
        { question: "Do you work with our existing EHR or practice management system?", answer: "We work with most major EHR and practice management systems. During onboarding we review your current technology and design a workflow that fits the tools you already use." },
        { question: "How do you charge for medical billing services?", answer: "Most practices choose a percentage-of-collections model, so our fee scales with the revenue we actually collect for you. Flat-fee arrangements are also available. Every quote is custom — see our pricing page for details." },
      ],
      relatedSlugs: ["medical-coding", "denial-management", "payment-posting"],
    },
  },
  {
    id: "medical-coding",
    slug: "medical-coding",
    title: "Medical Coding",
    shortDescription: "Accurate ICD-10, CPT, and HCPCS coding by experienced specialists.",
    description:
      "Our coding specialists ensure precise code assignment to reduce audit risk, prevent claim rejections, and capture every dollar your practice has earned.",
    icon: "Code2",
    href: "/services/medical-coding",
    featured: true,
    detail: {
      overview: [
        "Coding is the language your claims speak. ICD-10 diagnosis codes, CPT procedure codes, and HCPCS supply codes must precisely match the documentation — undercoding leaves revenue on the table, while overcoding creates audit exposure. Getting coding right is the single highest-leverage step in your revenue cycle.",
        "CareMedBridge's medical coding services pair your documentation with specialty-aware coding professionals who assign accurate, well-supported codes for every encounter. We flag documentation gaps before they become denials and keep your providers informed as coding guidelines evolve.",
      ],
      challenges: [
        { title: "Enormous code set complexity", description: "Tens of thousands of ICD-10 and CPT codes with annual updates, new codes, and deleted codes to track." },
        { title: "Documentation gaps", description: "If the note doesn't support the code, the claim is vulnerable — no matter how the charge was coded." },
        { title: "Specialty-specific rules", description: "Cardiology, orthopedics, mental health, and every other specialty carries its own coding conventions and payer quirks." },
        { title: "Audit exposure", description: "Inconsistent or unsupported coding patterns attract payer audits, recoupments, and penalties." },
      ],
      howWeHelp: [
        { title: "Specialty-aware coders", description: "Your charts are coded by specialists who understand the procedures, terminology, and conventions of your field." },
        { title: "Documentation feedback loops", description: "We return specific, actionable feedback to providers when notes need detail — before claims go out the door." },
        { title: "Guideline vigilance", description: "Coding rules change constantly; our team tracks updates from CMS and major payers so your claims stay current." },
        { title: "Defensible coding", description: "Every code is supported by documentation, creating a clean record if a payer ever comes asking." },
      ],
      workflow: [
        { title: "Chart review", description: "We read the encounter documentation thoroughly — never coding from a charge slip alone." },
        { title: "Code assignment", description: "Accurate ICD-10, CPT, and HCPCS codes are selected, with modifiers applied where documentation supports them." },
        { title: "Quality check", description: "A second-pass review catches mismatches, unsupported codes, and bundling issues before billing." },
        { title: "Feedback & education", description: "Recurring documentation gaps are summarized for your providers so the same issue doesn't repeat." },
      ],
      benefits: [
        "Higher first-pass claim acceptance with fewer coding rejections",
        "Revenue captured through complete, accurate code assignment",
        "Lower audit risk with documentation-supported coding",
        "Providers spend less time answering coding questions",
        "Consistent coding standards across your entire practice",
        "Smooth handoff to billing with clean, ready-to-bill charges",
      ],
      faqs: [
        { question: "Which code sets do your coders work with?", answer: "ICD-10-CM for diagnoses, CPT for procedures, and HCPCS Level II for supplies, drugs, and non-physician services — plus payer-specific modifiers and NCCI edits." },
        { question: "Can you code for our specialty?", answer: "Our team covers a wide range of specialties, from primary care and pediatrics to cardiology, orthopedics, and mental health. Tell us your specialty during the consultation and we'll confirm the fit." },
        { question: "Do you provide coding only, or bundled with billing?", answer: "Both. Coding can stand alone for practices with their own billing staff, or it can be bundled into our full medical billing and RCM services." },
        { question: "How do you handle documentation that doesn't support a code?", answer: "We code only what the documentation supports and send specific feedback to the provider about what's missing, so the issue can be corrected at the source." },
      ],
      relatedSlugs: ["medical-billing", "claim-submission", "denial-management"],
    },
  },
  {
    id: "rcm",
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    shortDescription: "Full-cycle RCM to optimize cash flow from scheduling to payment.",
    description:
      "We manage your entire revenue cycle — patient access, charge capture, claims management, and collections — delivering consistent cash flow and financial transparency.",
    icon: "TrendingUp",
    href: "/services/revenue-cycle-management",
    featured: true,
    detail: {
      overview: [
        "Revenue cycle management is the discipline of getting paid correctly for every service you deliver — from the moment an appointment is scheduled to the moment the final balance clears. Healthcare revenue cycle management touches eligibility, coding, claims, payments, denials, and analytics, and weak links anywhere in the chain cost real money.",
        "CareMedBridge delivers end-to-end revenue cycle management services for practices and clinics across the USA. Instead of stitching together vendors and hoping the handoffs work, you get one accountable partner managing the entire cycle with clear metrics and regular reporting.",
      ],
      challenges: [
        { title: "Fragmented processes", description: "When eligibility, coding, billing, and AR live in different places, claims fall through the cracks between them." },
        { title: "No visibility into performance", description: "Without unified reporting, you can't see denial trends, aging AR, or collection rates until the damage is done." },
        { title: "Rising administrative burden", description: "Payer portals, prior authorizations, and documentation demands consume more staff time every year." },
        { title: "Inconsistent cash flow", description: "Revenue that arrives unpredictably makes it hard to plan, hire, and invest in your practice." },
      ],
      howWeHelp: [
        { title: "One accountable partner", description: "A single team owns your revenue cycle end to end — no finger-pointing between vendors when something goes wrong." },
        { title: "Metrics that matter", description: "We track clean claim rate, denial rate, days in AR, and net collection trends and share them with you plainly." },
        { title: "Front-to-back coverage", description: "Eligibility verification and prior auth at the front; denial management and AR recovery at the back — everything in between included." },
        { title: "Process improvement mindset", description: "Recurring problems get fixed at the source, so each month runs cleaner than the last." },
      ],
      workflow: [
        { title: "Patient access", description: "Eligibility verification, benefits checks, and prior authorization before the visit, so claims start clean." },
        { title: "Charge capture & coding", description: "Every encounter is coded accurately and captured completely — nothing billable is missed." },
        { title: "Claims management", description: "Clean claims go out fast, and every rejection or denial is worked until it's resolved." },
        { title: "Payment & collections", description: "Payments are posted accurately, patient balances are handled professionally, and aging AR is worked systematically." },
        { title: "Reporting & analysis", description: "Monthly performance reviews show exactly where your revenue cycle stands and what we're improving." },
      ],
      benefits: [
        "A single partner accountable for the entire revenue cycle",
        "More predictable cash flow for confident planning",
        "Improved clean claim rates and fewer write-offs",
        "Transparent reporting on the metrics that matter",
        "Reduced administrative burden on your staff",
        "Expertise applied consistently across every payer",
      ],
      faqs: [
        { question: "What's included in your RCM services?", answer: "Everything in the revenue cycle: eligibility verification, coding, claim submission, payment posting, denial management, AR follow-up, and reporting. Front office support and virtual assistance can be added for complete coverage." },
        { question: "How is RCM different from medical billing alone?", answer: "Billing is one stage of the cycle. RCM manages the whole flow — front-end patient access through back-end collections and analytics — so problems get prevented upstream instead of worked downstream." },
        { question: "Will we keep visibility into our financials?", answer: "Yes — you'll receive regular performance reporting covering collections, denials, AR aging, and key trends, and we're always available to walk through the numbers with you." },
        { question: "Do you support multi-specialty groups?", answer: "Yes. Our RCM programs scale from solo practices to multi-specialty groups, with specialty-aware coding and payer management across your providers." },
      ],
      relatedSlugs: ["medical-billing", "ar-recovery", "denial-management"],
    },
  },
  {
    id: "eligibility",
    slug: "insurance-eligibility-verification",
    title: "Insurance Eligibility Verification",
    shortDescription: "Real-time eligibility checks to prevent claim denials at the front door.",
    description:
      "We verify patient insurance benefits before each appointment, reducing denials, improving patient satisfaction, and protecting your revenue.",
    icon: "ShieldCheck",
    href: "/services/insurance-eligibility-verification",
    featured: true,
    detail: {
      overview: [
        "A surprising share of claim denials trace back to the front end: coverage that lapsed, benefits that ran out, or a service the patient's plan simply doesn't cover. Insurance eligibility verification catches these problems before the visit — when they're still easy and inexpensive to fix.",
        "CareMedBridge's insurance verification services check every patient's active coverage, benefits, deductibles, copays, and prior-auth requirements ahead of their appointment. Your front desk knows exactly what to collect, and your claims go out with confidence instead of crossing fingers.",
      ],
      challenges: [
        { title: "Coverage changes go unnoticed", description: "Patients switch employers, plans, and carriers — last month's information is often stale." },
        { title: "Manual checks eat staff time", description: "Phone calls and portal logins for every patient consume hours your front desk doesn't have." },
        { title: "Benefit details get missed", description: "Deductibles, visit limits, and referral requirements are easy to overlook until a denial arrives." },
        { title: "Surprise patient balances", description: "When patients learn costs at the desk instead of beforehand, collections and satisfaction both suffer." },
      ],
      howWeHelp: [
        { title: "Verification before every visit", description: "Each scheduled patient is verified in advance — coverage status, effective dates, and plan type confirmed." },
        { title: "Detailed benefit capture", description: "We pull copays, deductibles, coinsurance, and coverage limits so your team knows what to collect at check-in." },
        { title: "Prior-auth flagging", description: "When a service needs authorization, we flag it early so treatment isn't delayed." },
        { title: "Exception alerts", description: "Issues like inactive coverage or out-of-network status are escalated to your team immediately." },
      ],
      workflow: [
        { title: "Schedule sync", description: "Your upcoming appointments are shared daily through your PM system or a simple schedule file." },
        { title: "Payer verification", description: "We check eligibility through payer portals and electronic verification tools, plus calls when needed." },
        { title: "Benefits summary", description: "Results are compiled into clear summaries your front desk can act on at check-in." },
        { title: "Issue flagging", description: "Inactive coverage, plan changes, or auth requirements are flagged for outreach before the visit." },
        { title: "Confirmation loop", description: "Unresolved issues are followed up with patients or payers so no one arrives unprepared." },
      ],
      benefits: [
        "Fewer eligibility-related claim denials",
        "Accurate point-of-service collections at check-in",
        "Front desk hours returned to patient care",
        "Fewer surprise bills and happier patients",
        "Prior authorizations identified before treatment",
        "A cleaner start for every downstream billing step",
      ],
      faqs: [
        { question: "How far in advance do you verify patients?", answer: "Typically a few business days before each appointment, with a recheck for same-week schedule changes so the information is current on the day of the visit." },
        { question: "What exactly do you verify?", answer: "Active coverage, effective dates, copays, deductibles, coinsurance, coverage limits, referral and prior-auth requirements, and out-of-network status." },
        { question: "Can you handle same-day or walk-in patients?", answer: "Yes — we can verify on the day of service for urgent add-ons, though advance verification always produces the smoothest experience." },
        { question: "Does eligibility verification replace prior authorization?", answer: "No — verification confirms coverage; authorization obtains payer approval for specific services. The two work together, which is why we flag auth requirements during verification." },
      ],
      relatedSlugs: ["front-office-management", "prior-authorization", "claim-submission"],
    },
  },
  {
    id: "claim-submission",
    slug: "claim-submission",
    title: "Claim Submission",
    shortDescription: "Fast, accurate electronic claim submission to all major payers.",
    description:
      "We submit clean claims electronically to all major insurers, ensuring timely processing and minimizing delays in your reimbursement cycle.",
    icon: "Send",
    href: "/services/claim-submission",
    detail: {
      overview: [
        "Claim submission looks simple from the outside — assemble the claim, hit send, wait for payment. In practice, every payer has its own edits, format requirements, and quirks, and a claim that fails first-pass scrutiny can lose weeks in limbo before anyone notices.",
        "CareMedBridge's claim submission service focuses on getting claims right the first time: thorough pre-submission scrubbing, payer-specific edit checks, electronic submission through clearinghouses, and hands-on management of rejections the moment they come back.",
      ],
      challenges: [
        { title: "First-pass rejections", description: "Format errors, missing data, and invalid code combinations bounce claims before payers even see them." },
        { title: "Payer-specific requirements", description: "Each insurer applies its own edits, attachment rules, and filing limits differently." },
        { title: "Clearinghouse friction", description: "Rejections can sit unnoticed in clearinghouse queues unless someone is watching closely." },
        { title: "Timely filing pressure", description: "Miss a payer's filing window and the claim is lost revenue, no matter how clean it was." },
      ],
      howWeHelp: [
        { title: "Pre-submission scrubbing", description: "Claims pass automated and human checks for completeness, coding consistency, and common rejection triggers." },
        { title: "Payer-aware edits", description: "We maintain payer-specific requirements so claims arrive formatted the way each insurer expects." },
        { title: "Rapid electronic submission", description: "Clean claims flow to clearinghouses and payers electronically without avoidable delays." },
        { title: "Rejection management", description: "Rejections are corrected and resubmitted quickly — not discovered weeks later during reconciliation." },
      ],
      workflow: [
        { title: "Claim assembly", description: "Charges, codes, demographics, and documentation references are assembled into a complete claim." },
        { title: "Scrubbing & QA", description: "Automated edits plus specialist review catch errors before the claim ever leaves our hands." },
        { title: "Clearinghouse submission", description: "Claims transmit electronically with acknowledgments tracked for every batch." },
        { title: "Payer acknowledgment", description: "We confirm each claim is accepted by the payer, not just sent." },
        { title: "Exception resolution", description: "Rejections and edits are worked immediately and resubmitted within timely filing limits." },
      ],
      benefits: [
        "Higher first-pass acceptance rates",
        "Faster reimbursement through clean electronic filing",
        "Fewer lost claims and timely-filing write-offs",
        "Visibility into every claim's status",
        "Specialist handling of payer-specific requirements",
        "A stronger foundation for downstream denial management",
      ],
      faqs: [
        { question: "Which payers can you submit claims to?", answer: "We submit electronically to all major commercial insurers, Medicare, and Medicaid programs, plus workers' compensation and auto carriers where electronic filing is supported." },
        { question: "What is claim scrubbing?", answer: "A pre-submission review that checks claims for missing information, invalid code combinations, and payer-specific requirements — catching problems while they're still cheap to fix." },
        { question: "How quickly are claims submitted after service?", answer: "Claims are prepared and submitted on a daily workflow, so charges don't accumulate and filing windows are never at risk." },
        { question: "What happens when a claim is rejected?", answer: "We correct the issue and resubmit promptly, then track the claim to payment. Recurring rejection causes are flagged for prevention upstream." },
      ],
      relatedSlugs: ["medical-billing", "medical-coding", "denial-management"],
    },
  },
  {
    id: "denial-management",
    slug: "denial-management",
    title: "Denial Management",
    shortDescription: "Rapid denial analysis and appeals to recover lost revenue.",
    description:
      "Our denial management specialists identify root causes, correct errors, and file timely appeals — recovering revenue that might otherwise be written off.",
    icon: "RotateCcw",
    href: "/services/denial-management",
    detail: {
      overview: [
        "Denied claims are rarely the end of the story — but they become lost revenue when no one has time to analyze them, appeal them, and fix what caused them. Effective denial management services treat every denial as both a recovery opportunity and a datapoint for prevention.",
        "CareMedBridge's denial management team triages every denial quickly, determines the fastest path to payment, and builds the appeal with solid documentation. Just as importantly, we feed denial patterns back into your front-end processes so the same denials stop happening.",
      ],
      challenges: [
        { title: "Appeal windows close fast", description: "Payer appeal deadlines are often measured in days — missed once, the revenue is usually gone." },
        { title: "Root causes stay hidden", description: "Without categorization and analysis, the same denial types recur month after month." },
        { title: "Appeals are labor-intensive", description: "Strong appeals require documentation gathering, payer-specific arguments, and persistent follow-up." },
        { title: "Denials quietly become write-offs", description: "Unworked denials age into adjustments that look routine but represent real lost revenue." },
      ],
      howWeHelp: [
        { title: "Fast denial triage", description: "Every denial is categorized and prioritized quickly so nothing expires in a queue." },
        { title: "Root-cause analysis", description: "Denials are grouped by cause — coding, eligibility, documentation, timely filing — to reveal systemic fixes." },
        { title: "Professional appeals", description: "We draft payer-specific appeals supported by documentation, coding references, and clinical records." },
        { title: "Prevention feedback loops", description: "Trends are reported back into eligibility, coding, and submission workflows to stop denials at the source." },
      ],
      workflow: [
        { title: "Denial intake", description: "Denials are captured from payer remits and portals as they arrive — not at month-end." },
        { title: "Triage & root cause", description: "Each denial is categorized, valued, and routed to the fastest resolution path." },
        { title: "Correction & resubmission", description: "Correctable errors are fixed and claims resubmitted within filing limits." },
        { title: "Appeal preparation", description: "For upheld denials, we build documented appeals and track them to decision." },
        { title: "Trend reporting", description: "Monthly denial analysis shows causes, outcomes, and the fixes applied upstream." },
      ],
      benefits: [
        "Revenue recovered that would otherwise be written off",
        "A declining denial rate as root causes get fixed",
        "No missed appeal windows through systematic triage",
        "Professional, documented appeals payers take seriously",
        "Visibility into denial trends by payer, code, and cause",
        "Compounding improvement across your revenue cycle",
      ],
      faqs: [
        { question: "What types of denials do you handle?", answer: "All of them — coding denials, eligibility issues, medical necessity, documentation requests, timely filing, coordination of benefits, and more — each with the appropriate correction or appeal path." },
        { question: "How quickly do you work denials?", answer: "Denials are triaged as they arrive and prioritized by appeal deadline and dollar value, so time-sensitive cases are always handled first." },
        { question: "Can you reduce our denial rate long-term?", answer: "Yes — recovery is only half the job. Root-cause reporting feeds fixes into eligibility verification, coding, and claim submission, so denial rates trend down over time." },
        { question: "Do you handle both commercial and government payer denials?", answer: "Yes, including Medicare, Medicaid, and commercial insurers, each with their own appeal formats and requirements." },
      ],
      relatedSlugs: ["ar-recovery", "claim-submission", "revenue-cycle-management"],
    },
  },
  {
    id: "ar-recovery",
    slug: "ar-recovery",
    title: "AR Recovery",
    shortDescription: "Aggressive, systematic follow-up on aging accounts receivable.",
    description:
      "We work your aging AR balances systematically — prioritizing high-value claims and following up relentlessly to recover outstanding reimbursements.",
    icon: "DollarSign",
    href: "/services/ar-recovery",
    detail: {
      overview: [
        "Accounts receivable is money your practice has already earned — it's just sitting in payer queues, appeal loops, or unworked follow-up piles. Aging AR rarely resolves itself; without systematic attention, balances get adjusted away or quietly abandoned.",
        "CareMedBridge's accounts receivable recovery services bring discipline to your AR: full aging analysis, intelligent prioritization, persistent payer follow-up, and clean resolution tracking. Whether as ongoing AR management or a focused cleanup project, we turn aging reports into collected revenue.",
      ],
      challenges: [
        { title: "Aging buckets keep growing", description: "Without daily attention, 30-day balances become 90-day balances and then write-offs." },
        { title: "Follow-up is hard to prioritize", description: "Working AR by balance alone wastes effort; the highest-return claims deserve the first calls." },
        { title: "Payer phone queues and portals", description: "Status checks mean long hold times and fragmented portal checks across dozens of payers." },
        { title: "Staff bandwidth runs out", description: "Your team can only make so many calls a day — and everything else competes with follow-up." },
      ],
      howWeHelp: [
        { title: "Full AR analysis first", description: "We start with a complete aging review so you know exactly what's outstanding and why." },
        { title: "Smart prioritization", description: "Worklists rank claims by value, age, and recoverability — effort goes where the return is." },
        { title: "Persistent payer follow-up", description: "Calls, portal checks, and re-submissions continue until every claim reaches resolution." },
        { title: "Clean resolution tracking", description: "Every account is documented — what's owed, what's blocking it, and when it's resolved." },
      ],
      workflow: [
        { title: "AR analysis", description: "Your aging report is segmented by payer, age, denial status, and dollar value." },
        { title: "Prioritized worklists", description: "High-value and near-deadline claims are queued first, with systematic coverage of the rest." },
        { title: "Status follow-up", description: "We check claim status through calls and portals, correct issues, and resubmit where needed." },
        { title: "Escalation & appeal", description: "Stalled claims are escalated or appealed before timely filing windows close." },
        { title: "Resolution & reporting", description: "Recovered payments are reconciled and progress is reported against the starting AR." },
      ],
      benefits: [
        "Cash recovered from balances you'd written off mentally",
        "Shrinking AR aging across every payer",
        "A disciplined follow-up cadence that never skips a week",
        "Clean documentation of every account's status",
        "Lower write-off rates and stronger net collections",
        "Your staff freed from hours of payer phone queues",
      ],
      faqs: [
        { question: "Can you work a one-time AR cleanup project?", answer: "Yes — many practices start with a focused cleanup of aged balances, then keep us on for ongoing AR management. Both engagements follow the same systematic process." },
        { question: "How old can AR be and still be recoverable?", answer: "It depends on payer timely-filing and appeal limits, which is why age-based prioritization matters. The sooner we start, the more of the aging report we can convert to cash." },
        { question: "How do you report progress?", answer: "You'll see starting balances, follow-up activity, recoveries, and remaining AR — with aging trends so you can watch the cleanup take effect." },
        { question: "Do you also prevent new AR from piling up?", answer: "Yes — ongoing AR management pairs recovery with denial prevention and claim status monitoring so new balances resolve quickly instead of aging out." },
      ],
      relatedSlugs: ["denial-management", "payment-posting", "revenue-cycle-management"],
    },
  },
  {
    id: "credentialing",
    slug: "credentialing",
    title: "Credentialing",
    shortDescription: "Provider credentialing and re-credentialing with all major payers.",
    description:
      "We handle the complex credentialing process with commercial insurers and government payers, so your providers can start billing without delay.",
    icon: "Award",
    href: "/services/credentialing",
    detail: {
      overview: [
        "Credentialing is the gatekeeper of your revenue: a provider can't bill a payer until enrollment is complete, and every week of delay is revenue deferred. Medical credentialing services manage the paperwork, follow-ups, and deadlines that make the difference between a smooth start and months of frustration.",
        "CareMedBridge handles the credentialing lifecycle end to end — initial payer enrollments, CAQH profile maintenance, re-credentialing cycles, and ongoing monitoring of expiration dates — so your providers stay billable and your practice avoids coverage gaps.",
      ],
      challenges: [
        { title: "Lengthy payer timelines", description: "Enrollment applications can take weeks to months, and errors restart the clock." },
        { title: "Payer-specific requirements", description: "Every insurer wants the same information in a different format, with different supporting documents." },
        { title: "CAQH and attestations", description: "Profiles need constant upkeep — one lapsed attestation can freeze multiple enrollments." },
        { title: "Expiring credentials", description: "Licenses, board certifications, and re-credentialing cycles expire on their own schedules." },
      ],
      howWeHelp: [
        { title: "Complete application management", description: "We prepare, submit, and track applications with payers, following up persistently until approval." },
        { title: "CAQH profile upkeep", description: "Your CAQH profiles stay current and attested, so payer rosters never stall on outdated data." },
        { title: "Re-credentialing handled", description: "Re-credentialing cycles are tracked and completed before payers interrupt your billing." },
        { title: "Expiration monitoring", description: "Licenses, certifications, and enrollment renewals are calendarized with advance alerts." },
      ],
      workflow: [
        { title: "Data collection", description: "Provider demographics, licenses, education, and work history are gathered into complete files." },
        { title: "Application submission", description: "Payer and CAQH applications are prepared accurately and submitted without delays." },
        { title: "Payer follow-up", description: "We track application status with each payer and resolve requests for additional information." },
        { title: "Approval & effective dates", description: "Enrollment confirmations and effective dates are documented so billing starts on time." },
        { title: "Ongoing maintenance", description: "Re-credentialing cycles and expirables are monitored continuously, with renewals started early." },
      ],
      benefits: [
        "Providers billable sooner with managed enrollment timelines",
        "No billing interruptions from lapsed re-credentialing",
        "CAQH profiles maintained and attested consistently",
        "A single organized file per provider, always current",
        "Fewer application errors and restarted processes",
        "Peace of mind from proactive expiration monitoring",
      ],
      faqs: [
        { question: "What credentialing services do you provide?", answer: "Initial payer enrollment for new providers, CAQH profile setup and maintenance, re-credentialing cycles, roster maintenance, and monitoring of licenses and expiring credentials." },
        { question: "How long does payer enrollment take?", answer: "Timelines vary by payer and can run from a few weeks to a few months. We control what we can — complete, accurate applications and persistent follow-up — to keep things moving." },
        { question: "Can you credential a newly graduated provider?", answer: "Yes. We assemble the file from their training and licensure history and manage enrollments from day one so billing can begin as early as payer effective dates allow." },
        { question: "Do you track re-credentialing deadlines?", answer: "Yes — re-credentialing cycles and license expirations are calendared with advance notice, and renewals are started well before deadlines." },
      ],
      relatedSlugs: ["front-office-management", "prior-authorization", "medical-billing"],
    },
  },
  {
    id: "prior-auth",
    slug: "prior-authorization",
    title: "Prior Authorization",
    shortDescription: "Timely prior authorization management to prevent service delays.",
    description:
      "We manage the prior authorization process with payers, reducing administrative burden and ensuring treatments are authorized before services are rendered.",
    icon: "ClipboardCheck",
    href: "/services/prior-authorization",
    detail: {
      overview: [
        "Prior authorization requirements keep expanding — more procedures, more drugs, more payer scrutiny. For practices, that means hours of portal work, documentation assembly, and status chasing. For patients, it can mean delayed care. Prior authorization services exist to keep that process moving without burying your staff.",
        "CareMedBridge manages prior authorizations from request to decision: identifying auth requirements, assembling clinical documentation, submitting through payer channels, and following up relentlessly until approval — so schedules stay full and treatments start on time.",
      ],
      challenges: [
        { title: "Scattered payer portals", description: "Each insurer has its own portal, forms, and clinical criteria — multiplied across your procedure list." },
        { title: "Documentation demands", description: "Clinical notes, imaging, and therapy history are frequently required, in payer-specific formats." },
        { title: "Status black holes", description: "Auth requests routinely stall in 'pending' while appointment dates approach." },
        { title: "Delayed patient care", description: "When auth isn't ready in time, procedures reschedule and patients wait — hurting care and revenue." },
      ],
      howWeHelp: [
        { title: "Requirement identification", description: "We confirm which services need authorization with which payers before they're scheduled." },
        { title: "Documentation assembly", description: "Clinical notes and supporting records are compiled to match each payer's criteria." },
        { title: "Submission & tracking", description: "Requests are submitted through the right channels and tracked daily until decision." },
        { title: "Escalation when stalled", description: "Pending requests are escalated proactively so appointment dates never slip silently." },
      ],
      workflow: [
        { title: "Request intake", description: "Auth needs arrive from your scheduling or clinical team as procedures are planned." },
        { title: "Criteria & documentation check", description: "We confirm payer medical-necessity criteria and gather the clinical documentation to support the request." },
        { title: "Submission", description: "Requests go through payer portals, phone lines, or electronic auth systems — whichever each payer requires." },
        { title: "Status follow-up", description: "Pending requests are checked daily and escalated as decision deadlines approach." },
        { title: "Decision recording", description: "Auth numbers, valid dates, and visit limits are documented and shared with your scheduling team." },
      ],
      benefits: [
        "Fewer delayed or rescheduled procedures",
        "Hours of portal work returned to your clinical staff",
        "Complete, criteria-matched documentation on every request",
        "Daily visibility into auth status — no black holes",
        "Decisions documented with numbers and valid dates",
        "Smoother patient experience around planned care",
      ],
      faqs: [
        { question: "Which services typically need prior authorization?", answer: "It varies by payer, but commonly includes advanced imaging, surgeries, DME, specialty medications, therapy services, and certain procedures. We confirm requirements payer by payer." },
        { question: "How far in advance should auth requests be submitted?", answer: "As early as the procedure is planned — payer review times vary widely, and early submission leaves room for escalation if a request stalls." },
        { question: "Do you handle urgent or expedited authorizations?", answer: "Yes — urgent clinical situations are flagged and worked through expedited channels with immediate follow-up." },
        { question: "What happens if an auth is denied?", answer: "We review the denial reason, work with your clinical team to strengthen documentation where appropriate, and pursue the payer's appeal or peer-to-peer review process." },
        { question: "Can you handle medication and specialty drug authorizations?", answer: "Yes — we manage prior authorizations for procedures, imaging, therapy services, and specialty medications, each with its own payer pathways and documentation requirements." },
      ],
      relatedSlugs: ["insurance-eligibility-verification", "front-office-management", "claim-submission"],
    },
  },
  {
    id: "payment-posting",
    slug: "payment-posting",
    title: "Payment Posting",
    shortDescription: "Accurate and timely posting of all insurance and patient payments.",
    description:
      "We post insurance EOBs and patient payments accurately and promptly, giving you a real-time view of your practice's financial performance.",
    icon: "CreditCard",
    href: "/services/payment-posting",
    detail: {
      overview: [
        "Payment posting is where your revenue cycle meets reality: every remittance, adjustment, and patient payment lands here. When posting is slow or inaccurate, everything downstream — AR follow-up, denial detection, financial reporting — works from bad information.",
        "CareMedBridge posts insurance ERAs/EOBs and patient payments accurately and on schedule, reconciling every remittance against expected reimbursement and flagging variances. You get books that reflect reality and problems surfaced while they're still fixable.",
      ],
      challenges: [
        { title: "Complex remittance formats", description: "ERAs, EOBs, and patient payments arrive in different formats with dense adjustment codes." },
        { title: "Underpayments hide in plain sight", description: "Contractual variances are easy to miss when posting is treated as pure data entry." },
        { title: "Posting backlogs", description: "When posting falls behind, your AR picture lags — sometimes by weeks." },
        { title: "Adjustment chaos", description: "Inconsistent adjustment codes corrupt reporting and trigger misinformed decisions." },
      ],
      howWeHelp: [
        { title: "Timely, accurate posting", description: "Remittances are posted on a daily rhythm so your financials stay current." },
        { title: "Variance flagging", description: "Payments that deviate from contracted or expected amounts are flagged for follow-up." },
        { title: "Denial capture at the source", description: "Denial codes on remits are captured immediately and routed into denial management." },
        { title: "Clean adjustment practices", description: "Adjustments are posted with consistent, meaningful codes your reporting can trust." },
      ],
      workflow: [
        { title: "Remittance receipt", description: "ERAs flow in electronically; paper EOBs are handled through an established process." },
        { title: "Payment posting", description: "Payments, adjustments, and denial codes are posted to the correct claims and patient accounts." },
        { title: "Reconciliation", description: "Posted amounts are reconciled against remit totals and expected reimbursement." },
        { title: "Exception handling", description: "Variances, denials, and mismatches are flagged and routed for resolution." },
        { title: "Reporting", description: "Posting activity feeds your monthly reports — collections, adjustments, and trends." },
      ],
      benefits: [
        "Financial reports you can actually trust",
        "Underpayments and variances surfaced quickly",
        "Denials captured the moment remits arrive",
        "Daily-rhythm posting with no backlogs",
        "Clean data for secondary billing and AR work",
        "Consistent adjustment coding across payers",
      ],
      faqs: [
        { question: "Do you post both insurance and patient payments?", answer: "Yes — ERAs/EOBs from insurers, patient payments from statements and portals, and secondary remittances, all posted to the correct accounts." },
        { question: "How do you catch underpayments?", answer: "Posted amounts are compared against expected reimbursement, and variances are flagged for review rather than silently adjusted away." },
        { question: "Can you work with paper EOBs?", answer: "Yes. Electronic remittances are preferred, but we handle paper EOBs through a defined scanning and posting workflow." },
        { question: "How does payment posting connect to denial management?", answer: "Denial codes on remits are captured during posting and flow straight into denial triage, so nothing waits for a month-end report." },
      ],
      relatedSlugs: ["ar-recovery", "medical-billing", "denial-management"],
    },
  },
  {
    id: "virtual-assistance",
    slug: "virtual-assistance",
    title: "Virtual Assistance",
    shortDescription: "Dedicated virtual staff to handle administrative tasks efficiently.",
    description:
      "Our trained virtual assistants handle scheduling, documentation, follow-ups, and more — giving your in-house team capacity to focus on patients.",
    icon: "Headphones",
    href: "/services/virtual-assistance",
    detail: {
      overview: [
        "Healthcare administration has a way of expanding until it consumes every free hour your team has. Virtual assistance gives your practice trained, dedicated support for the repetitive work — data entry, follow-ups, scheduling support, documentation tasks — without another full-time local hire.",
        "CareMedBridge's virtual assistants work as an extension of your staff under your workflows and tools. You define the tasks and coverage; we provide the trained people and the management overhead, with clear reporting on what's getting done.",
      ],
      challenges: [
        { title: "Staff burnout and turnover", description: "Repetitive admin work burns out good employees and drives expensive turnover." },
        { title: "Hiring costs keep climbing", description: "Salary, benefits, training, and office space make each local hire a major commitment." },
        { title: "Work falls through the cracks", description: "Follow-ups, faxes, and data entry pile up when the day runs out of hours." },
        { title: "Coverage gaps", description: "Sick days, vacations, and vacancies leave your practice exposed at the worst times." },
      ],
      howWeHelp: [
        { title: "Dedicated assigned assistants", description: "You work with the same trained assistants — people who learn your practice, not a ticket queue." },
        { title: "Flexible task coverage", description: "From data entry and scheduling support to patient follow-up calls and document management." },
        { title: "Supervised and managed", description: "Assistants are trained, managed, and quality-checked, so performance doesn't depend on luck." },
        { title: "Transparent productivity", description: "Clear reporting shows what's been completed, so you always know your coverage is real." },
      ],
      workflow: [
        { title: "Task definition", description: "We map the admin work consuming your team and define what the assistant will own." },
        { title: "Workflow setup", description: "Secure access, tools, and procedures are established to match your practice's processes." },
        { title: "Daily execution", description: "Your assistant completes assigned tasks on a defined schedule with check-ins as needed." },
        { title: "Review & reporting", description: "Completed work is reviewed for quality and reported so coverage stays visible." },
      ],
      benefits: [
        "Lower cost than hiring locally for the same coverage",
        "Your in-house team refocused on patients, not paperwork",
        "Consistent, dedicated support — not a rotating temp pool",
        "Scalable hours that flex with your workload",
        "Backup coverage that doesn't disappear on sick days",
        "Clear reporting on tasks completed",
      ],
      faqs: [
        { question: "What tasks can a medical virtual assistant handle?", answer: "Common assignments include scheduling support, insurance calls, data entry, document management, patient follow-ups, and referral coordination — scoped with you during setup." },
        { question: "How do you protect patient information?", answer: "Access is scoped to assigned tasks, assistants work under confidentiality obligations, and we align with your practice's security policies. Ask us about safeguards during your consultation." },
        { question: "Can the assistant work inside our systems?", answer: "Yes — with your authorization, assistants work inside your EHR, PM system, and other practice tools under your existing workflows." },
        { question: "How is pricing structured for virtual assistance?", answer: "Typically a flat monthly rate based on hours and task scope. We'll define the coverage during consultation and quote accordingly." },
      ],
      relatedSlugs: ["front-office-management", "prior-authorization", "insurance-eligibility-verification"],
    },
  },
  {
    id: "front-office",
    slug: "front-office-management",
    title: "Front Office Management",
    shortDescription: "Streamlined front office operations for a superior patient experience.",
    description:
      "We support your front office with appointment scheduling, patient registration, insurance verification, and call handling — keeping your practice running smoothly.",
    icon: "Building2",
    href: "/services/front-office-management",
    detail: {
      overview: [
        "Your front office sets the tone for every patient interaction — and quietly controls a huge share of your revenue cycle's success. Accurate demographics, verified insurance, full schedules, and answered phones determine whether billing starts clean and patients come back.",
        "CareMedBridge's front office management services cover the operational core of your practice: scheduling, registration, insurance verification, call handling, and daily front-desk workflows. Your patients get a responsive, professional first touch, and your billing gets clean data from the very first step.",
      ],
      challenges: [
        { title: "High call volumes", description: "Phones ring constantly, and every missed call is a potentially missed appointment." },
        { title: "Registration errors", description: "One wrong member ID or birth date follows a claim all the way to a denial." },
        { title: "Schedule gaps and no-shows", description: "Unmanaged scheduling leaks revenue through empty slots every single day." },
        { title: "Front desk overload", description: "Checking in patients while verifying benefits and answering phones is more than one person can do well." },
      ],
      howWeHelp: [
        { title: "Professional call handling", description: "Appointment calls, reminders, and patient questions are answered promptly and professionally." },
        { title: "Accurate registration", description: "Demographics and insurance details are captured carefully and verified at entry." },
        { title: "Proactive scheduling support", description: "Confirmation calls and reminder workflows keep schedules full and no-shows down." },
        { title: "Insurance checks at the front", description: "Eligibility is verified before visits, so collections at check-in are accurate." },
      ],
      workflow: [
        { title: "Workflow assessment", description: "We map your current front-office operations and identify where support has the most impact." },
        { title: "Setup & training", description: "Scripts, procedures, and system access are established to match your practice's standards." },
        { title: "Daily operations", description: "Scheduling, registration, verification, and call handling run on a consistent daily rhythm." },
        { title: "Quality review", description: "Accuracy and responsiveness are monitored and reported, so standards stay high." },
      ],
      benefits: [
        "Every patient call answered, every appointment confirmed",
        "Cleaner demographics and fewer front-end denials",
        "Fuller schedules through reminders and gap management",
        "A better first impression for every patient",
        "Front desk staff freed from overload",
        "Billing that starts clean from the very first step",
      ],
      faqs: [
        { question: "What does front office management cover?", answer: "Appointment scheduling, patient registration, insurance eligibility verification, call handling, reminders, and daily front-desk workflows — scoped to your practice's needs." },
        { question: "Will patients know they're talking to an outside team?", answer: "No — our team answers as your practice, following your scripts and standards, so the experience is seamless." },
        { question: "Can you support our existing phone system and scheduling software?", answer: "In most cases, yes. We review your systems during consultation and design the coverage around the tools you already use." },
        { question: "How does this connect with your billing services?", answer: "Perfectly — clean registration and verification at the front end is the foundation of clean claims, and the two services share the same data flow." },
      ],
      relatedSlugs: ["insurance-eligibility-verification", "virtual-assistance", "credentialing"],
    },
  },
];

export const featuredServices = services.filter((s) => s.featured);

/** Helper: find a service by its URL slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
