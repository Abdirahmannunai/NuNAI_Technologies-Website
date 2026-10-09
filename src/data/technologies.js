import {
  Bot,
  Building2,
  Cloud,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Truck,
  Workflow,
  Wrench,
} from 'lucide-react';

export const TECHNOLOGIES = [
  'Python', 'React', 'Node.js', 'Flutter',
  'TensorFlow', 'PostgreSQL', 'Docker', 'AWS',
  'TypeScript', 'Next.js', 'PHP',
];

export const WHY_US = [
  {
    icon: GraduationCap,
    title: 'Industry Expertise',
    desc: 'Deep technical knowledge combined with real-world business understanding across 10+ industries.',
  },
  {
    icon: Microscope,
    title: 'Innovation-Driven',
    desc: 'We stay ahead of emerging technologies to ensure every solution we build is future-ready.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    desc: 'Every project tailored precisely to your goals, workflows, and requirements — never a template.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Support',
    desc: "We don't disappear after launch. Ongoing support ensures long-term performance and peace of mind.",
  },
  {
    icon: TrendingUp,
    title: 'Scalable Technology',
    desc: 'Solutions that grow with your business, adapting to changing demands without expensive rebuilds.',
  },
];

export const INDUSTRIES = [
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Education', icon: GraduationCap },
  { label: 'Financial Services', icon: Landmark },
  { label: 'Logistics & Transport', icon: Truck },
  { label: 'Retail & E-commerce', icon: ShoppingBag },
  { label: 'Manufacturing', icon: Wrench },
  { label: 'Hospitality', icon: Building2 },
  { label: 'Government', icon: Landmark },
  { label: 'NGOs & Non-Profit', icon: HeartPulse },
  { label: 'Real Estate', icon: Building2 },
];

export const STATS = [
  { target: 42,  suffix: '+', label: 'Projects Delivered' },
  { target: 30,  suffix: '+', label: 'Happy Clients'      },
  { target: 11,  suffix: '+', label: 'Industries Served'  },
  { target: 3,   suffix: '+', label: 'Years Experience'   },
];

export const MILESTONES = [
  {
    year: '2020',
    title: 'Company Founded',
    desc: 'NuNAI Technologies established in Nairobi with a mission to deliver world-class technology solutions to African businesses.',
    accent: 'var(--clr-primary)',
  },
  {
    year: '2021',
    title: 'First Major Enterprise Client',
    desc: 'Delivered a comprehensive fleet management platform for a leading Kenyan logistics company, tracking 100+ vehicles in real time.',
    accent: 'var(--clr-accent)',
  },
  {
    year: '2022',
    title: 'AI Division Launched',
    desc: 'Launched a dedicated AI solutions practice, delivering our first NLP-powered customer support assistant for an e-commerce client.',
    accent: '#7c3aed',
  },
  {
    year: '2023',
    title: '30+ Clients & 50+ Projects',
    desc: 'Surpassed 30 active clients and 50 delivered projects across 10 industries, confirming our approach to tailored enterprise technology.',
    accent: 'var(--clr-accent)',
  },
  {
    year: '2024+',
    title: 'Expanding Across Africa',
    desc: 'Growing our presence beyond Kenya into East Africa, with plans for expanded AI product offerings serving pan-African enterprises.',
    accent: 'var(--clr-primary)',
  },
];

export const BLOG_POSTS = [
  {
    id: 'ai-chatbots-africa',
      visual: { bg: 'linear-gradient(135deg,#071A2B,#00C2FF)', icon: Bot },
    category: 'AI & Machine Learning',
    title: 'How AI Chatbots Are Transforming Customer Service in African Businesses',
    excerpt:
      'More businesses across Kenya and East Africa are deploying AI-powered chatbots at scale. We explore the practical benefits, implementation considerations, and what to expect from ROI.',
    author: 'NuNAI Team',
    date: 'March 2026',
    readTime: '6 min',
  },
  {
    id: 'cloud-migration-smes',
      visual: { bg: 'linear-gradient(135deg,#064e3b,#45F09A)', icon: Cloud },
    category: 'Cloud & Infrastructure',
    title: 'Cloud Migration: A Practical Guide for Kenyan SMEs',
    excerpt:
      "Moving to the cloud doesn't have to be daunting. This guide covers key decisions, common pitfalls, and a realistic migration approach for small and medium businesses.",
    author: 'NuNAI Team',
    date: 'February 2026',
    readTime: '8 min',
  },
  {
    id: 'flutter-vs-react-native',
      visual: { bg: 'linear-gradient(135deg,#4a1d96,#8b5cf6)', icon: Smartphone },
    category: 'Mobile Development',
    title: 'Flutter vs React Native in 2026: Which to Choose for Your Business App?',
    excerpt:
      'Both frameworks have matured significantly. We break down real-world differences in performance, developer experience, ecosystem, and cost.',
    author: 'NuNAI Team',
    date: 'January 2026',
    readTime: '7 min',
  },
  {
    id: '5-processes-to-automate',
      visual: { bg: 'linear-gradient(135deg,#1e3a5f,#00C2FF)', icon: Workflow },
    category: 'Business Automation',
    title: '5 Business Processes You Should Automate Right Now',
    excerpt:
      'These five areas consistently deliver the fastest ROI when automated. Discover where automation can immediately improve your bottom line.',
    author: 'NuNAI Team',
    date: 'December 2025',
    readTime: '5 min',
  },
  {
    id: 'cybersecurity-africa',
      visual: { bg: 'linear-gradient(135deg,#7c2d12,#ea5808)', icon: ShieldCheck },
    category: 'Cybersecurity',
    title: 'Cybersecurity Essentials Every African Business Must Prioritise',
    excerpt:
      'Cyber threats targeting African businesses are increasing rapidly. This practical guide outlines the most critical security practices every organisation should implement.',
    author: 'NuNAI Team',
    date: 'November 2025',
    readTime: '9 min',
  },
  {
    id: 'digital-transformation-failures',
      visual: { bg: 'linear-gradient(135deg,#164e63,#00C2FF)', icon: TrendingUp },
    category: 'Digital Transformation',
    title: 'Why Most Digital Transformation Projects Fail (and How to Avoid It)',
    excerpt:
      'Research consistently shows that most digital transformation initiatives underdeliver. We examine the most common failure patterns and practical strategies for success.',
    author: 'NuNAI Team',
    date: 'October 2025',
    readTime: '10 min',
  },
];
