import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceHero from "@/components/ServiceHero";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected SLINE projects across asbestos removal, demolition, earthworks, public drainage and civil works.",
};

const projectGroups = [
  {
    title: "Full-Service & All-in-One",
    slugs: ["197-stoddard-road"],
  },
  {
    title: "Asbestos & Remediation",
    slugs: ["59-galway-street", "education-sector"],
  },
];

const projectImages: Record<string, { src: string; alt: string }> = {
  "197-stoddard-road": {
    src: "/images/projects/197-stoddard-road/hero-public-drainage-night.jpg",
    alt: "SLINE public drainage night works",
  },
  "59-galway-street": {
    src: "/images/projects/59-galway-street/hero-fire-damaged-site.jpg",
    alt: "SLINE fire-damaged commercial project site",
  },
  "education-sector": {
    src: "/images/projects/education-sector/hero-school-asbestos-site.jpg",
    alt: "SLINE asbestos work in an education environment",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <ServiceHero
          eyebrow="Selected Project Experience"
          title="Our"
          accentTitle="projects."
          description="Selected SLINE work across asbestos removal, demolition, earthworks, drainage, plumbing and full-service site delivery."
          image="/images/hero/sline-hero.jpg"
          imageAlt="SLINE project delivery"
          imagePosition="center"
        />

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1040px]">
            {projectGroups.map((group, groupIndex) => (
              <section
                key={group.title}
                className={groupIndex === 0 ? "mt-8" : "mt-20"}
              >
                <h2 className="border-b border-neutral-300 pb-4 text-[clamp(1.65rem,3vw,2.5rem)] font-black uppercase tracking-[-0.035em] text-neutral-900">
                  {group.title}
                </h2>

                <div>
                  {group.slugs.map((slug) => {
                    const project = getProject(slug);
                    const image = projectImages[slug];

                    if (!project || !image) {
                      return null;
                    }

                    return (
                      <article
                        key={project.slug}
                        className="border-b border-neutral-200 py-10 sm:py-12"
                      >
                        <div className="flow-root">
                          <figure className="mb-6 w-full sm:float-right sm:mb-5 sm:ml-8 sm:w-[360px] lg:w-[410px]">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="group block"
                            >
                              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  sizes="(min-width: 1024px) 410px, (min-width: 640px) 360px, 92vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                                />
                                <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                              </div>
                            </Link>
                          </figure>

                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#d32329]">
                            {project.featuredLabel}
                          </p>

                          <h3 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.047em] text-neutral-900">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="transition-colors hover:text-[#d32329]"
                            >
                              {project.title}
                            </Link>
                          </h3>

                          <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-neutral-400">
                            {project.location} · {project.category}
                          </p>

                          <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                            {project.intro}
                          </p>

                          <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.08em] text-neutral-400">
                            {project.services.join(" · ")}
                          </p>

                          <Link
                            href={`/projects/${project.slug}`}
                            className="mt-6 inline-block border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:text-[#d32329]"
                          >
                            Read more here
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
