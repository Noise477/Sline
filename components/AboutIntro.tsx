import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white px-5 py-20 text-neutral-900 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#d32329]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d32329]">
              About SLINE
            </p>
          </div>

          <h2 className="text-[clamp(2.6rem,4.5vw,5rem)] font-black uppercase leading-[0.94] tracking-[-0.05em]">
            Started on site.
            <span className="block text-[#d32329]">
              Built from there.
            </span>
          </h2>
        </div>

        <div className="flex flex-col justify-end lg:pb-1">
          <p className="max-w-[790px] text-xl leading-8 text-neutral-700 sm:text-2xl sm:leading-9">
            SLINE started in 2018 as a three-person crew focused on asbestos
            removal and demolition. Today, the business has grown into a
            specialist construction team with capability across earthworks,
            public drainage, private drainage & plumbing and All-in-One site
            services.
          </p>

          <div className="mt-7 max-w-[760px] space-y-5 text-base leading-7 text-neutral-500">
            <p>
              Our growth has come from doing the work ourselves, adding
              specialist crews, investing in our own machinery and learning how
              the different stages of a site need to connect.
            </p>

            <p>
              Based in Auckland, SLINE can also mobilise teams and equipment for
              projects beyond Auckland when the scale and scope require it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-6">
            <SmallFact value="2018" label="Established" />
            <SmallFact value="~15" label="Team" />
            <SmallFact value="Class A & B" label="Asbestos Removal" />
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex w-fit items-center text-sm font-bold uppercase tracking-[0.1em] !text-neutral-900"
          >
            Our Story

            <span className="ml-3 text-[#d32329] transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SmallFact({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-black tracking-[-0.04em] text-[#d32329]">
        {value}
      </span>

      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-neutral-400">
        {label}
      </span>
    </div>
  );
}
