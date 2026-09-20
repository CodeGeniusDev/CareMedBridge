import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  FileCheck2,
  Send,
  CircleDollarSign,
  RotateCcw,
  BarChart3,
} from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * The CareMedBridge revenue-cycle workflow — presented as our process,
 * not as a performance guarantee.
 */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Verify",
    description: "Eligibility and benefits confirmed before every visit.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Code & Prepare",
    description: "Accurate coding and clean claim preparation.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Submit Claims",
    description: "Fast electronic submission to all major payers.",
    icon: Send,
  },
  {
    number: "04",
    title: "Post Payments",
    description: "Payments and remits posted promptly and accurately.",
    icon: CircleDollarSign,
  },
  {
    number: "05",
    title: "Handle Denials & AR",
    description: "Denials appealed and aging AR worked systematically.",
    icon: RotateCcw,
  },
  {
    number: "06",
    title: "Review & Report",
    description: "Clear monthly reporting on your revenue cycle.",
    icon: BarChart3,
  },
];
