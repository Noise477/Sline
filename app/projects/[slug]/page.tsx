import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type ProjectImages = {
  hero: string;
  heroAlt: string;
  inline: string;
  inlineAlt: string;
};

const projectImages: Record<string, ProjectImages> = {
  "197-stoddard-road": {
    hero: "/images/projects/197-stoddard-road/hero-public-drainage-night.jpg",
    heroAlt: "SLINE public drainage night works",
    inline: "/images/projects/197-stoddard-road/traffic-management-nightworks.jpg",
    inlineAlt: "SLINE traffic management and public drainage night works",
  },
  "59-galway-street": {
    hero: "/images/projects/59-galway-street/hero-fire-damaged-site.jpg",
    heroAlt: "SLINE fire-damaged commercial project site",
    inline: "/images/projects/59-galway-street/fire-damaged-site-workers.jpg",
    inlineAlt: "SLINE workers operating within a controlled damaged site",
  },
  "education-sector": {
    hero: "/images/projects/education-sector/hero-school-asbestos-site.jpg",
    heroAlt: "SLINE asbestos project at an education facility",
    inline: "/images/projects/education-sector/school-asbestos-roof-removal.jpg",
    inlineAlt: "SLINE asbestos roof removal in a managed site environment",
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: `${project.title} | Projects`,
    description: `${project.category} at ${project.location}. ${project.services.join(", ")}.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const images = projectImages[project.slug] ?? projectImages["197-stoddard-road"];

  return (
    <>
      <Header />

      <main className="bg-white">
        <article>
          <header className="px-5 pb-10 pt-36 sm:px-8 lg:px-12 lg:pb-12 lg:pt-44">
            <div className="mx-auto max-w-[920px]">
              <Link
                href="/projects"
                className="text-[11px] font-black uppercase tracking-[0.14em] text-neutral-400 transition-colors hover:text-[#d32329]"
              >
                ← Our Projects
              </Link>

              <p className="mt-9 text-[10px] font-black uppercase tracking-[0.18em] text-[#d32329]">
                {project.featuredLabel}
              </p>

              <h1 className="mt-4 text-[clamp(3.25rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.058em] text-neutral-900">
                {project.title}
              </h1>

              <p className="mt-5 text-sm font-bold uppercase leading-7 tracking-[0.07em] text-neutral-400 sm:text-base">
                {project.location} · {project.category}
              </p>

              <p className="mt-4 text-xs font-semibold uppercase leading-6 tracking-[0.08em] text-neutral-400">
                {project.services.join(" · ")}
              </p>
            </div>
          </header>

          <figure className="mx-auto max-w-[1180px] px-0 sm:px-8 lg:px-12">
            <div className="relative aspect-[16/8] overflow-hidden bg-neutral-200">
              <Image
                src={images.hero}
                alt={images.heroAlt}
                fill
                priority
                sizes="(min-width: 1180px) 1180px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[4px] bg-[#d32329]" />
            </div>
          </figure>

          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-[920px]">
              <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-black uppercase leading-[0.94] tracking-[-0.047em] text-neutral-900">
                {project.category}
              </h2>

              <p className="mt-7 text-lg leading-9 text-neutral-600">
                {project.intro}
              </p>

              <div className="mt-14 border-t border-neutral-200 pt-12">
                <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-[-0.042em] text-neutral-900">
                  Project Challenge
                </h2>

                <h3 className="mt-3 text-lg font-bold leading-8 text-[#c92229] sm:text-xl">
                  {project.challengeTitle}
                </h3>

                <div className="flow-root mt-7">
                  <figure className="mb-6 w-full sm:float-right sm:mb-5 sm:ml-8 sm:w-[370px] lg:w-[410px]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                      <Image
                        src={images.inline}
                        alt={images.inlineAlt}
                        fill
                        sizes="(min-width: 1024px) 410px, (min-width: 640px) 370px, 92vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                    </div>
                  </figure>

                  <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                    {project.challenge.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {project.delivery && project.deliveryTitle ? (
                <div className="mt-14 border-t border-neutral-200 pt-12">
                  <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-[-0.042em] text-neutral-900">
                    Project Delivery
                  </h2>

                  <h3 className="mt-3 text-lg font-bold leading-8 text-[#c92229] sm:text-xl">
                    {project.deliveryTitle}
                  </h3>

                  <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                    {project.delivery.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {project.schools ? (
                    <div className="mt-8 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                      <p className="font-bold text-neutral-900">
                        Education facilities include:
                      </p>
                      <p className="mt-2">{project.schools.join(" · ")}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {project.stages ? (
                <div className="mt-14 border-t border-neutral-200 pt-12">
                  <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-[-0.042em] text-neutral-900">
                    Project Stages
                  </h2>

                  <p className="mt-5 max-w-[780px] text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                    The project moved through several connected work stages,
                    with SLINE responsible for the wider sequence rather than
                    one isolated trade.
                  </p>

                  <div className="mt-10">
                    {project.stages.map((stage, index) => (
                      <section
                        key={stage.title}
                        className="border-t border-neutral-200 py-9 first:border-t-0 first:pt-0"
                      >
                        <div className="flow-root">
                          <figure
                            className={`mb-6 w-full sm:mb-5 sm:w-[360px] lg:w-[410px] ${
                              index % 2 === 0
                                ? "sm:float-right sm:ml-8"
                                : "sm:float-left sm:mr-8"
                            }`}
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                              <Image
                                src={stage.image}
                                alt={stage.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 410px, (min-width: 640px) 360px, 92vw"
                                className="object-cover"
                              />
                              <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                            </div>
                          </figure>

                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#d32329]">
                            Stage {String(index + 1).padStart(2, "0")}
                          </p>

                          <h3 className="mt-3 text-[clamp(1.65rem,3vw,2.5rem)] font-black uppercase leading-[0.96] tracking-[-0.04em] text-neutral-900">
                            {stage.title}
                          </h3>

                          <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                            {stage.description}
                          </p>
                        </div>
                      </section>
                    ))}
                  </div>

                  {project.slug === "197-stoddard-road" ? (
                    <div className="mt-3 border-l-[3px] border-[#d32329] pl-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                        All-in-One Scope
                      </p>
                      <p className="mt-3 text-lg font-black uppercase leading-8 tracking-[-0.03em] text-neutral-900 sm:text-xl">
                        Public drainage · Private drainage & plumbing ·
                        associated site-service works
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-14 border-t border-neutral-200 pt-12">
                <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-[-0.042em] text-neutral-900">
                  Project Outcome
                </h2>

                <div className="mt-7 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                  {project.outcome.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-14 border-t border-neutral-200 pt-7">
                <Link
                  href="/projects"
                  className="inline-block border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:text-[#d32329]"
                >
                  Back to Our Projects
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
