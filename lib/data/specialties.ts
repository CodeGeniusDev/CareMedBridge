import type { Specialty } from "@/types";

/**
 * CareMedBridge specialty catalog — powers /specialties and /specialties/[id].
 * Pages describe specialty-specific billing knowledge; they do not claim any
 * real client relationships. Keep content general, accurate, and free of
 * unverifiable claims (no stats, certifications, or named clients).
 */
export const specialties: Specialty[] = [
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    icon: "Stethoscope",
    description:
      "Comprehensive billing for general internal medicine and primary care practices.",
    href: "/specialties/internal-medicine",
    detail: {
      overview: [
        "Internal medicine practices live on evaluation and management coding. High visit volumes, complex chronic-condition management, and constant payer policy changes make internal medicine billing deceptively demanding, and small coding inconsistencies compound quickly at this scale.",
        "Our team supports internists with accurate E/M level selection, preventive-visit splits, and chronic care management billing, keeping claims clean while keeping providers focused on their adult-medicine panels.",
      ],
      considerations: [
        {
          title: "E/M level accuracy",
          description:
            "Medical decision-making and time-based coding must match documentation to survive payer scrutiny.",
        },
        {
          title: "Preventive plus problem visits",
          description:
            "Annual physicals with additional problem visits require split billing that payers audit closely.",
        },
        {
          title: "Chronic care management",
          description:
            "CCM and similar care-management codes add revenue when documented and billed correctly.",
        },
        {
          title: "Multi-diagnosis coding",
          description:
            "Complex panels mean claims carry many ICD-10 codes that must be ordered and supported properly.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "medical-coding",
        "revenue-cycle-management",
        "insurance-eligibility-verification",
      ],
      faqs: [
        {
          question: "Do you handle preventive and problem-visit split billing?",
          answer:
            "Yes. We bill the preventive visit and the problem-oriented portion correctly with the modifiers payers expect, based on the documentation.",
        },
        {
          question: "Can you bill chronic care management for our practice?",
          answer:
            "Yes, where the service is documented and meets the coverage requirements. We'll help establish the workflow so it can be captured consistently.",
        },
        {
          question: "Do you support hospital-affiliated internists?",
          answer:
            "Our services are built for office-based practices. Tell us about your setting during the consultation and we'll confirm fit.",
        },
      ],
    },
  },
  {
    id: "family-medicine",
    title: "Family Medicine",
    icon: "Heart",
    description:
      "Revenue cycle solutions tailored for family medicine practices of all sizes.",
    href: "/specialties/family-medicine",
    detail: {
      overview: [
        "Family medicine spans every age group and care setting, which means one of the broadest billing profiles in healthcare. Well-child visits, geriatric care, minor procedures, and chronic disease management all carry different rules, often within the same day.",
        "We help family practices keep this breadth under control with specialty-aware coding, front-office support, and eligibility workflows that hold up across a diverse payer mix, including Medicare and Medicaid.",
      ],
      considerations: [
        {
          title: "Age-spanning coding",
          description:
            "Well-child, adolescent, adult, and geriatric visits each follow different coding conventions.",
        },
        {
          title: "Broad payer mix",
          description:
            "Commercial, Medicare, and Medicaid patients in one panel mean constant payer-specific adjustments.",
        },
        {
          title: "Preventive service splits",
          description:
            "Sports physicals, screenings, and wellness visits have distinct coverage and cost-sharing rules.",
        },
        {
          title: "High-volume, thin margins",
          description:
            "Family practices run on volume, so every denied claim weighs more heavily on the bottom line.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "front-office-management",
        "insurance-eligibility-verification",
        "revenue-cycle-management",
      ],
      faqs: [
        {
          question: "Can you handle our mixed payer panel?",
          answer:
            "Yes. We work across commercial, Medicare, and Medicaid payers daily and manage their differing rules, timely filing limits, and coverage policies.",
        },
        {
          question: "Do you support rural and independent family practices?",
          answer:
            "Absolutely. Small and independent practices are a core part of who we serve, with flexible service packages sized to your volume.",
        },
        {
          question: "Can you take over mid-year from our current biller?",
          answer:
            "Yes. We manage transitions carefully with data handover and clearinghouse updates so cash flow doesn't stall.",
        },
      ],
    },
  },
  {
    id: "primary-care",
    title: "Primary Care",
    icon: "HeartPulse",
    description:
      "Billing support for primary care practices, from solo providers to large panels.",
    href: "/specialties/primary-care",
    detail: {
      overview: [
        "Primary care is the front door of the healthcare system, and its billing rewards the practices that capture the full value of that role. Annual wellness visits, care management services, and same-day access all represent legitimate revenue that many primary care practices leave unbilled.",
        "CareMedBridge helps primary care practices build billing workflows around the realities of panel-based care: routine wellness coding, chronic condition management, and high-throughput scheduling that never lets claims fall behind.",
      ],
      considerations: [
        {
          title: "Wellness visit coding",
          description:
            "Annual wellness visits and initial preventive exams have specific eligibility windows and documentation needs.",
        },
        {
          title: "Care management services",
          description:
            "Chronic care and transitional care management add revenue but require correct enrollment and documentation.",
        },
        {
          title: "Same-day visit volume",
          description:
            "High daily visit counts demand a billing rhythm that keeps claims flowing without backlogs.",
        },
        {
          title: "Panel-based consistency",
          description:
            "Coding standards must stay consistent across providers, locations, and rotating staff.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "medical-coding",
        "virtual-assistance",
        "front-office-management",
      ],
      faqs: [
        {
          question: "Which wellness visits can you bill for us?",
          answer:
            "Annual wellness visits, initial preventive physical exams, and related preventive services, each with the correct eligibility logic and documentation support.",
        },
        {
          question: "Can you help us add care management billing?",
          answer:
            "Yes. We set up the coding and documentation workflow for chronic care management and similar services where they're appropriate for your panel.",
        },
        {
          question: "Do you serve new primary care practices?",
          answer:
            "Yes, from day one, including credentialing so your providers are enrolled with payers before the first patient arrives.",
        },
      ],
    },
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    icon: "Baby",
    description:
      "Comprehensive RCM for pediatric practices, including well-child visits.",
    href: "/specialties/pediatrics",
    detail: {
      overview: [
        "Pediatric billing runs on a schedule. Well-child visits happen at precise age intervals, immunization administration is tracked carefully, and developmental screenings need precise coding to match payer expectations. Miss the schedule's logic and claims bounce.",
        "Our team supports pediatric practices with age-appropriate coding, immunization billing, and eligibility workflows built around guardians, dependents, and coverage that changes as families change.",
      ],
      considerations: [
        {
          title: "Well-child visit schedules",
          description:
            "Age-specific preventive codes must match the patient's age on the date of service exactly.",
        },
        {
          title: "Immunization billing",
          description:
            "Vaccine products and administration codes carry separate rules, including program-specific requirements.",
        },
        {
          title: "Guardian and dependent coverage",
          description:
            "Verifying which parent carries coverage and under which plan prevents front-end denials.",
        },
        {
          title: "Developmental screening",
          description:
            "Screening and surveillance services have specific coding that is frequently underused or misapplied.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "insurance-eligibility-verification",
        "claim-submission",
        "denial-management",
      ],
      faqs: [
        {
          question: "Do you handle immunization billing?",
          answer:
            "Yes, including product and administration coding and the program-specific rules that apply to publicly funded vaccines.",
        },
        {
          question:
            "How do you verify coverage for children with divorced parents?",
          answer:
            "We verify both parents' plans where provided and establish the coordination of benefits so claims route correctly the first time.",
        },
        {
          question: "Can you support a solo pediatrician?",
          answer:
            "Yes. Solo and small pediatric practices are exactly who our flexible billing packages are built for.",
        },
      ],
    },
  },
  {
    id: "cardiology",
    title: "Cardiology",
    icon: "Activity",
    description:
      "Expert coding and billing for cardiology procedures and diagnostic services.",
    href: "/specialties/cardiology",
    detail: {
      overview: [
        "Cardiology billing combines high-value procedures, sophisticated diagnostic testing, and strict payer scrutiny. From echocardiograms and stress testing to device management and global surgical periods, the coding precision required is among the highest in medicine.",
        "Our cardiology billing support covers test coding with correct modifiers, prior authorization for imaging and devices, and denial defense for a specialty where recoupment reviews are common and documentation is everything.",
      ],
      considerations: [
        {
          title: "Global period management",
          description:
            "Cardiovascular procedures carry global periods that govern what can and cannot be billed separately.",
        },
        {
          title: "Diagnostic test coding",
          description:
            "Echo, stress, and monitoring studies require precise code and modifier combinations to be paid correctly.",
        },
        {
          title: "Prior authorization demands",
          description:
            "Advanced imaging and devices commonly require authorization with clinical documentation.",
        },
        {
          title: "Medical necessity scrutiny",
          description:
            "Cardiology services face heavy medical-necessity review, making documentation-code alignment critical.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "medical-billing",
        "denial-management",
      ],
      faqs: [
        {
          question: "Do you code cardiac procedures as well as diagnostics?",
          answer:
            "Yes. Our cardiology coding covers diagnostic testing and interventional procedures, with attention to global periods and modifier accuracy.",
        },
        {
          question: "Can you manage prior authorizations for imaging?",
          answer:
            "Yes. We handle auth requirements for echocardiography, stress testing, CT, and MR imaging with the clinical documentation payers expect.",
        },
        {
          question: "How do you handle cardiology denials and audits?",
          answer:
            "Denials are triaged quickly with documentation-backed appeals, and coding patterns are reviewed so the same issues don't recur.",
        },
      ],
    },
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    icon: "Bone",
    description:
      "Specialized billing for orthopedic surgery, joint replacement, and sports medicine.",
    href: "/specialties/orthopedics",
    detail: {
      overview: [
        "Orthopedic billing lives at the intersection of office visits, surgeries, global periods, and durable medical equipment. Each fracture care decision, injection, and brace carries billing consequences that demand specialty fluency.",
        "We support orthopedic and sports medicine practices with procedure coding, global-period management, DME billing, and prior authorization workflows that keep surgical schedules moving and claims accurate.",
      ],
      considerations: [
        {
          title: "Fracture care vs. office visits",
          description:
            "Deciding when care is global fracture management versus billable E/M requires specialty judgment.",
        },
        {
          title: "Global surgical periods",
          description:
            "Post-op visits, casting, and complications must be handled within global period rules.",
        },
        {
          title: "DME and bracing",
          description:
            "Braces and supplies need correct HCPCS coding plus documentation that proves medical necessity.",
        },
        {
          title: "Injection coding",
          description:
            "Joint injections carry specific code combinations with bundling rules that are easy to get wrong.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "claim-submission",
        "ar-recovery",
      ],
      faqs: [
        {
          question: "Do you bill for orthopedic DME like braces?",
          answer:
            "Yes, with correct HCPCS coding and the documentation payers require to support medical necessity.",
        },
        {
          question: "Can you manage global periods for our surgeons?",
          answer:
            "Yes. We track global periods so post-op services are billed correctly and separately reportable care is never missed.",
        },
        {
          question: "Do you handle both office and surgical billing?",
          answer:
            "Yes. Office visits, injections, and surgical procedures are handled together under one orthopedic workflow.",
        },
      ],
    },
  },
  {
    id: "neurology",
    title: "Neurology",
    icon: "Brain",
    description:
      "Accurate coding for complex neurological conditions and procedures.",
    href: "/specialties/neurology",
    detail: {
      overview: [
        "Neurology billing spans complex evaluation and management, electrodiagnostic studies, infusion therapies, and advanced imaging, a mix that demands precise documentation-code alignment at every step.",
        "Our neurology billing support covers high-level E/M coding, EMG and EEG procedure coding, injectable billing, and prior authorization for imaging and specialty therapies.",
      ],
      considerations: [
        {
          title: "High-level E/M support",
          description:
            "Complex neurological decision-making must be documented to support higher-level visits.",
        },
        {
          title: "Electrodiagnostic coding",
          description:
            "EMG, EEG, and nerve conduction studies have detailed coding rules and bundling logic.",
        },
        {
          title: "Infusion and injectable billing",
          description:
            "Therapeutic infusions involve drug and administration coding with careful unit tracking.",
        },
        {
          title: "Imaging authorization",
          description:
            "MRI and CT studies frequently require prior authorization with clinical justification.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "denial-management",
        "medical-billing",
      ],
      faqs: [
        {
          question: "Do you handle EMG and EEG coding?",
          answer:
            "Yes. Electrodiagnostic studies are coded with their specific rules, modifiers, and bundling logic.",
        },
        {
          question: "Can you bill therapeutic infusions?",
          answer:
            "Yes, including drug and administration coding with the unit-level accuracy these claims require.",
        },
        {
          question: "How do you manage imaging prior auth volumes?",
          answer:
            "We confirm requirements early, assemble clinical documentation, and track requests daily so studies aren't delayed.",
        },
      ],
    },
  },
  {
    id: "dermatology",
    title: "Dermatology",
    icon: "Layers",
    description:
      "Billing solutions for medical and cosmetic dermatology practices.",
    href: "/specialties/dermatology",
    detail: {
      overview: [
        "Dermatology practices balance medical and cosmetic services under one roof, and keeping those two revenue streams correctly separated is the specialty's central billing challenge. Payers scrutinize dermatology claims closely for exactly this reason.",
        "We help dermatology practices code lesions, biopsies, and destructions precisely; separate cosmetic from medical care cleanly; and keep patient responsibility clear for services insurance doesn't cover.",
      ],
      considerations: [
        {
          title: "Medical vs. cosmetic separation",
          description:
            "Cosmetic services must never leak into insurance claims, and clean separation protects the practice.",
        },
        {
          title: "Lesion coding precision",
          description:
            "Destruction and excision codes depend on site, size, and method documented accurately.",
        },
        {
          title: "Biopsy and pathology billing",
          description:
            "Procedure-plus-pathology combinations follow strict bundling and modifier rules.",
        },
        {
          title: "High patient-responsibility volumes",
          description:
            "Deductibles and non-covered services demand clear upfront cost communication.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "insurance-eligibility-verification",
        "claim-submission",
        "payment-posting",
      ],
      faqs: [
        {
          question: "Can you keep cosmetic and medical billing separate?",
          answer:
            "Yes. We maintain clean separation between cosmetic self-pay workflows and medical insurance claims so nothing crosses over.",
        },
        {
          question: "Do you code skin biopsies and excisions?",
          answer:
            "Yes, with attention to site, size, and method documentation plus the modifier logic these procedures require.",
        },
        {
          question: "How do you handle non-covered service discussions?",
          answer:
            "Eligibility and benefits checks identify coverage limits upfront, so patients hear about costs before treatment, not after.",
        },
      ],
    },
  },
  {
    id: "mental-health",
    title: "Mental Health / Psychiatry",
    icon: "MessageCircle",
    description:
      "Specialized billing for psychiatric, behavioral health, and therapy practices.",
    href: "/specialties/mental-health",
    detail: {
      overview: [
        "Behavioral health billing runs on time, with timed therapy codes, session limits, and medical-necessity documentation measured in minutes and units. It is a specialty where billing accuracy directly shapes access to care.",
        "We support psychiatrists, therapists, and behavioral health practices with time-based coding, session limit tracking, telehealth modifier handling, and payer navigation that respects the specialty's nuances.",
      ],
      considerations: [
        {
          title: "Time-based coding accuracy",
          description:
            "Therapy codes pay by documented time, and minutes must support the units billed.",
        },
        {
          title: "Session and visit limits",
          description:
            "Payer-imposed limits require tracking so patients aren't surprised and claims aren't denied.",
        },
        {
          title: "Telehealth modifiers",
          description:
            "Virtual sessions need correct place-of-service and modifier combinations that change by payer.",
        },
        {
          title: "Medical necessity documentation",
          description:
            "Ongoing treatment requires documented medical necessity that supports continued care.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "credentialing",
        "insurance-eligibility-verification",
        "virtual-assistance",
      ],
      faqs: [
        {
          question: "Do you bill telehealth sessions?",
          answer:
            "Yes, with the correct telehealth modifiers and place-of-service codes for each payer's current rules.",
        },
        {
          question: "Can you track session limits across payers?",
          answer:
            "Yes, benefit limits are captured during eligibility verification and monitored as treatment progresses.",
        },
        {
          question: "Do you support group practices of therapists?",
          answer:
            "Yes, from solo practitioners to multi-provider behavioral health groups, with per-provider enrollment handled through credentialing.",
        },
      ],
    },
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    icon: "Dumbbell",
    description:
      "Accurate billing for PT clinics, with timed codes and therapy modifiers handled correctly.",
    href: "/specialties/physical-therapy",
    detail: {
      overview: [
        "Physical therapy billing is one of the most rule-intensive corners of healthcare revenue cycle: timed codes, therapy modifiers, plans of care, and visit authorization requirements all converge on every claim.",
        "CareMedBridge helps PT clinics bill timed and untimed services correctly, manage plans of care and certifications, and handle therapy-specific modifiers so claims survive payer review the first time.",
      ],
      considerations: [
        {
          title: "Timed code units",
          description:
            "Unit counts must follow documented treatment minutes, and the math has to be defensible.",
        },
        {
          title: "Plan of care requirements",
          description:
            "Certifications and re-certifications must stay current or services become non-payable.",
        },
        {
          title: "Therapy modifiers",
          description:
            "Discipline-specific modifiers identify the type of therapy and are mandatory on claims.",
        },
        {
          title: "Visit authorization limits",
          description:
            "Many payers authorize visits in blocks, requiring re-authorization before exhaustion.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "prior-authorization",
        "denial-management",
        "ar-recovery",
      ],
      faqs: [
        {
          question: "Do you handle timed and untimed PT codes?",
          answer:
            "Yes. Units are billed from documented minutes with the defensible logic payers expect, and untimed services are handled per their rules.",
        },
        {
          question: "Can you manage re-authorizations for visit blocks?",
          answer:
            "Yes. We track authorized visit counts and start re-authorization before blocks run out.",
        },
        {
          question:
            "Do you support both private practice PT and rehab clinics?",
          answer:
            "Yes. Outpatient PT and rehabilitation settings are both within our billing scope.",
        },
      ],
    },
  },
  {
    id: "ob-gyn",
    title: "OB/GYN",
    icon: "UserCheck",
    description:
      "End-to-end billing for obstetrics, gynecology, and women's health services.",
    href: "/specialties/ob-gyn",
    detail: {
      overview: [
        "OB/GYN billing spans the full arc of women's health, including preventive visits, gynecologic procedures, and global maternity care packages that bundle months of services into single codes.",
        "We support OB/GYN practices with global obstetric billing, surgical coding, and preventive service workflows that handle the specialty's unique coverage and documentation demands.",
      ],
      considerations: [
        {
          title: "Global maternity packages",
          description:
            "Routine obstetric care bundles prenatal, delivery, and postpartum services into global codes.",
        },
        {
          title: "Antepartum complication splits",
          description:
            "When care becomes high-risk, global packages may need to be unbundled correctly.",
        },
        {
          title: "Preventive vs. problem visits",
          description:
            "Well-woman visits combined with problem visits require split billing with correct modifiers.",
        },
        {
          title: "GYN surgical coding",
          description:
            "Office procedures and surgeries carry distinct coding with bundling rules.",
        },
      ],
      relevantServiceSlugs: [
        "medical-billing",
        "medical-coding",
        "insurance-eligibility-verification",
        "credentialing",
      ],
      faqs: [
        {
          question: "Do you handle global obstetric billing?",
          answer:
            "Yes, including routine global packages and the unbundling rules that apply when care becomes complicated.",
        },
        {
          question:
            "Can you split preventive and problem visits for well-woman exams?",
          answer:
            "Yes, with the correct modifiers and charge splits based on the documentation.",
        },
        {
          question: "Do you credential new OB/GYN providers?",
          answer:
            "Yes. Enrollment with payers is managed end to end so new providers can bill without delays.",
        },
      ],
    },
  },
  {
    id: "radiology",
    title: "Radiology",
    icon: "ScanLine",
    description:
      "High-accuracy coding and billing for radiology and imaging centers.",
    href: "/specialties/radiology",
    detail: {
      overview: [
        "Radiology billing splits professional and technical components across thousands of studies, with ICD-10 specificity and medical-necessity support determining whether claims are paid or denied.",
        "We help radiology practices and imaging centers code studies accurately, manage component modifiers, and handle the prior authorization and documentation demands that surround advanced imaging.",
      ],
      considerations: [
        {
          title: "Professional vs. technical splits",
          description:
            "Component modifiers determine which portion of a study each party can bill.",
        },
        {
          title: "ICD-10 specificity",
          description:
            "Diagnosis codes must meet medical-necessity specificity for each imaging study.",
        },
        {
          title: "Prior authorization volume",
          description:
            "Advanced imaging requires frequent authorizations with clinical indications.",
        },
        {
          title: "Contrast and supplies",
          description:
            "Contrast administration and supplies carry their own coding and coverage rules.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "claim-submission",
        "denial-management",
      ],
      faqs: [
        {
          question:
            "Do you handle professional and technical component billing?",
          answer:
            "Yes. Component modifiers are applied correctly so each claim reflects the portion your practice actually provided.",
        },
        {
          question: "Can you support freestanding imaging centers?",
          answer:
            "Yes. Both radiology practices and imaging centers are within scope, including CDM-driven charge workflows.",
        },
        {
          question: "How do you manage imaging prior authorizations?",
          answer:
            "Requirements are confirmed per study and payer, clinical indications are assembled, and requests are tracked to decision.",
        },
      ],
    },
  },
  {
    id: "oncology",
    title: "Oncology",
    icon: "Microscope",
    description:
      "Complex oncology billing with chemotherapy and infusion therapy expertise.",
    href: "/specialties/oncology",
    detail: {
      overview: [
        "Oncology billing is among the most complex in medicine, with chemotherapy administration hierarchies, injectable drug billing, and regimen-based coding demanding a level of precision that generalist billing rarely achieves.",
        "We support oncology practices with administration and drug coding, regimen prior authorizations, and the careful documentation alignment that protects revenue in a high-stakes, high-scrutiny specialty.",
      ],
      considerations: [
        {
          title: "Chemo administration hierarchy",
          description:
            "Initial, concurrent, and sequential administration codes follow strict hierarchy rules.",
        },
        {
          title: "Injectable drug billing",
          description:
            "J-code billing requires accurate units, wastage documentation, and payer-specific policies.",
        },
        {
          title: "Regimen prior authorizations",
          description:
            "Treatment regimens require authorization with clinical protocols and staging details.",
        },
        {
          title: "Frequent coverage changes",
          description:
            "Patients change plans mid-treatment, demanding constant eligibility vigilance.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "payment-posting",
        "denial-management",
      ],
      faqs: [
        {
          question: "Do you bill chemotherapy administration?",
          answer:
            "Yes, including the administration hierarchy rules and the drug billing that accompanies each regimen.",
        },
        {
          question: "Can you manage prior auth for treatment regimens?",
          answer:
            "Yes. Authorizations are assembled with clinical documentation and tracked so treatment schedules hold.",
        },
        {
          question: "How do you handle drug wastage documentation?",
          answer:
            "Wastage is documented and billed according to payer policies so practices are reimbursed correctly for administered and wasted amounts.",
        },
      ],
    },
  },
  {
    id: "urology",
    title: "Urology",
    icon: "FlaskConical",
    description:
      "Billing and coding specialists for urology and nephrology practices.",
    href: "/specialties/urology",
    detail: {
      overview: [
        "Urology billing blends office visits, endoscopic procedures, surgical services, and ongoing supply management, each with its own coding logic and payer requirements.",
        "We support urology practices with procedure coding, global period management, and supply billing that keeps claims accurate across the specialty's full range of services.",
      ],
      considerations: [
        {
          title: "Endoscopic procedure coding",
          description:
            "Cystoscopy and related procedures follow detailed coding rules with bundling logic.",
        },
        {
          title: "Catheter and supply billing",
          description:
            "Ongoing supplies require HCPCS coding with documented medical necessity.",
        },
        {
          title: "Surgical global periods",
          description:
            "Post-op care must be handled within global period rules to avoid billing errors.",
        },
        {
          title: "Preventive screening coverage",
          description:
            "Screening services carry age and frequency rules that differ by payer.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "medical-billing",
        "claim-submission",
        "credentialing",
      ],
      faqs: [
        {
          question: "Do you bill urologic supplies and catheters?",
          answer:
            "Yes, with correct HCPCS coding and the documentation needed to support ongoing medical necessity.",
        },
        {
          question: "Can you handle our surgical and office mix?",
          answer:
            "Yes. Office visits, endoscopic procedures, and surgeries are all coded within their specific rules.",
        },
        {
          question: "Do you credential urologists joining our group?",
          answer:
            "Yes. New provider enrollment is managed from application through effective date.",
        },
      ],
    },
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    icon: "Clipboard",
    description:
      "Expert billing for GI procedures including colonoscopy and endoscopy.",
    href: "/specialties/gastroenterology",
    detail: {
      overview: [
        "Gastroenterology revenue concentrates in procedures, including colonoscopy, endoscopy, and related studies, where coding levels, modifiers, and screening-versus-diagnostic distinctions determine payment.",
        "We help GI practices code endoscopic procedures accurately, navigate screening coverage differences, and manage the prior authorization workflows that surround digestive health services.",
      ],
      considerations: [
        {
          title: "Endoscopy level coding",
          description:
            "Procedure levels and modifiers depend on findings, extent, and approach documented.",
        },
        {
          title: "Screening vs. diagnostic",
          description:
            "A screening colonoscopy that becomes therapeutic changes coding and often patient cost-sharing.",
        },
        {
          title: "Pathology and polyp handling",
          description:
            "Biopsy, polypectomy, and pathology combinations follow strict bundling rules.",
        },
        {
          title: "Facility vs. office settings",
          description:
            "Place-of-service rules differ between office-based and facility-based procedures.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "prior-authorization",
        "claim-submission",
        "denial-management",
      ],
      faqs: [
        {
          question:
            "Do you handle screening-to-therapeutic colonoscopy conversions?",
          answer:
            "Yes. The coding shift and its cost-sharing implications are handled correctly based on documentation and payer rules.",
        },
        {
          question: "Can you code all levels of endoscopic procedures?",
          answer:
            "Yes, with upper and lower GI endoscopy coding and the level and modifier logic each procedure requires.",
        },
        {
          question: "Do you support ambulatory surgery center billing?",
          answer:
            "Tell us about your setting during the consultation, because our core GI billing support covers office and facility-based workflows.",
        },
      ],
    },
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    icon: "Eye",
    description:
      "Specialized revenue cycle management for ophthalmology and optometry.",
    href: "/specialties/ophthalmology",
    detail: {
      overview: [
        "Ophthalmology billing hinges on one decision repeated all day: eye codes versus E/M codes. The choice depends on the patient's complaint, the service performed, and payer policy, with major reimbursement consequences.",
        "We support ophthalmology and optometry practices with exam code selection, injection and surgical coding, and imaging billing that navigates the specialty's bundling rules confidently.",
      ],
      considerations: [
        {
          title: "Eye code vs. E/M selection",
          description:
            "Code family selection affects reimbursement and must follow the visit's actual content.",
        },
        {
          title: "Injection coding",
          description:
            "Intravitreal and other injections carry drug and administration coding with unit precision.",
        },
        {
          title: "Imaging bundling",
          description:
            "Visual fields, OCT, and photography have bundling relationships that govern what can be billed together.",
        },
        {
          title: "Refractive vs. medical",
          description:
            "Routine vision services and medical eye care follow different coverage paths entirely.",
        },
      ],
      relevantServiceSlugs: [
        "medical-coding",
        "medical-billing",
        "prior-authorization",
        "payment-posting",
      ],
      faqs: [
        {
          question: "How do you decide between eye codes and E/M?",
          answer:
            "The decision follows the documentation, including the reason for the visit, the exam elements, and any treatment, applied against payer policies.",
        },
        {
          question: "Do you bill intravitreal injections?",
          answer:
            "Yes, with drug and administration coding and the unit-level accuracy these claims require.",
        },
        {
          question: "Can you handle mixed medical and routine vision panels?",
          answer:
            "Yes. Medical and refractive services are routed through their correct coverage paths with clear patient responsibility.",
        },
      ],
    },
  },
  {
    id: "urgent-care",
    title: "Urgent Care",
    icon: "Zap",
    description:
      "Fast, accurate billing for urgent care clinics and emergency services.",
    href: "/specialties/urgent-care",
    detail: {
      overview: [
        "Urgent care billing is a volume business with zero patience for delay, including walk-in patients, same-day coding, point-of-service collections, and claims that must go out the door daily to keep cash flowing.",
        "We help urgent care clinics with rapid-cycle billing workflows, eligibility checks built for walk-ins, and coding that keeps pace with high visit volumes without sacrificing accuracy.",
      ],
      considerations: [
        {
          title: "High-volume turnaround",
          description:
            "Claim volume demands a daily billing rhythm with no room for backlogs.",
        },
        {
          title: "Walk-in eligibility",
          description:
            "Coverage must be verified on the spot for patients without scheduled appointments.",
        },
        {
          title: "Place-of-service accuracy",
          description:
            "Urgent care POS coding affects reimbursement and must be applied consistently.",
        },
        {
          title: "Occupational and workers' comp",
          description:
            "Employer and workers' comp visits follow entirely different billing pathways.",
        },
      ],
      relevantServiceSlugs: [
        "front-office-management",
        "insurance-eligibility-verification",
        "medical-billing",
        "claim-submission",
      ],
      faqs: [
        {
          question: "Can your billing keep up with our daily volume?",
          answer:
            "Yes. Urgent care workflows are built around daily claim cycles designed for high-throughput clinics.",
        },
        {
          question:
            "Do you handle workers' comp and occupational medicine billing?",
          answer:
            "Yes. Employer-sponsored and workers' comp visits are billed through their separate pathways.",
        },
        {
          question: "Can you support multiple clinic locations?",
          answer:
            "Yes. Multi-location urgent care groups are supported with consistent workflows across sites.",
        },
      ],
    },
  },
  {
    id: "multispecialty",
    title: "Multi-Specialty Groups",
    icon: "LayoutGrid",
    description:
      "Unified RCM for multi-specialty groups with complex billing needs.",
    href: "/specialties/multispecialty",
    detail: {
      overview: [
        "Multi-specialty groups face every billing challenge at once, with different code sets, payer contracts, credentialing requirements, and documentation standards across every department, all needing to reconcile into one financial picture.",
        "CareMedBridge delivers unified revenue cycle management for multi-specialty groups: specialty-aware coding, consolidated reporting across providers, and credentialing managed at scale under one accountable partner.",
      ],
      considerations: [
        {
          title: "Specialty-specific coding",
          description:
            "Each department's coding rules differ, and one generic approach guarantees errors.",
        },
        {
          title: "Consolidated reporting",
          description:
            "Leaders need unified financials that still break down by provider and specialty.",
        },
        {
          title: "Credentialing at scale",
          description:
            "Dozens of providers across payers mean constant enrollment and re-credentialing work.",
        },
        {
          title: "System integrations",
          description:
            "Multiple EHRs or modules must feed billing accurately, wherever the data lives.",
        },
      ],
      relevantServiceSlugs: [
        "revenue-cycle-management",
        "medical-coding",
        "credentialing",
        "denial-management",
      ],
      faqs: [
        {
          question: "Can you handle different EHRs across our departments?",
          answer:
            "In most cases, yes. We design the billing workflow around your systems during onboarding.",
        },
        {
          question: "Do you report performance by provider and specialty?",
          answer:
            "Yes. We provide consolidated group reporting with breakdowns by provider, specialty, and location.",
        },
        {
          question: "Can you take over from multiple existing billing vendors?",
          answer:
            "Yes. We consolidate fragmented billing arrangements into one accountable RCM program.",
        },
      ],
    },
  },
];

/** Helper: find a specialty by its id/slug */
export function getSpecialtyById(id: string): Specialty | undefined {
  return specialties.find((s) => s.id === id);
}
