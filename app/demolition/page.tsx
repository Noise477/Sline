import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Demolition",
  description:
    "Residential and commercial demolition, strip-outs, controlled demolition and site clearance from SLINE across Auckland and New Zealand.",
};

export default function DemolitionPage() {
  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <ServiceHero
          eyebrow="Demolition"
          title="Planned demolition."
          accentTitle="Practical delivery."
          description="Structural demolition, strip-outs, site clearance and coordinated demolition management for residential, commercial and industrial sites across New Zealand."
          image="/images/services/demolition.jpg"
          imageAlt="SLINE demolition work"
        />

        {/* =====================================================
            SINGLE EDITORIAL READING FLOW
        ====================================================== */}
        <article className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            {/* INTRODUCTION */}
            <ArticleEyebrow>Demolition</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.7rem,4.7vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.052em] text-neutral-900">
              More than taking
              <span className="block text-[#d32329]">a structure down.</span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                SLINE provides demolition services for residential,
                commercial and industrial properties, from complete building
                demolition through to partial structure removal and internal
                strip-outs. Each project is considered around the condition of
                the site, surrounding structures, access, programme and the
                work that needs to follow.
              </p>

              <p>
                Demolition is often one stage within a wider redevelopment or
                site preparation programme. Before machinery starts, there may
                be hazardous materials to manage, services to consider, items
                to retain, neighbouring activities to protect and waste streams
                to plan. A clear demolition sequence helps those different
                requirements work together rather than compete with one
                another once work is underway.
              </p>

              <p>
                SLINE&apos;s wider asbestos, earthworks and civil capability
                allows demolition to be coordinated with other stages where
                the project requires it. That can mean moving from hazardous
                material remediation into demolition, then into site clearance,
                excavation, drainage or reinstatement without treating every
                stage as an unrelated scope.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-y border-neutral-200 py-6">
              <ArticleStat value="Full" label="Building Demolition" />
              <ArticleStat value="Partial" label="Structure Removal" />
              <ArticleStat value="NZ" label="Project Delivery" />
            </div>

            {/* =================================================
                DEMOLITION SERVICES
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>Demolition Services</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Different sites need
              <span className="block text-[#d32329]">different approaches.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              SLINE&apos;s demolition capability covers both large and small
              scopes. The company brochure identifies structural demolition,
              interior strip-outs, garage and shed removal, fire-damaged
              building demolition, site clearance and waste disposal as core
              areas of work.
            </p>

            <div className="mt-9">
              <ServiceArticle number="01" title="Structural Demolition">
                Complete or substantial demolition of buildings and structures
                where the work needs to be sequenced around access, surrounding
                property, site constraints and the next stage of development.
              </ServiceArticle>

              <ServiceArticle number="02" title="Interior Strip-Outs">
                Selective removal of internal finishes, fixtures, partitions
                and other elements where the main structure is being retained
                for refurbishment, reconfiguration or redevelopment.
              </ServiceArticle>

              <ServiceArticle number="03" title="Garage & Shed Removal">
                Removal of smaller detached structures as part of residential,
                commercial or wider site clearance work, including preparation
                of the area for what comes next.
              </ServiceArticle>

              <ServiceArticle number="04" title="Fire-Damaged Buildings">
                Demolition of fire-damaged structures where stability,
                hazardous materials, debris and surrounding site conditions may
                all need to be considered before and during removal.
              </ServiceArticle>

              <ServiceArticle number="05" title="Site Clearance & Waste Disposal">
                Clearing demolition debris and unwanted structures from the
                site so earthworks, civil construction or redevelopment can
                progress with a cleaner and more workable site area.
              </ServiceArticle>

              <ServiceArticle number="06" title="Relocation & Management">
                Demolition management can also include coordination around
                relocation requirements, retained structures, sequencing and
                the practical handover between demolition and following site
                works.
              </ServiceArticle>
            </div>

            {/* RED EDITORIAL CALLOUT */}
            <div className="mt-10 border-l-[4px] border-[#d32329] bg-[#f7f4f3] px-6 py-6 sm:px-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c92229]">
                Safety · Reliability · Efficiency
              </p>

              <p className="mt-3 text-base leading-8 text-neutral-700 sm:text-lg">
                SLINE&apos;s demolition material places a strong emphasis on
                safe, reliable and efficient delivery. The aim is not simply to
                remove a structure quickly, but to complete the work with care
                for the site, people around it and the programme that follows.
              </p>
            </div>

            {/* =================================================
                HOW THE WORK IS PLANNED
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>Planning The Work</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              The demolition method
              <span className="block text-[#d32329]">starts with the site.</span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                Two demolition projects can look similar from the road while
                requiring very different plans. A freestanding residential
                building, an occupied commercial property and an industrial
                structure each create different questions around access,
                neighbouring activity, retained assets, machinery and
                sequencing.
              </p>

              <p>
                Existing hazardous materials are another important part of the
                picture. Where asbestos or other contamination is present, that
                work may need to be addressed before or alongside demolition so
                the removal sequence does not create unnecessary risk or delay
                later stages of the project.
              </p>

              <p>
                Site logistics also matter. Machine access, loading areas,
                debris movement, waste handling and the amount of space
                available can all influence how a structure is dismantled and
                how efficiently the site can be cleared afterwards.
              </p>

              <p>
                For partial demolition and strip-out work, the retained
                building becomes just as important as the material being
                removed. The scope needs to distinguish what stays, what goes
                and how the remaining structure will be left ready for the next
                contractor or stage of construction.
              </p>
            </div>

            <div className="mt-9">
              <KnowledgePoint number="01" title="Understand the scope">
                Define the structures, internal areas or site elements being
                removed and identify what must remain protected or operational.
              </KnowledgePoint>

              <KnowledgePoint number="02" title="Plan the sequence">
                Consider access, surrounding activity, hazardous materials,
                equipment and the order in which different parts of the work
                need to occur.
              </KnowledgePoint>

              <KnowledgePoint number="03" title="Clear the site for what follows">
                Demolition is completed with the next stage in mind, whether
                that is earthworks, civil infrastructure, rebuilding,
                landscaping or another redevelopment activity.
              </KnowledgePoint>
            </div>

            {/* =================================================
                PROJECT ENVIRONMENTS
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>Project Environments</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Residential to industrial.
              <span className="block text-[#d32329]">One practical mindset.</span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                SLINE&apos;s demolition services are used across residential,
                commercial and industrial properties. The scale of those
                projects can vary considerably, but the same fundamentals
                remain important: a clear scope, appropriate site controls,
                reliable communication and a practical plan for the material
                and site after demolition.
              </p>

              <p>
                Residential work may involve houses, garages, sheds or partial
                removal ahead of renovation. Commercial projects can require
                strip-outs, staged removal or demolition around neighbouring
                businesses and active sites. Industrial environments may add
                larger structures, heavier materials, more complex access and
                coordination with existing operations.
              </p>

              <p>
                The company&apos;s broader project capability also makes it
                possible to consider demolition in relation to remediation and
                civil work rather than as a separate endpoint. This is useful
                where clearing a structure is only the beginning of the work
                required on site.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-y border-neutral-200 py-5">
              <ArticleTag>Residential</ArticleTag>
              <ArticleTag>Commercial</ArticleTag>
              <ArticleTag>Industrial</ArticleTag>
              <ArticleTag>Full Demolition</ArticleTag>
              <ArticleTag>Partial Removal</ArticleTag>
              <ArticleTag>Site Clearance</ArticleTag>
            </div>

            {/* =================================================
                INTEGRATED DELIVERY
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>Integrated Delivery</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Demolition connects
              <span className="block text-[#d32329]">the stages around it.</span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                A demolition project may begin with asbestos or contamination
                remediation and end with excavation, drainage, backfilling or
                other civil work. Planning those stages with an understanding
                of the wider site can reduce unnecessary handovers and help
                maintain a clearer project sequence.
              </p>

              <p>
                Where required, SLINE can support the transition from
                remediation into demolition management and then into earthworks
                and civil delivery. Individual services can still stand alone;
                the benefit is having complementary capability available when a
                project needs more than one of them.
              </p>
            </div>

            <div className="mt-9 border-l-[3px] border-[#d32329] pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Project Capability
              </p>

              <p className="mt-3 text-xl font-black uppercase leading-8 tracking-[-0.03em] text-neutral-900 sm:text-2xl">
                Asbestos
                <span className="mx-3 text-neutral-300">→</span>
                <span className="text-[#d32329]">Demolition</span>
                <span className="mx-3 text-neutral-300">→</span>
                Earthworks
                <span className="mx-3 text-neutral-300">→</span>
                Civil
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/asbestos"
                className="group inline-flex min-h-[50px] items-center gap-6 border border-neutral-300 bg-white px-6 text-xs font-black uppercase tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-[1.025]"
              >
                Asbestos
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/civil"
                className="group inline-flex min-h-[50px] items-center gap-6 border border-[#d32329] bg-white px-6 text-xs font-black uppercase tracking-[0.14em] !text-[#c92229] transition-colors duration-300 hover:bg-[#d32329] hover:!text-white"
              >
                Civil
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-[#d32329] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[920px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              Discuss Your Project
            </p>

            <h2 className="mt-4 max-w-[820px] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.055em]">
              Planning demolition
              <span className="block text-black/40">or site clearance?</span>
            </h2>

            <p className="mt-6 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Tell us about the structure, site conditions and what needs to
              happen afterwards. SLINE can discuss the demolition scope and how
              it fits into the wider project.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex min-h-[58px] min-w-[270px] items-center justify-between gap-8 bg-white px-7 text-sm font-black uppercase tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="!text-black">Request a Quote</span>

              <span className="text-xl !text-black transition-transform duration-300 group-hover:translate-x-1.5">
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

function ArticleEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-8 bg-[#d32329]" />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c92229]">
        {children}
      </p>
    </div>
  );
}

function ArticleDivider() {
  return (
    <div className="relative my-14 h-px bg-neutral-200 sm:my-16">
      <span className="absolute left-0 top-[-1px] h-[3px] w-16 bg-[#d32329]" />
    </div>
  );
}

function ArticleStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-black tracking-[-0.045em] text-[#d32329] sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-400">
        {label}
      </p>
    </div>
  );
}

function KnowledgePoint({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-neutral-200 py-6 last:border-b">
      <div className="flex items-baseline gap-4">
        <span className="min-w-[36px] shrink-0 text-sm font-black tracking-[-0.02em] text-[#d32329]">
          {number}
        </span>
        <h3 className="text-base font-black uppercase tracking-[-0.025em] text-neutral-900 sm:text-lg">
          {title}
        </h3>
      </div>

      <p className="mt-3 max-w-[790px] pl-[52px] text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
        {children}
      </p>
    </div>
  );
}

function ServiceArticle({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group border-t border-neutral-200 py-6 last:border-b">
      <div className="flex items-baseline gap-4">
        <span className="min-w-[36px] shrink-0 text-sm font-black tracking-[-0.02em] text-[#d32329]">
          {number}
        </span>

        <h3 className="text-lg font-black uppercase leading-tight tracking-[-0.03em] text-neutral-900 transition-colors duration-300 group-hover:text-[#c92229] sm:text-xl">
          {title}
        </h3>
      </div>

      <p className="mt-3 max-w-[800px] pl-[52px] text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
        {children}
      </p>
    </div>
  );
}

function ArticleTag({ children }: { children: ReactNode }) {
  return (
    <span className="relative pl-3 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
      <span className="absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 bg-[#d32329]" />
      {children}
    </span>
  );
}
