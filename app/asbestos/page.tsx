import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Asbestos Removal",
  description:
    "Licensed Class A & B asbestos removal, hazardous-material management and contamination remediation from SLINE across Auckland and New Zealand.",
};

export default function AsbestosPage() {
  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <ServiceHero
          eyebrow="Asbestos & Contamination"
          title="Specialist"
          accentTitle="asbestos removal."
          description="Class A & B asbestos removal, contamination remediation and hazardous material management for projects across New Zealand."
          image="/images/asbestos/asbestos-1.jpg"
          imageAlt="SLINE asbestos removal work"
        />

        {/* =====================================================
            ARTICLE
        ====================================================== */}
        <article className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            {/* =================================================
                INTRODUCTION
            ================================================== */}
            <ArticleEyebrow>
              Asbestos & Contamination
            </ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.7rem,4.7vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.052em] text-neutral-900">
              Safe removal starts
              <span className="block text-[#d32329]">
                with the right approach.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                Established in 2018, SLINE delivers specialist asbestos
                contamination remediation and hazardous material management.
                The company holds capability for both{" "}
                <strong className="font-bold text-neutral-900">
                  Class A & B asbestos removal
                </strong>
                , allowing a broad range of asbestos-related work to be
                considered according to the material, site conditions and
                overall project scope.
              </p>

              <p>
                Asbestos work rarely exists in isolation. It may be identified
                during renovation, ahead of demolition, within damaged
                buildings, in contaminated ground or as one part of a larger
                redevelopment programme. SLINE therefore considers asbestos
                remediation in the context of the wider site rather than simply
                treating removal as an isolated task.
              </p>

              <p>
                Alongside asbestos and contamination work, SLINE also operates
                across demolition, earthworks and civil delivery. Where a
                project requires several stages of work, this provides the
                ability to coordinate more of the site programme through one
                wider project team.
              </p>
            </div>

            {/* Facts */}
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-neutral-200 py-6">
              <ArticleStat value="2018" label="Established" />
              <ArticleStat value="Class A & B" label="Asbestos Removal" />
              <ArticleStat value="NZ" label="Nationwide Capability" />
            </div>

            {/* =================================================
                UNDERSTANDING ASBESTOS
            ================================================== */}
            <div className="mt-16">
              <ArticleEyebrow>
                Understanding Asbestos
              </ArticleEyebrow>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
                Why asbestos needs
                <span className="block text-[#d32329]">
                  careful management.
                </span>
              </h2>

              {/* FLOAT IMAGE */}
              <div className="flow-root mt-7">
                <figure className="mb-6 w-full sm:float-right sm:mb-5 sm:ml-8 sm:w-[380px] lg:w-[410px]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src="/images/asbestos/asbestos-3.jpg"
                      alt="Controlled asbestos work and protective measures"
                      fill
                      sizes="(min-width: 1024px) 410px, (min-width: 640px) 380px, 92vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#d32329]" />
                  </div>

                  <figcaption className="mt-3 border-l-2 border-[#d32329] pl-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-neutral-400">
                    Controlled asbestos work · protective measures · site
                    management
                  </figcaption>
                </figure>

                <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                  <p>
                    <strong className="font-bold text-[#c92229]">
                      Asbestos
                    </strong>{" "}
                    is a naturally occurring mineral made up of extremely small
                    fibres. It was historically used in a wide range of
                    construction products because of properties such as heat
                    resistance, fire resistance, durability and insulation.
                    As a result, asbestos-containing materials can still be
                    encountered in older buildings and structures throughout
                    New Zealand.
                  </p>

                  <p>
                    The presence of asbestos does not necessarily mean that
                    fibres are constantly being released into the air. The
                    condition of the material and how it is treated are
                    important. A material that remains intact and undisturbed
                    presents a different situation from one being cut, drilled,
                    broken, sanded, demolished or heavily weathered.
                  </p>

                  <p>
                    When asbestos-containing material is disturbed, very small
                    fibres can be released into the surrounding air. These
                    fibres cannot normally be seen with the naked eye, meaning
                    there can be an exposure risk even when there is no obvious
                    cloud of visible dust.
                  </p>

                  <p>
                    If airborne fibres are inhaled, some can remain within the
                    lungs. Exposure is associated with serious asbestos-related
                    diseases including{" "}
                    <strong className="font-bold text-neutral-900">
                      mesothelioma, lung cancer and asbestosis
                    </strong>
                    . These illnesses may develop many years after exposure,
                    which is why preventing unnecessary disturbance is
                    important.
                  </p>

                  <p>
                    Renovation and demolition work create particular reasons to
                    consider asbestos early. Drilling through wall linings,
                    removing old cladding, cutting building products, lifting
                    flooring or dismantling structures may disturb material
                    that was previously enclosed or left untouched.
                  </p>
                </div>
              </div>

              {/* Knowledge points */}
              <div className="mt-10">
                <KnowledgePoint
                  number="01"
                  title="The fibres can be invisible"
                >
                  Airborne asbestos fibres can be present without visible dust.
                  It is also not always possible to determine whether a
                  building product contains asbestos simply by looking at it.
                </KnowledgePoint>

                <KnowledgePoint
                  number="02"
                  title="Disturbance changes the risk"
                >
                  Cutting, drilling, breaking, sanding, grinding and demolition
                  can turn an otherwise intact material into a source of
                  airborne fibres. The planned activity is therefore an
                  important part of assessing how work should proceed.
                </KnowledgePoint>

                <KnowledgePoint
                  number="03"
                  title="Health effects can appear much later"
                >
                  Asbestos-related disease can develop long after the original
                  exposure. Careful identification, planning and controlled
                  removal are intended to reduce unnecessary exposure before
                  wider construction work begins.
                </KnowledgePoint>
              </div>

              {/* Red callout */}
              <div className="mt-9 bg-[#d32329] px-5 py-5 text-white sm:px-6">
                <p className="text-sm font-bold leading-7 sm:text-base sm:leading-8">
                  If material is suspected of containing asbestos, avoid
                  unnecessarily cutting, drilling, sanding, breaking or
                  removing it until the material and proposed work have been
                  appropriately assessed.
                </p>
              </div>
            </div>

            {/* =================================================
                CLASS A / B
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>
              Class A & Class B
            </ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Different materials.
              <span className="block text-[#d32329]">
                Different controls.
              </span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                Asbestos-containing materials are commonly divided into
                friable and non-friable categories. This distinction matters
                because the likelihood of fibres being released, and therefore
                the controls required around the work, can be very different.
              </p>

              <p>
                <strong className="font-bold text-[#c92229]">
                  Friable asbestos
                </strong>{" "}
                is material that can be crumbled or reduced to powder more
                easily when dry. Because the fibres can be released more
                readily when this material is disturbed, this type of removal
                is generally associated with Class A asbestos work.
              </p>

              <p>
                <strong className="font-bold text-[#c92229]">
                  Non-friable asbestos
                </strong>{" "}
                has asbestos fibres bonded within another material. Common
                examples can include cement-based products and other composite
                building materials. Although fibres are more tightly bound,
                cutting, breaking, deterioration or inappropriate handling can
                still create an exposure risk.
              </p>

              <p>
                For that reason, determining an appropriate approach involves
                more than simply knowing that asbestos is present. The material
                type, condition, surrounding environment, proposed method of
                removal and activities occurring around the site all form part
                of planning the work.
              </p>
            </div>

            {/* =================================================
                SERVICES
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>
              What We Do
            </ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Asbestos and
              <span className="block text-[#d32329]">
                contamination solutions.
              </span>
            </h2>

            {/* LEFT FLOAT IMAGE */}
            <div className="flow-root mt-7">
              <figure className="mb-6 w-full sm:float-left sm:mb-5 sm:mr-8 sm:w-[350px] lg:w-[380px]">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/asbestos/asbestos-2.jpg"
                    alt="SLINE asbestos and contamination remediation work"
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 350px, 92vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-y-0 right-0 w-[4px] bg-[#d32329]" />
                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#d32329]" />
                </div>

                <figcaption className="mt-3 border-l-2 border-[#d32329] pl-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-neutral-400">
                  Asbestos & contamination remediation
                </figcaption>
              </figure>

              <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                <p>
                  SLINE&apos;s work extends beyond standard asbestos removal.
                  The company&apos;s contamination capability includes
                  contaminated soil remediation, methamphetamine
                  decontamination and specialist work associated with
                  fire-damaged properties.
                </p>

                <p>
                  This broader capability is particularly useful where a site
                  contains more than one issue or where remediation needs to be
                  completed before demolition, earthworks or redevelopment can
                  begin.
                </p>

                <p>
                  Rather than treating each part of the site independently,
                  SLINE can consider the contamination work alongside the
                  programme that follows. This helps maintain a clearer
                  transition between remediation and later stages of the
                  project.
                </p>
              </div>
            </div>

            {/* Service articles */}
            <div className="mt-10">
              <ServiceArticle
                number="01"
                title="Class A Asbestos Removal"
              >
                SLINE provides Class A asbestos removal capability for work
                involving friable asbestos and other situations requiring the
                higher level of control associated with this category of
                material. Planning considers the removal area, surrounding site
                conditions and activities taking place nearby.
              </ServiceArticle>

              <ServiceArticle
                number="02"
                title="Class B Asbestos Removal"
              >
                Class B capability supports the removal of non-friable
                asbestos-containing materials. Although fibres are bonded
                within another material, controlled removal remains important
                where products are being dismantled, broken or otherwise
                disturbed.
              </ServiceArticle>

              <ServiceArticle
                number="03"
                title="Contaminated Soil Remediation"
              >
                Asbestos and other contaminants may also be encountered within
                soil. SLINE provides contaminated soil remediation and can
                coordinate this work alongside excavation, earthworks and
                subsequent civil activity where required by the wider project.
              </ServiceArticle>

              <ServiceArticle
                number="04"
                title="Meth Decontamination & Cleaning"
              >
                SLINE&apos;s contamination services include methamphetamine
                decontamination and cleaning, extending the company&apos;s
                remediation capability beyond asbestos-containing building
                materials.
              </ServiceArticle>

              <ServiceArticle
                number="05"
                title="Fire-Damaged Property Cleanup"
              >
                Fire-damaged environments can combine damaged building
                materials, debris and hazardous contaminants. SLINE provides
                cleanup and restoration support and can connect remediation
                work with demolition and subsequent site preparation where
                required.
              </ServiceArticle>
            </div>

            {/* =================================================
                EXPERIENCE
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>
              Experience Across New Zealand
            </ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Professional delivery across
              <span className="block text-[#d32329]">
                different environments.
              </span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                SLINE&apos;s company materials identify experience working with
                local city councils, the Ministry of Education and District
                Councils, alongside work in residential, commercial and
                industrial environments.
              </p>

              <p>
                These projects can involve very different operational
                requirements. Work around schools and public facilities may
                need careful consideration of access and surrounding users,
                while commercial and industrial environments may involve
                programme constraints, neighbouring activities and coordination
                with other contractors.
              </p>

              <p>
                Residential projects can present a different set of practical
                challenges again, particularly when asbestos is encountered
                during renovation, demolition or redevelopment. In each case,
                the objective is to plan the contamination work around the
                realities of the site rather than apply the same arrangement to
                every project.
              </p>

              <p>
                Across these environments, SLINE&apos;s focus is on safe,
                efficient and compliant delivery while keeping remediation
                connected with the wider project programme.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-y border-neutral-200 py-5">
              <ArticleTag>Local City Councils</ArticleTag>
              <ArticleTag>Ministry of Education</ArticleTag>
              <ArticleTag>District Councils</ArticleTag>
              <ArticleTag>Residential</ArticleTag>
              <ArticleTag>Commercial</ArticleTag>
              <ArticleTag>Industrial</ArticleTag>
            </div>

            {/* =================================================
                INTEGRATED DELIVERY
            ================================================== */}
            <ArticleDivider />

            <ArticleEyebrow>
              Integrated Delivery
            </ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Removal may only be
              <span className="block text-[#d32329]">
                the first step.
              </span>
            </h2>

            <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                Completing asbestos or contamination remediation does not
                necessarily complete the project. Buildings may still need to
                be demolished, foundations removed, ground excavated, drainage
                installed or sites prepared for their next use.
              </p>

              <p>
                Because SLINE also provides demolition management, earthworks
                and civil capability, those later activities can be considered
                when the remediation scope is being planned. This creates an
                opportunity to coordinate access, sequencing and handover
                between different stages of the same site.
              </p>

              <p>
                Where appropriate, SLINE can therefore support a project from
                asbestos and contamination remediation through to demolition,
                site clearance, earthworks and civil delivery.
              </p>
            </div>

            {/* Linear project flow */}
            <div className="mt-9 border-l-[3px] border-[#d32329] pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Project Capability
              </p>

              <p className="mt-3 text-xl font-black uppercase leading-8 tracking-[-0.03em] text-neutral-900 sm:text-2xl">
                <span className="text-[#d32329]">Asbestos</span>
                <span className="mx-3 text-neutral-300">→</span>
                Demolition
                <span className="mx-3 text-neutral-300">→</span>
                Earthworks
                <span className="mx-3 text-neutral-300">→</span>
                Civil
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/demolition"
                className="group inline-flex min-h-[50px] items-center gap-6 bg-neutral-900 px-6 text-xs font-black uppercase tracking-[0.14em] !text-white transition-transform duration-300 hover:scale-[1.025]"
              >
                Demolition
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

            <h2 className="mt-4 max-w-[800px] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.055em]">
              Need asbestos
              <span className="block text-black/40">
                removed safely?
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Tell us about the property, suspected materials and wider scope
              of work. SLINE can discuss the asbestos or contamination
              requirements and how the remediation stage fits into the work
              that follows.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex min-h-[58px] min-w-[270px] items-center justify-between gap-8 bg-white px-7 text-sm font-black uppercase tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="!text-black">
                Request a Quote
              </span>

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

/* =========================================================
   ARTICLE EYEBROW
========================================================= */

function ArticleEyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-8 bg-[#d32329]" />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c92229]">
        {children}
      </p>
    </div>
  );
}

/* =========================================================
   DIVIDER
========================================================= */

function ArticleDivider() {
  return (
    <div className="relative my-14 h-px bg-neutral-200 sm:my-16">
      <span className="absolute left-0 top-[-1px] h-[3px] w-16 bg-[#d32329]" />
    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function ArticleStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
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

/* =========================================================
   KNOWLEDGE POINT
========================================================= */

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

/* =========================================================
   SERVICE ENTRY
========================================================= */

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

/* =========================================================
   ARTICLE TAG
========================================================= */

function ArticleTag({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="relative pl-3 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
      <span className="absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 bg-[#d32329]" />
      {children}
    </span>
  );
}