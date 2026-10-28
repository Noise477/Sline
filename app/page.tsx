import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingContact from "@/components/FloatingContact";
import ServicesSection from "@/components/ServicesSection";
import NZCoverageMap from "@/components/NZCoverageMap";
import AboutIntro from "@/components/AboutIntro";
import ContactCTA from "@/components/ContactCTA";
import IntegratedDelivery from "@/components/IntegratedDelivery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutIntro />

        <NZCoverageMap />

        <ServicesSection />

        <IntegratedDelivery />


        <ContactCTA />
      </main>

      <Footer />

      <FloatingContact />
    </>
  );
}
