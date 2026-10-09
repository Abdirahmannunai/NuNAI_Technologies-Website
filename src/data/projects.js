import { Bot, GraduationCap, HeartPulse, Settings2, ShoppingCart, Truck } from 'lucide-react';

export const PROJECTS = [
  {
    id: 'ai-chatbot',
    category: 'ai',
    categoryLabel: 'AI Solutions',
      icon: Bot,
    visualBg: 'linear-gradient(135deg,#071A2B,#00C2FF)',
    title: 'AI Customer Support Assistant',
    description:
      'An intelligent NLP-powered chatbot reducing customer response times by 80%, handling thousands of daily queries automatically across web and WhatsApp channels.',
    tech: ['Python', 'NLP', 'Node.js', 'WhatsApp API'],
    metric: { value: '80%', label: 'Reduction in Response Time' },
  },
  {
    id: 'fleet-management',
    category: 'software',
    categoryLabel: 'Software Development',
      icon: Truck,
    visualBg: 'linear-gradient(135deg,#064e3b,#45F09A)',
    title: 'Fleet Management Platform',
    description:
      'Real-time vehicle tracking with GPS, driver analytics, automated alerts, maintenance scheduling, and comprehensive reporting dashboards for a Kenyan logistics company.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metric: { value: '100+', label: 'Vehicles Tracked Daily' },
  },
  {
    id: 'school-management',
    category: 'software',
    categoryLabel: 'Enterprise Software',
      icon: GraduationCap,
    visualBg: 'linear-gradient(135deg,#1e3a5f,#00C2FF)',
    title: 'Smart School Management System',
    description:
      'Integrated education platform covering student admissions, attendance, exams, fee collection with M-Pesa, parent communication, and multi-school administration.',
    tech: ['Next.js', 'PostgreSQL', 'Flutter', 'M-Pesa'],
    metric: { value: '5,000+', label: 'Students Managed' },
  },
  {
    id: 'ecommerce-marketplace',
    category: 'web',
    categoryLabel: 'Web Development',
      icon: ShoppingCart,
    visualBg: 'linear-gradient(135deg,#4a1d96,#8b5cf6)',
    title: 'E-Commerce Marketplace',
    description:
      'Scalable multi-vendor marketplace with M-Pesa & card integration, real-time inventory, seller dashboards, and order tracking handling thousands of daily transactions.',
    tech: ['React', 'Node.js', 'MongoDB', 'M-Pesa'],
    metric: { value: '10K+', label: 'Daily Transactions' },
  },
  {
    id: 'healthcare-app',
    category: 'mobile',
    categoryLabel: 'Mobile App',
      icon: HeartPulse,
    visualBg: 'linear-gradient(135deg,#7c2d12,#ea580c)',
    title: 'Healthcare Appointment App',
    description:
      'Cross-platform mobile app connecting patients with healthcare providers for appointment booking, teleconsultation, prescription management, and health records.',
    tech: ['Flutter', 'Firebase', 'REST API', 'Stripe'],
    metric: { value: '2,000+', label: 'Monthly Bookings' },
  },
  {
    id: 'hr-automation',
    category: 'automation',
    categoryLabel: 'Business Automation',
      icon: Settings2,
    visualBg: 'linear-gradient(135deg,#164e63,#00C2FF)',
    title: 'HR & Payroll Automation System',
    description:
      'Complete HR automation covering onboarding, leave management, attendance tracking, payroll calculation, and statutory deduction filing for a 200-person organisation.',
    tech: ['Python', 'React', 'PostgreSQL', 'Email API'],
    metric: { value: '90%', label: 'Reduction in Payroll Errors' },
  },
];

export const PROJECT_CATEGORIES = [
  { key: 'all',        label: 'All Projects' },
  { key: 'ai',         label: 'AI' },
  { key: 'software',   label: 'Software' },
  { key: 'web',        label: 'Web' },
  { key: 'mobile',     label: 'Mobile' },
  { key: 'automation', label: 'Automation' },
];
