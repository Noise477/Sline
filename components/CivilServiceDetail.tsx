import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";

type DetailSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};

type CivilServiceDetailProps = {
  heroEyebrow: string;
  heroTitle: string;
  heroAccentTitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  sections: DetailSection[];
  relatedProjectText?: string;
};

export default function CivilServiceDetail({
  heroEyebrow,
  heroTitle,
  heroAccentTitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  introEyebrow,
  introTitle,
  introParagraphs,
  sections,
  relatedProjectText,
}: CivilServiceDetailProps) {
  return (
    <>
      <Header />

      <main>
        <ServiceHero
          eyebrow={heroEyebrow}
          title={heroTitle}
          accentTitle={heroAccentTitle}
          description={heroDescription}
          image={heroImage}
          imageAlt={heroImageAlt}
        />

        <article className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            <Link
              href="/civil"
              className="text-[11px] font-black uppercase tracking-[0.14em] text-neutral-400 transition-colors hover:text-[#d32329]"
            >
              ← Civil Overview
            </Link>

            <div className="mt-10">
              <ArticleEyebrow>{introEyebrow}</ArticleEyebrow>

              <h2 className="mt-4 text-[clamp(2.7rem,4.7vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.052em] text-neutral-900">
                {introTitle}
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {sections.map((section, index) => (
              <section key={section.title}>
                <ArticleDivider />

                <ArticleEyebrow>{section.eyebrow}</ArticleEyebrow>

                <h2 className="mt-4 text-[clamp(2.35rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
                  {section.title}
                </h2>

                <div className="flow-root mt-7">
                  {section.image && section.imageAlt ? (
                    <figure
                      className={`mb-6 w-full sm:mb-5 sm:w-[370px] lg:w-[410px] ${
                        index % 2 === 0
                          ? "sm:float-right sm:ml-8"
                          : "sm:float-left sm:mr-8"
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                        <Image
                          src={section.image}
                          alt={section.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 410px, (min-width: 640px) 370px, 92vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                      </div>
                    </figure>
                  ) : null}

                  <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {relatedProjectText ? (
              <>
                <ArticleDivider />

                <ArticleEyebrow>Related Project</ArticleEyebrow>

                <h2 className="mt-4 text-[clamp(2.35rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
                  197 Stoddard Road
                </h2>

                <p className="mt-7 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                  {relatedProjectText}
                </p>

                <Link
                  href="/projects/197-stoddard-road"
                  className="mt-7 inline-block border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:text-[#d32329]"
                >
                  View the project
                </Link>
              </>
            ) : null}
          </div>
        </article>

        <section className="bg-[#d32329] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[920px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              Discuss Your Project
            </p>

            <h2 className="mt-4 max-w-[820px] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.055em]">
              Tell us what
              <span className="block text-black/40">the site needs.</span>
            </h2>

            <p className="mt-6 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Share the location, current site condition and the work required.
              SLINE can discuss the individual civil scope or how it connects
              with the wider project.
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

function ArticleEyebrow({ children }: { children: React.ReactNode }) {
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
