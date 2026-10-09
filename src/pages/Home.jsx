import AboutSection from '../sections/AboutSection';
import CTABanner from '../sections/CTABanner';
import ContactSection from '../sections/ContactUsSection';
import FAQSection from '../sections/FAQSection';
import HeroCarousel from '../sections/HeroCarousel';
import NewsletterSection from '../sections/NewsletterSection';
import PortfolioSection from '../sections/PortfolioSection';
import ProcessSection from '../sections/ProcessSection';
import ServicesSection from '../sections/ServicesSection';
import TechStrip from '../sections/TechStrip';
import TestimonialsSection from '../sections/TestimonialsSection';
import WhyUsSection from '../sections/WhyUsSection';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TechStrip />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <PortfolioSection limit={4} />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
