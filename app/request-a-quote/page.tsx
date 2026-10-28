import type { Metadata } from "next";

import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Request a Quote | SLINE",
  description:
    "Request a quote from SLINE for asbestos removal, demolition, earthworks, public drainage, private drainage & plumbing and All-in-One site works.",
};

export default function RequestAQuotePage() {
  return (
    <>
      <Header />

      <main>
        <ServiceHero
          eyebrow="Request a Quote"
          title="Tell us about"
          accentTitle="your project."
          description="Share the site location, type of work and a few project details. Our team can review asbestos removal, demolition, earthworks, drainage, plumbing and All-in-One scopes."
          image="/images/hero/sline-hero.jpg"
          imageAlt="SLINE project site"
          imagePosition="center"
        />

        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#d32329]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c92229]">
                Project Enquiry
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.6rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-neutral-900">
              Start with the
              <span className="block text-[#d32329]">site details.</span>
            </h2>

            <p className="mt-7 max-w-[720px] text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              Give us the basics below and include anything useful about access,
              timing, existing reports or the work you need completed.
            </p>

            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
