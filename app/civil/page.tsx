import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Civil Works | SLINE",
  description:
    "Explore SLINE civil capability across earthworks, public drainage, private drainage and plumbing, and All-in-One site services.",
};

const civilServices = [
  {
    number: "01",
    title: "Earthworks",
    href: "/civil/earthworks",
    image: "/images/demolition/demolition-earthworks-excavation.jpg",
    alt: "SLINE earthworks and excavation",
    description:
      "Excavation, ground preparation, trenching and earthworks planned around access, drainage, services and the next stage of the site.",
  },
  {
    number: "02",
    title: "Public Drainage",
    href: "/civil/public-drainage",
    image: "/images/civil/civil-public-drainage-night.jpg",
    alt: "SLINE public drainage night works",
    description:
      "Public stormwater and wastewater drainage works, including road-corridor activity, traffic-management coordination and reinstatement where required.",
  },
  {
    number: "03",
    title: "Private Drainage & Plumbing",
    href: "/civil/private-drainage-plumbing",
    image: "/images/civil/civil-service-connection-trench.jpg",
    alt: "SLINE private drainage and service connection works",
    description:
      "On-site private drainage, plumbing and associated service works coordinated with excavation, public connections and the wider civil programme.",
  },
  {
    number: "04",
    title: "All-in-One",
    href: "/civil/all-in-one",
    image: "/images/civil/civil-underground-ducting.jpg",
    alt: "SLINE All-in-One underground site service works",
    description:
      "A coordinated site-servicing package bringing connected earthworks, drainage, plumbing and service connection stages together toward a serviced, prepared site.",
  },
];

export default function CivilPage() {
  return (
    <>
      <Header />

      <main>
        <ServiceHero
          eyebrow="Civil Works"
          title="Civil capability."
          accentTitle="Choose the scope."
          description="Earthworks, public drainage, private drainage and plumbing, and All-in-One site services delivered individually or as connected parts of a wider project."
          image="/images/services/civil.jpg"
          imageAlt="SLINE civil works"
        />

        <article className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1040px]">
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#d32329]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c92229]">
                  Civil Overview
                </p>
              </div>

              <h2 className="mt-4 text-[clamp(2.7rem,4.7vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.052em] text-neutral-900">
                Practical civil work
                <span className="block text-[#d32329]">
                  built around the site.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                SLINE&apos;s civil capability supports the preparation,
                servicing and progression of sites after or alongside
                demolition. Each service can be delivered as its own scope, or
                connected with related work where the project benefits from
                fewer handovers and clearer site coordination.
              </p>
            </div>

            <div className="mt-14 border-t border-neutral-200">
              {civilServices.map((service, index) => (
                <section
                  key={service.href}
                  className="border-b border-neutral-200 py-10 sm:py-12"
                >
                  <div className="flow-root">
                    <figure
                      className={`mb-6 w-full sm:mb-5 sm:w-[340px] lg:w-[390px] ${
                        index % 2 === 0
                          ? "sm:float-right sm:ml-8"
                          : "sm:float-left sm:mr-8"
                      }`}
                    >
                      <Link href={service.href} className="group block">
                        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="(min-width: 1024px) 390px, (min-width: 640px) 340px, 92vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                          />
                          <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                        </div>
                      </Link>
                    </figure>

                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#d32329]">
                      {service.number} · Civil Service
                    </p>

                    <h3 className="mt-3 text-[clamp(2rem,4vw,3.3rem)] font-black uppercase leading-[0.95] tracking-[-0.047em] text-neutral-900">
                      <Link
                        href={service.href}
                        className="transition-colors hover:text-[#d32329]"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-6 inline-block border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:text-[#d32329]"
                    >
                      Explore {service.title}
                    </Link>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-l-[3px] border-[#d32329] pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Full-Site Delivery
              </p>

              <p className="mt-3 text-xl font-black uppercase leading-8 tracking-[-0.03em] text-neutral-900 sm:text-2xl">
                Asbestos
                <span className="mx-3 text-neutral-300">→</span>
                Demolition
                <span className="mx-3 text-neutral-300">→</span>
                Earthworks
                <span className="mx-3 text-neutral-300">→</span>
                Drainage & Site Services
              </p>

              <p className="mt-4 max-w-[800px] text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
                Where a project involves several connected stages, SLINE can
                coordinate civil work with the asbestos and demolition scopes
                that come before it.
              </p>

              <Link
                href="/projects/197-stoddard-road"
                className="mt-6 inline-block border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:text-[#d32329]"
              >
                View 197 Stoddard Road
              </Link>
            </div>
          </div>
        </article>

        <section className="bg-[#d32329] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1040px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              Discuss Your Project
            </p>

            <h2 className="mt-4 max-w-[820px] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.055em]">
              Not sure which
              <span className="block text-black/40">civil scope fits?</span>
            </h2>

            <p className="mt-6 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Tell us about the site and what needs to happen next. We can
              discuss the individual service or the combination of civil work
              required.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex min-h-[58px] min-w-[270px] items-center justify-between gap-8 bg-white px-7 text-sm font-black uppercase tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="!text-black">Request a Quote</span>
              <span className="text-xl !text-[#d32329] transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
