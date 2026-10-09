import { useEffect } from 'react';
import { Award, BriefcaseBusiness, Globe2, HeartHandshake, Lightbulb, LockKeyhole, Rocket, ShieldCheck, Sparkles, TrendingUp, Users, Workflow } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../sections/CTABanner';
import { TEAM } from '../data/team';
import { MILESTONES, STATS, WHY_US } from '../data/technologies';

function StatBox({ stat, bg, delay }) {
  const Icon = stat.icon;
  return (
    <ScrollReveal delay={delay}>
      <div style={{ background: bg, padding: '40px 20px', textAlign: 'center', borderRadius: '0' }}>
        <div className="about-stat-icon"><Icon size={34} strokeWidth={1.8} /></div>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#fff', margin: '0 0 4px' }}>
          {stat.target}{stat.suffix}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.9375rem' }}>
          {stat.label}
        </p>
      </div>
    </ScrollReveal>
  );
}

const STAT_EXTRAS = [
  { icon: BriefcaseBusiness, bg: 'var(--clr-primary-dark)' },
  { icon: Users, bg: 'var(--dark)' },
  { icon: Globe2, bg: 'var(--clr-accent)' },
  { icon: Workflow, bg: 'var(--clr-primary-dark)' },
];

const VALUES = [
  { label: 'Innovation', icon: Lightbulb },
  { label: 'Excellence', icon: Award },
  { label: 'Integrity', icon: ShieldCheck },
  { label: 'Collaboration', icon: HeartHandshake },
  { label: 'Customer Success', icon: Users },
  { label: 'African Pride', icon: Globe2 },
  { label: 'Security First', icon: LockKeyhole },
  { label: 'Continuous Growth', icon: TrendingUp },
];

export default function About() {
  useEffect(() => { document.title = 'About Us | NuNAI Technologies'; }, []);

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner" aria-labelledby="about-page-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
        </div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">About Us</span>
          </nav>
          <span className="section-label">Who We Are</span>
          <h1 id="about-page-heading">
            Building the Future Through{' '}
            <span className="gradient-text">Technology</span>
          </h1>
          <p>A team of innovators on a mission to transform African businesses through intelligent digital solutions.</p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '100px 0', background: 'var(--clr-bg-2)' }} aria-labelledby="story-heading">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <div className="about-visual">
                <div className="about-icon-wrap"><Rocket className="about-big-icon" size={40} strokeWidth={1.7} /></div>
                <h3>Founded 2020</h3>
                <p>Nairobi, Kenya</p>
                <div className="about-stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Building</span>
                </div>
                <div className="about-tag"><Globe2 size={16} aria-hidden="true" /> Africa &amp; Beyond</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="0.15s">
              <SectionTitle label="Our Story" title={<>How <span className="gradient-text">NuNAI</span> Began</>} align="left" />
              <p className="about-text">NuNAI Technologies was founded in 2020 with a clear conviction: that world-class AI and software solutions should be accessible to businesses of every size across Africa. We started as a small, passionate team of engineers and technologists who believed technology could genuinely transform how African organisations operate and compete.</p>
              <p className="about-text">From our base in Nairobi, Kenya, we set out to build solutions that are not just technically excellent but deeply practical — designed to solve real problems that real businesses face every day.</p>
              <p className="about-text">Today, NuNAI Technologies serves clients across multiple industries, from healthcare and education to logistics and financial services, delivering solutions that stand shoulder to shoulder with anything produced anywhere in the world.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section style={{ padding: '100px 0', background: 'var(--clr-bg)' }} aria-labelledby="mvv-heading">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="What Drives Us" title={<>Mission, Vision &amp; <span className="gradient-text">Values</span></>} />
          </ScrollReveal>
          <div className="services-grid">
            {[
              { icon: Rocket, title: 'Our Mission', text: 'To empower businesses through innovative, practical technology solutions that drive sustainable growth, improve operational efficiency, and enable genuine digital transformation — making world-class technology accessible to organisations across Africa.' },
              { icon: Sparkles, title: 'Our Vision',  text: 'To become the most trusted technology partner for businesses in Africa, recognised for technical excellence, integrity, and a consistent track record of delivering solutions that create measurable, lasting impact for clients.' },
              { icon: Lightbulb, title: 'Our Philosophy', text: 'Technology is not an end in itself — it is a means to create better outcomes for people and organisations. We build solutions that are simple where possible, powerful where necessary, and always aligned with the actual goals of the businesses we serve.' },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={`${i * 0.12}s`}>
                <div className="service-card" style={{ textAlign: 'center' }}>
                  <div className="about-value-icon"><c.icon size={34} strokeWidth={1.8} aria-hidden="true" /></div>
                  <h3 className="service-title">{c.title}</h3>
                  <p className="service-desc">{c.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay="0.1s">
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <h3 className="values-heading" style={{ marginBottom: '18px' }}>Core Values</h3>
              <div className="values-list" style={{ justifyContent: 'center' }} role="list">
                {VALUES.map(({ label, icon: Icon }) => (
                  <span className="value-tag" role="listitem" key={label}><Icon size={15} aria-hidden="true" />{label}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="about-stats" aria-label="Company Statistics">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Company Statistics"
              title={<>NuNAI <span className="gradient-text">in Numbers</span></>}
              align="center"
            />
          </ScrollReveal>
        </div>
        <div className="about-stats-grid">
          {STATS.map((s, i) => (
            <StatBox
              key={s.label}
              stat={{ ...s, icon: STAT_EXTRAS[i]?.icon || TrendingUp }}
              bg={STAT_EXTRAS[i]?.bg || 'var(--clr-primary)'}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 0', background: 'var(--clr-bg)' }} aria-labelledby="team-heading">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Our People" title={<>Meet the <span className="gradient-text">Team</span></>} subtitle="The engineers, designers, and strategists building the future of African technology." />
          </ScrollReveal>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <ScrollReveal key={m.id} delay={`${i * 0.1}s`}>
                <div className="team-card">
                  <div className="team-avatar" style={{ background: m.bg }} aria-hidden="true">{m.initials}</div>
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--clr-text-muted)', marginTop: '40px' }}>
            Interested in joining the team?{' '}
            <Button to="/contact" variant="ghost" style={{ display: 'inline', padding: '0', color: 'var(--clr-primary)' }}>
              We're always looking for exceptional talent.
            </Button>
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section style={{ padding: '100px 0', background: 'var(--clr-bg-2)' }} aria-labelledby="milestones-heading">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Our Journey" title={<>Key <span className="gradient-text">Milestones</span></>} />
          </ScrollReveal>
          <div className="milestone-list">
            {MILESTONES.map((m, i) => (
              <ScrollReveal key={m.year} delay={`${i * 0.1}s`}>
                <div className="milestone-item" style={{ '--milestone-accent': m.accent }}>
                  <div className="milestone-marker" aria-hidden="true"><span>{String(i + 1).padStart(2, '0')}</span></div>
                  <div className="milestone-content">
                    <span className="milestone-year">{m.year}</span>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ padding: '100px 0', background: 'var(--clr-bg)' }} aria-labelledby="why-about-heading">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Why Choose Us" title={<>What Makes NuNAI <span className="gradient-text">Different</span></>} />
          </ScrollReveal>
          <div className="why-grid">
            {WHY_US.map((w, i) => (
              <ScrollReveal key={w.title} delay={`${i * 0.08}s`}>
                <div className="why-card">
                  <div className="why-icon" aria-hidden="true"><w.icon size={26} strokeWidth={1.8} /></div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Let's Work Together"
        heading="Ready to Start Your Project?"
        body="Whether you need AI, software, mobile, or cloud solutions — we're ready to help you build something exceptional."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
