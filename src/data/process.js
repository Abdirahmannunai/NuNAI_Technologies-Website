import { Code2, PencilRuler, Rocket, Search } from 'lucide-react';

export const PROCESS_STEPS = [
  {
    id: 1,
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    desc: 'We deeply understand your business goals and challenges through structured sessions, then craft a clear technical roadmap tailored to your needs.',
  },
  {
    id: 2,
    number: '02',
    icon: PencilRuler,
    title: 'Design & Architecture',
    desc: 'Our designers and architects create intuitive UI/UX and robust system designs, validated with you before development begins.',
  },
  {
    id: 3,
    number: '03',
    icon: Code2,
    title: 'Development & Testing',
    desc: 'We build with best practices, continuous testing, and regular sprint reviews to ensure quality at every stage of delivery.',
  },
  {
    id: 4,
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    desc: 'We handle deployment, provide thorough documentation, and deliver ongoing support so your solution evolves with your business.',
  },
];
