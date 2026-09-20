import type { FAQ } from "@/types";

/**
 * Shared FAQ content — used by the homepage FAQ preview (first six entries)
 * and the full FAQ page. Keep answers factual; no invented claims (stats,
 * certifications, timelines beyond what the business can actually commit to).
 * Topics covered: outsourced billing, coding, denied claims, RCM,
 * credentialing, turnaround, specialties, onboarding, reporting, pricing.
 */
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of healthcare providers does CareMedBridge work with?",
    answer:
      "We work with a wide range of providers including solo physicians, small and large group practices, multi-specialty groups, clinics, urgent care centers, and hospitals across the United States. Our team has experience across 18 medical specialties.",
    category: "General",
  },
  {
    id: "2",
    question: "How does the billing process work?",
    answer:
      "Once onboarded, our team receives your encounter data (via your EHR, PM system, or directly from your staff), verifies patient eligibility, assigns accurate codes, and submits clean claims to the appropriate payers. We then follow up on pending claims, post payments, and manage any denials or appeals on your behalf.",
    category: "Process",
  },
  {
    id: "3",
    question: "How long does the onboarding process take?",
    answer:
      "Onboarding timelines vary based on practice size and complexity. Most practices are fully onboarded and submitting claims within 2–4 weeks. We work closely with your team to make the transition as smooth as possible.",
    category: "Process",
  },
  {
    id: "4",
    question: "Do you handle denied claims and appeals?",
    answer:
      "Yes. Denial management is a core part of our service. We identify the root cause of each denial, correct any errors, and file timely appeals to recover revenue that would otherwise be written off. We track denial rates and provide regular reporting on outcomes.",
    category: "Services",
  },
  {
    id: "5",
    question: "Can you help with provider credentialing?",
    answer:
      "Absolutely. Our credentialing team manages the entire enrollment process with commercial insurers and government payers, including initial credentialing and re-credentialing. We track expiration dates and renewal deadlines to prevent gaps in your billing.",
    category: "Services",
  },
  {
    id: "6",
    question: "What practice management systems and EHRs do you support?",
    answer:
      "We work with most major EHR and practice management systems. During onboarding, we assess your current technology setup and establish a workflow that integrates smoothly with your existing tools.",
    category: "Technology",
  },
  {
    id: "7",
    question: "How is pricing structured?",
    answer:
      "We offer flexible pricing models including percentage-of-collections and flat-fee arrangements, depending on your practice size and service needs. All pricing is custom-quoted following a complimentary consultation — there are no one-size-fits-all rates.",
    category: "Pricing",
  },
  {
    id: "8",
    question: "How do I get started with CareMedBridge?",
    answer:
      "The best first step is to schedule a free consultation with our team. We'll learn about your practice, current billing challenges, and revenue goals — then recommend the right service package for your needs.",
    category: "General",
  },
  {
    id: "9",
    question: "What is outsourced medical billing, and why do practices use it?",
    answer:
      "Outsourced medical billing means a specialized company like CareMedBridge handles your claims, coding, payments, and follow-up instead of an in-house team. Practices outsource to reduce overhead, access deeper billing expertise, speed up reimbursements, and free staff to focus on patient care rather than paperwork.",
    category: "Services",
  },
  {
    id: "10",
    question: "How does CareMedBridge keep medical coding accurate?",
    answer:
      "Our coding professionals work from complete documentation, follow current ICD-10, CPT, and HCPCS guidelines, and verify code specificity and modifiers before claims go out. Regular quality checks and code updates help reduce denials caused by coding errors.",
    category: "Services",
  },
  {
    id: "11",
    question: "What does revenue cycle management (RCM) actually cover?",
    answer:
      "RCM covers the entire financial life of a patient encounter: scheduling and eligibility verification, coding, claim submission, payment posting, denial management, AR follow-up, and reporting. The goal is one continuous, measurable process from appointment to final payment.",
    category: "Services",
  },
  {
    id: "12",
    question: "How quickly are claims submitted?",
    answer:
      "Clean, complete claims are typically submitted within 24–72 hours of receiving documentation, depending on your practice's workflow and payer requirements. Faster, accurate submission shortens the payment cycle and keeps cash flow predictable.",
    category: "Process",
  },
  {
    id: "13",
    question: "Which medical specialties do you support?",
    answer:
      "We support 18 medical specialties, including primary care, family medicine, internal medicine, pediatrics, cardiology, orthopedics, neurology, dermatology, mental health, physical therapy, and more. Our teams understand the coding, modifiers, and payer rules specific to each specialty.",
    category: "Services",
  },
  {
    id: "14",
    question: "What kind of reporting will my practice receive?",
    answer:
      "You get clear, regular reporting on the metrics that matter: claims submitted and paid, denial rates, AR aging, days in AR, and collections by payer. Reports are designed for practice owners and office managers — actionable, easy to read, and delivered on a consistent schedule.",
    category: "Process",
  },
  {
    id: "15",
    question: "Do you work with small practices?",
    answer:
      "Yes — small and independent practices are a core part of who we serve. A medical billing company for small practices should feel like an extension of your team, not an added burden, so we scale our support to your size, volume, and budget.",
    category: "General",
  },
  {
    id: "16",
    question: "Why is insurance eligibility verification so important?",
    answer:
      "Verifying a patient's coverage and benefits before the visit prevents the most common and most avoidable denials. Insurance verification services confirm active coverage, copays, deductibles, and prior-authorization requirements up front, so your team can collect accurately and bill correctly the first time.",
    category: "Services",
  },
  {
    id: "17",
    question: "How is our practice and patient data handled?",
    answer:
      "We treat practice and patient data with strict confidentiality, role-based access, and secure handling practices, and we work within the safeguards your practice and applicable regulations require. We're happy to walk you through our processes during onboarding.",
    category: "General",
  },
  {
    id: "18",
    question: "Why choose CareMedBridge over other billing companies?",
    answer:
      "CareMedBridge combines end-to-end revenue cycle expertise with transparent reporting, specialty-specific knowledge, and a partnership approach — we align our work with your revenue goals rather than treating billing as a back-office task. Every engagement starts with understanding your practice, not a one-size-fits-all package.",
    category: "General",
  },
];
