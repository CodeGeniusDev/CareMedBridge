import {
  Activity,
  Award,
  Baby,
  Bone,
  Brain,
  Building2,
  Clipboard,
  ClipboardCheck,
  Code2,
  CreditCard,
  DollarSign,
  Dumbbell,
  Eye,
  FileText,
  FlaskConical,
  Headphones,
  Heart,
  HeartPulse,
  Layers,
  LayoutGrid,
  MessageCircle,
  Microscope,
  RotateCcw,
  ScanLine,
  Send,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Central registry mapping the serializable icon names stored in the content
 * data (`icon: "FileText"`) to their Lucide components.
 *
 * The data layer deliberately stores icon names as plain strings so the
 * objects stay serializable across the React Server Components boundary
 * (component references cannot be passed from Server to Client Components).
 * Icons are statically imported and referenced in this object literal, so the
 * bundler tree-shakes lucide-react down to only the icons listed here instead
 * of shipping the full icon set to the browser.
 *
 * Consumers resolve the component with property access — never a function
 * call during render:
 *   const Icon = iconRegistry[service.icon] ?? FileText;
 */
const iconRegistry: Record<string, LucideIcon> = {
  Activity,
  Award,
  Baby,
  Bone,
  Brain,
  Building2,
  Clipboard,
  ClipboardCheck,
  Code2,
  CreditCard,
  DollarSign,
  Dumbbell,
  Eye,
  FileText,
  FlaskConical,
  Headphones,
  Heart,
  HeartPulse,
  Layers,
  LayoutGrid,
  MessageCircle,
  Microscope,
  RotateCcw,
  ScanLine,
  Send,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Zap,
};

export default iconRegistry;
