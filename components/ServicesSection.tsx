import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Asbestos",
    description:
      "Class A & B asbestos removal together with contamination remediation and hazardous-material services.",
    details: [
      "Class A & B",
      "Contaminated Soil",
      "Remediation",
    ],
    href: "/asbestos",
    image: "/images/services/asbestos.jpg",
  },
  {
    number: "02",
    title: "Demolition",
    description:
      "Residential and commercial demolition, strip-outs, controlled removal and site clearance coordinated around the wider project programme.",
    details: [
      "Demolition",
      "Strip-outs",
      "Site Clearance",
    ],
    href: "/demolition",
    image: "/images/services/demolition.jpg",
  },
  {
    number: "03",
    title: "Civil",
    description:
      "Earthworks, public drainage, private drainage & plumbing and All-in-One site services supporting redevelopment and site preparation.",
    details: [
      "Earthworks",
      "Public Drainage",
      "Private Drainage & Plumbing",
      "All-in-One",
    ],
    href: "/civil",
    image: "/images/services/civil.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[#f3f3f1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#d32329]" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d32329]">
                What We Do
              </p>
            </div>

            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-neutral-900">
              Built around
              <span className="block text-neutral-400">
                project delivery.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-7 text-neutral-500 md:text-right">
            Specialist capability across asbestos, demolition and civil works,
            with dedicated services for earthworks, public drainage, private
            drainage & plumbing and All-in-One site delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative min-h-[560px] overflow-hidden bg-neutral-900"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/20" />

              {/* Number */}
              <span className="absolute right-6 top-6 text-xs font-bold tracking-[0.18em] text-white/55">
                {service.number}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <h3 className="max-w-[420px] text-[34px] font-black uppercase leading-[0.96] tracking-[-0.04em] !text-white sm:text-[40px]">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-[420px] text-[15px] leading-6 text-white/70">
                  {service.description}
                </p>

                {/* Details */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="border border-white/20 bg-black/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] !text-white backdrop-blur-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Explore */}
                <div className="mt-7 flex items-center text-xs font-bold uppercase tracking-[0.12em] !text-white">
                  Explore

                  <span className="ml-3 text-[#ef4444] transition-transform duration-200 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>

              {/* Red hover accent */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#d32329] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}