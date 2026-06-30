import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navigation />
      <HeroSection />
      <DevelopersSection />
      <InfrastructureSection />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
