import { Bot, Cloud, Code2, Globe2, Smartphone, Workflow } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  {
    label: 'Services', to: '/services',
    children: [
        { label: 'AI Solutions',         to: '/services#ai',         icon: Bot },
        { label: 'Software Development', to: '/services#software',   icon: Code2 },
        { label: 'Web Development',      to: '/services#web',        icon: Globe2 },
        { label: 'Mobile Apps',          to: '/services#mobile',     icon: Smartphone },
        { label: 'Business Automation',  to: '/services#automation', icon: Workflow },
        { label: 'Cloud & Enterprise',   to: '/services#cloud',      icon: Cloud },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export const FOOTER_COMPANY = [
  { label: 'Home',      to: '/' },
  { label: 'About Us',  to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export const FOOTER_SERVICES = [
  { label: 'AI Solutions',         to: '/services#ai' },
  { label: 'Software Development', to: '/services#software' },
  { label: 'Web Development',      to: '/services#web' },
  { label: 'Mobile Applications',  to: '/services#mobile' },
  { label: 'Business Automation',  to: '/services#automation' },
  { label: 'Cloud & Enterprise',   to: '/services#cloud' },
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X (Twitter)', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
];
