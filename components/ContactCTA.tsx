import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#d32329] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      {/* subtle oversized brand letter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] right-[-0.03em] select-none text-[clamp(10rem,22vw,27rem)] font-black leading-none tracking-[-0.09em] text-black/[0.045]"
      >
        S
      </div>

      <div className="relative mx-auto max-w-[1540px]">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          {/* Main message */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-white" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                Start a Project
              </p>
            </div>

            <h2 className="max-w-[900px] text-[clamp(3rem,5.8vw,6.4rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              One site.
              <span className="block text-black/40">
                More capability.
              </span>
            </h2>

            <p className="mt-7 max-w-[760px] text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              From asbestos removal and demolition through to earthworks,
              public drainage, private drainage & plumbing and All-in-One site
              works, SLINE can carry connected stages through one experienced
              wider team.
            </p>
          </div>

          {/* CTA */}
          <div className="lg:pb-1">
            <p className="max-w-[590px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Based in Auckland and able to mobilise beyond Auckland, we
              work across residential, commercial, industrial and public
              environments with a focus on safe, practical delivery.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[60px] min-w-[270px] items-center justify-between gap-8 bg-white px-7 text-sm font-black uppercase tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="!text-black">
                  Request a Quote
                </span>

                <span className="text-xl !text-[#d32329] transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border-b border-white/35 pb-2 text-xs font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:border-white"
              >
                Contact SLINE

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}