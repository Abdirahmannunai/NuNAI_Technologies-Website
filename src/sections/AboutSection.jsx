import { Award, Globe2, HeartHandshake, Lightbulb, Rocket, ShieldCheck, Users } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">

          {/* Visual card */}
          <ScrollReveal>
            <div className="about-visual" aria-hidden="true">
              <div className="about-icon-wrap">
                <Rocket className="about-big-icon" size={40} strokeWidth={1.7} />
              </div>
              <h3>Building the Future</h3>
              <p>Through Technology</p>
              <div className="about-stat-card">
                <span className="stat-number">2020</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="about-tag"><Globe2 size={16} aria-hidden="true" /> Africa &amp; Beyond</div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay="0.15s">
            <SectionTitle
              label="About Us"
              title={<>Building the Future Through <span className="gradient-text">Technology</span></>}
              align="left"
            />

            <p className="about-text">
              NuNAI Technologies was founded with a vision to bridge the gap between innovation
              and business success. We specialise in developing intelligent solutions that empower
              organisations to operate smarter, faster, and more efficiently.
            </p>
            <p className="about-text">
              From startups and SMEs to large enterprises, we provide scalable technology solutions
              tailored to unique business needs across Africa and beyond.
            </p>

            <div className="mission-vision">
              <div className="mv-card">
                <div className="mv-icon" aria-hidden="true"><Rocket size={26} /></div>
                <h3>Our Mission</h3>
                <p>To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.</p>
              </div>
              <div className="mv-card">
                <div className="mv-icon" aria-hidden="true"><Award size={26} /></div>
                <h3>Our Vision</h3>
                <p>To become a leading technology partner in Africa and beyond, delivering world-class AI and software solutions.</p>
              </div>
            </div>

            <div className="core-values" style={{ marginBottom: '28px' }}>
              <h3 className="values-heading">Our Core Values</h3>
              <div className="values-list" role="list">
                {[
                  { label: 'Innovation', icon: Lightbulb },
                  { label: 'Excellence', icon: Award },
                  { label: 'Integrity', icon: ShieldCheck },
                  { label: 'Collaboration', icon: HeartHandshake },
                  { label: 'Customer Success', icon: Users },
                ].map(({ label, icon: Icon }) => (
                  <span className="value-tag" role="listitem" key={label}><Icon size={15} aria-hidden="true" />{label}</span>
                ))}
              </div>
            </div>

            <Button to="/about" variant="outline">Learn Our Full Story</Button>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
