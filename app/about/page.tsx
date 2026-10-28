import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "About SLINE",
  description:
    "The SLINE story: from a three-person crew in 2018 to a specialist team delivering asbestos removal, demolition, earthworks, drainage, plumbing and All-in-One site services.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <ServiceHero
          eyebrow="Our Story"
          title="Started on site."
          accentTitle="Built from the ground up."
          description="From a three-person crew in 2018 to a specialist construction team with its own people, machinery and capability across multiple stages of the site."
          image="/images/hero/sline-hero.jpg"
          imageAlt="SLINE team member on a demolition site"
          imagePosition="center 45%"
        />

        <article className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            <ArticleEyebrow>From Three People to a Wider Team</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.7rem,4.7vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.052em] text-neutral-900">
              The business grew
              <span className="block text-[#d32329]">with the work.</span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              <p>
                SLINE Demolition Ltd started in 2018 with three people and a
                straightforward commitment: do every job properly. The early
                work centred on asbestos removal and demolition across
                residential and commercial sites.
              </p>

              <p>
                As the business grew, the team kept seeing the same challenge.
                Clients often needed more than one contractor completing one
                isolated part of a job. They needed people who understood the
                site, the sequence of work and how one trade affected the next.
              </p>

              <p>
                That experience shaped the way SLINE expanded. From asbestos
                removal and demolition, the business developed capability in
                earthworks, public drainage, private drainage & plumbing and
                All-in-One site services.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-neutral-200 py-6">
              <ArticleStat value="2018" label="Established" />
              <ArticleStat value="~15" label="Team Today" />
              <ArticleStat value="Class A & B" label="Asbestos Removal" />
            </div>

            <ArticleDivider />

            <ArticleEyebrow>People & Equipment</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Specialist crews.
              <span className="block text-[#d32329]">Our own machinery.</span>
            </h2>

            <div className="flow-root mt-7">
              <figure className="mb-6 w-full sm:float-right sm:mb-5 sm:ml-8 sm:w-[370px] lg:w-[410px]">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/hero/sline-hero-4.jpg"
                    alt="SLINE excavator working on a cleared site"
                    fill
                    sizes="(min-width: 1024px) 410px, (min-width: 640px) 370px, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                </div>
              </figure>

              <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                <p>
                  Today, SLINE has grown into a team of around 15 people with
                  experience across Class A & B asbestos removal, demolition,
                  earthworks, public drainage, private drainage & plumbing and
                  All-in-One projects.
                </p>

                <p>
                  Behind the team is a growing fleet of CAT excavators, three
                  trucks and a range of specialist machinery, tools and
                  supporting equipment for different types of site work.
                </p>

                <p>
                  Having our own people and equipment gives SLINE greater
                  control over scheduling, site coordination and the transition
                  between connected stages of a project.
                </p>
              </div>
            </div>

            <ArticleDivider />

            <ArticleEyebrow>How Our Capability Grew</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              One stage led
              <span className="block text-[#d32329]">to the next.</span>
            </h2>

            <div className="mt-8 space-y-7">
              <StoryStep
                number="01"
                title="Asbestos Removal"
                text="SLINE began with hands-on asbestos removal capability and today delivers Class A & B asbestos removal across a range of project environments."
              />
              <StoryStep
                number="02"
                title="Demolition"
                text="Demolition grew alongside asbestos work, allowing the site to move from hazardous-material removal into controlled structure removal and clearance."
              />
              <StoryStep
                number="03"
                title="Earthworks"
                text="As projects progressed beyond demolition, the team added excavation and earthworks capability to prepare the ground for the work that followed."
              />
              <StoryStep
                number="04"
                title="Public Drainage"
                text="Public stormwater and wastewater work added another specialist civil capability, including projects involving road-corridor access and traffic-management requirements."
              />
              <StoryStep
                number="05"
                title="Private Drainage & Plumbing"
                text="On-site drainage and plumbing capability allows SLINE to continue the service connection work from public infrastructure into the property."
              />
              <StoryStep
                number="06"
                title="All-in-One"
                text="For sites that need several connected civil and service stages, SLINE's All-in-One service brings those related works into one coordinated site programme."
              />
            </div>

            <ArticleDivider />

            <ArticleEyebrow>Beyond Auckland</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              Auckland based.
              <span className="block text-[#d32329]">Not Auckland only.</span>
            </h2>

            <div className="flow-root mt-7">
              <figure className="mb-6 w-full sm:float-left sm:mb-5 sm:mr-8 sm:w-[370px] lg:w-[410px]">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/civil/civil-road-corridor-nightworks.jpg"
                    alt="SLINE night works on a civil project"
                    fill
                    sizes="(min-width: 1024px) 410px, (min-width: 640px) 370px, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-[#d32329]" />
                </div>
              </figure>

              <div className="space-y-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
                <p>
                  SLINE is based in Auckland, but the work is not limited to
                  Auckland. The company has undertaken projects in Hamilton,
                  Palmerston North, Tauranga and other locations beyond its home
                  base.
                </p>

                <p>
                  For suitable projects, specialist crews, machinery, trucks
                  and equipment can be mobilised according to the scale and
                  requirements of the job.
                </p>

                <p>
                  Whether the scope is asbestos removal, demolition,
                  earthworks, drainage, plumbing or a larger All-in-One
                  project, clients outside Auckland can talk to SLINE too.
                </p>
              </div>
            </div>

            <ArticleDivider />

            <ArticleEyebrow>What SLINE Is Today</ArticleEyebrow>

            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.048em] text-neutral-900">
              One team.
              <span className="block text-[#d32329]">Multiple services.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              SLINE is still grounded in the work that built the business:
              solving real site problems and delivering the scope properly.
              The difference today is the range of specialist crews and
              equipment available to carry a site through more of its journey.
            </p>

            <p className="mt-7 text-xl font-black uppercase leading-8 tracking-[-0.03em] text-neutral-900 sm:text-2xl">
              Asbestos Removal
              <span className="mx-3 text-neutral-300">·</span>
              Demolition
              <span className="mx-3 text-neutral-300">·</span>
              Earthworks
              <span className="mx-3 text-neutral-300">·</span>
              Public Drainage
              <span className="mx-3 text-neutral-300">·</span>
              Private Drainage & Plumbing
              <span className="mx-3 text-neutral-300">·</span>
              <span className="text-[#d32329]">All-in-One</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/civil"
                className="group inline-flex min-h-[50px] items-center gap-5 bg-neutral-900 px-5 text-xs font-black uppercase tracking-[0.14em] !text-white transition-transform duration-300 hover:scale-[1.025]"
              >
                Explore Civil
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex min-h-[50px] items-center gap-5 border border-[#d32329] bg-white px-5 text-xs font-black uppercase tracking-[0.14em] !text-[#c92229] transition-colors duration-300 hover:bg-[#d32329] hover:!text-white"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>

        <section className="bg-[#d32329] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[920px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              Work With SLINE
            </p>

            <h2 className="mt-4 max-w-[820px] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.055em]">
              Tell us about
              <span className="block text-black/40">the work ahead.</span>
            </h2>

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

function StoryStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-neutral-200 py-6 last:border-b">
      <div className="flex items-baseline gap-4">
        <span className="min-w-[36px] shrink-0 text-sm font-black text-[#d32329]">
          {number}
        </span>
        <h3 className="text-lg font-black uppercase tracking-[-0.03em] text-neutral-900 sm:text-xl">
          {title}
        </h3>
      </div>
      <p className="mt-3 max-w-[800px] pl-[52px] text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
        {text}
      </p>
    </div>
  );
}
