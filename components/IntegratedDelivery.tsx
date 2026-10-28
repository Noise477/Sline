import Link from "next/link";

const stages = [
  "Asbestos Removal",
  "Demolition",
  "Earthworks",
  "Public Drainage",
  "Private Drainage & Plumbing",
  "All-in-One Site Works",
];

export default function IntegratedDelivery() {
  return (
    <section className="bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#d32329]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ef4a50]">
                Full-Site Delivery
              </p>
            </div>

            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
              One site.
              <span className="block text-white/35">Connected specialist teams.</span>
            </h2>

            <p className="mt-7 max-w-[650px] text-lg leading-8 text-white/65">
              SLINE has grown beyond individual asbestos and demolition scopes.
              Where a project needs several connected stages, our specialist
              crews can carry the work forward through earthworks, drainage,
              plumbing and wider site-service delivery.
            </p>
          </div>

          <div>
            <div className="grid gap-[1px] bg-white/10 sm:grid-cols-3 xl:grid-cols-6">
              {stages.map((stage, index) => (
                <div key={stage} className="relative bg-neutral-950 px-4 py-7">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-[#d32329]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-[12px] font-black uppercase leading-5 tracking-[0.05em] text-white">
                    {stage}
                  </p>
                  {index < stages.length - 1 && (
                    <span className="absolute -right-[8px] top-1/2 z-10 hidden -translate-y-1/2 text-[#d32329] xl:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
              <p className="max-w-[650px] text-sm leading-7 text-white/45">
                197 Stoddard Road demonstrates this wider capability, with
                SLINE responsible for asbestos removal, demolition, earthworks,
                public drainage, private drainage & plumbing and All-in-One
                site works within the same project.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/projects/197-stoddard-road"
                  className="text-xs font-bold uppercase tracking-[0.14em] !text-white"
                >
                  View Project <span className="ml-3 text-[#d32329]">→</span>
                </Link>

                <Link
                  href="/civil/all-in-one"
                  className="text-xs font-bold uppercase tracking-[0.14em] !text-white"
                >
                  All-in-One <span className="ml-3 text-[#d32329]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
