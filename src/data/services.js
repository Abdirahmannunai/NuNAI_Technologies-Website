import { Bot, Cloud, Code2, Globe2, Smartphone, Workflow } from 'lucide-react';

export const SERVICES = [
  {
    id: 'ai',
      icon: Bot,
    title: 'Artificial Intelligence Solutions',
    shortDesc: 'Harness AI to automate decisions, personalise experiences, and unlock insights from your data.',
    description:
      'We build practical, production-ready AI systems tailored to your industry. Every AI solution we deliver is explainable, secure, and integrates seamlessly with your existing technology stack.',
    features: [
      'AI Chatbots & Virtual Assistants',
      'Predictive Analytics & Forecasting',
      'Machine Learning Model Development',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Intelligent Business Automation',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'FastAPI', 'Hugging Face'],
    useCases: ['Customer support automation', 'Demand forecasting', 'Document processing', 'Fraud detection'],
  },
  {
    id: 'software',
      icon: Code2,
    title: 'Software Development',
    shortDesc: 'Custom enterprise software engineered to solve real business challenges and built to scale.',
    description:
      'From ERP platforms and CRM systems to SaaS applications and management portals, we engineer solutions with clean architecture, maintainable code, and thorough documentation.',
    features: [
      'Enterprise Software Systems',
      'CRM & ERP Solutions',
      'SaaS Applications',
      'Inventory Management Systems',
      'Fleet Management Platforms',
      'School Management Systems',
    ],
    tech: ['Node.js', 'React', 'Next.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    useCases: ['Operations management', 'School administration', 'Fleet tracking', 'HR systems'],
  },
  {
    id: 'web',
      icon: Globe2,
    title: 'Web Development',
    shortDesc: 'Modern, fast, accessible websites and web applications built for performance and conversions.',
    description:
      'Every web solution is mobile-first, SEO-optimised, and designed with real users in mind. We build digital presences that reflect your brand and drive measurable results.',
    features: [
      'Corporate & Brand Websites',
      'E-commerce Platforms',
      'Customer Portals',
      'Complex Web Applications',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel'],
    useCases: ['Brand websites', 'Online stores', 'Customer self-service portals', 'Web dashboards'],
  },
  {
    id: 'mobile',
      icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'High-performance Android and iOS apps that deliver exceptional user experiences.',
    description:
      'Whether you need cross-platform or native performance, we select the right approach for your use case — crafting apps that are fast, intuitive, and reliable in East African network conditions.',
    features: [
      'Native Android Applications',
      'Native iOS Applications',
      'Cross-Platform Apps (Flutter)',
      'Business & Productivity Apps',
      'E-commerce Mobile Apps',
      'On-Demand Service Platforms',
    ],
    tech: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'REST APIs'],
    useCases: ['Field operations', 'Mobile commerce', 'Patient apps', 'Delivery platforms'],
  },
  {
    id: 'automation',
      icon: Workflow,
    title: 'Business Automation',
    shortDesc: 'Eliminate repetitive manual work and free your team for high-value activities.',
    description:
      'We identify automation opportunities in your workflows and implement reliable, auditable automated systems — dramatically reducing cost and error rates across your operations.',
    features: [
      'Workflow & Process Automation',
      'HR Process Automation',
      'Customer Support Automation',
      'Invoice & Payment Automation',
      'Marketing Automation',
      'Data Processing & Reporting',
    ],
    tech: ['Python', 'n8n', 'Zapier', 'RPA Tools', 'REST APIs', 'Webhooks'],
    useCases: ['Invoice processing', 'Onboarding workflows', 'Report generation', 'Email campaigns'],
  },
  {
    id: 'cloud',
      icon: Cloud,
    title: 'Cloud & Enterprise Solutions',
    shortDesc: 'Scalable cloud infrastructure and enterprise systems built for reliability and continuity.',
    description:
      'From cloud migration strategy to ongoing infrastructure management, cybersecurity hardening, and system integration — we handle complex technical challenges so your team can focus on what matters.',
    features: [
      'Cloud Migration & Strategy',
      'Cloud Infrastructure Management',
      'Enterprise Application Development',
      'System Integration',
      'Data Analytics & Business Intelligence',
      'Cybersecurity Solutions',
    ],
    tech: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    useCases: ['Cloud migration', 'Multi-system integration', 'Disaster recovery', 'Security audits'],
  },
];
