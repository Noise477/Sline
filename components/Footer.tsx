import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Asbestos", href: "/asbestos" },
  { label: "Demolition", href: "/demolition" },
  { label: "Civil", href: "/civil" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Asbestos", href: "/asbestos" },
  { label: "Demolition", href: "/demolition" },
  { label: "Civil Overview", href: "/civil" },
  { label: "Earthworks", href: "/civil/earthworks" },
  { label: "Public Drainage", href: "/civil/public-drainage" },
  {
    label: "Private Drainage & Plumbing",
    href: "/civil/private-drainage-plumbing",
  },
  { label: "All-in-One", href: "/civil/all-in-one" },
];

const credentials = [
  {
    name: "NZDAA Member",
    src: "/images/partners/nzdaa.png",
    width: 212,
    height: 210,
    className: "w-[82px] sm:w-[92px]",
  },
  {
    name: "ISO 45001 - Southpac Certifications",
    src: "/images/partners/iso-45001-southpac.png",
    width: 202,
    height: 200,
    className: "w-[82px] sm:w-[92px]",
    href: "/certificates/sline-iso-45001-certificate.pdf",
    linkLabel: "View certificate",
  },
  {
    name: "Site Safe Member",
    src: "/images/partners/site-safe-member.png",
    width: 162,
    height: 210,
    className: "w-[70px] sm:w-[80px]",
  },
  {
    name: "Tōtika Supplier Listing",
    src: "/images/partners/totika.png",
    width: 1059,
    height: 264,
    className: "w-[118px] sm:w-[138px]",
    href: "/certificates/sline-totika-certificate.pdf",
    linkLabel: "View certificate",
  },
];

const partners = [
  {
    name: "Beacon Safety",
    src: "/images/partners/beacon-safety.svg",
    width: 300,
    height: 110,
    className: "w-[118px] sm:w-[132px]",
  },
  {
    name: "Waste Management",
    src: "/images/partners/waste-management.svg",
    width: 173,
    height: 42,
    className: "w-[120px] sm:w-[138px]",
  },
  {
    name: "DAL",
    src: "/images/partners/dal.png",
    width: 290,
    height: 140,
    className: "w-[122px] sm:w-[136px]",
  },
  {
    name: "Green Gorilla",
    src: "/images/partners/green-gorilla.png",
    width: 446,
    height: 226,
    className: "w-[132px] sm:w-[148px]",
  },
  {
    name: "Rock and Rubble",
    src: "/images/partners/rock-and-rubble.png",
    width: 302,
    height: 184,
    className: "w-[122px] sm:w-[138px]",
  },
  {
    name: "Passive Safety Group",
    src: "/images/partners/passive-safety-group.png",
    width: 269,
    height: 100,
    className: "w-[145px] sm:w-[162px]",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Certifications, memberships and industry partners */}
      <div className="bg-white px-5 text-[#111111] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px] border-t border-neutral-200">
          <FooterLogoRow
            eyebrow="Certifications & Memberships"
            description="Current industry memberships and management-system certification."
            items={credentials}
            columns="lg:grid-cols-4"
            imageHeight="max-h-[82px]"
          />

          <div className="border-t border-neutral-200" />

          <FooterLogoRow
            eyebrow="Industry Partners"
            description="Working alongside established suppliers and specialist partners."
            items={partners}
            columns="lg:grid-cols-6"
            imageHeight="max-h-[60px]"
          />
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          {/* Main */}
          <div className="grid gap-14 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.65fr_0.65fr_0.85fr] lg:gap-16 lg:py-24">
            {/* Brand */}
            <div>
              <Link
                href="/"
                aria-label="SLINE home"
                className="relative inline-block h-[68px] w-[160px] sm:h-[78px] sm:w-[185px]"
              >
                <Image
                  src="/logo-white.svg"
                  alt="SLINE"
                  fill
                  className="object-contain object-left"
                  sizes="(min-width: 640px) 185px, 160px"
                />
              </Link>

              <p className="mt-8 max-w-[420px] text-base leading-7 text-neutral-500">
                Specialist capability across asbestos removal, demolition, earthworks, public drainage, private drainage & plumbing and All-in-One site services across Auckland and beyond.
              </p>

              <Link
                href="/request-a-quote"
                className="group mt-9 inline-flex items-center gap-5 text-xs font-bold uppercase tracking-[0.16em] text-white"
              >
                Request a Quote
                <span className="text-[#d32329] transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <FooterColumn title="Navigation">
              <nav className="flex flex-col items-start gap-3.5">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </FooterColumn>

            {/* Services */}
            <FooterColumn title="Services">
              <div className="flex flex-col items-start gap-3.5">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </FooterColumn>

            {/* Contact */}
            <FooterColumn title="Contact">
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-700">
                    Mobile
                  </p>
                  <a
                    href="tel:+64211044444"
                    className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    021 104 4444
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-700">
                    Email
                  </p>
                  <a
                    href="mailto:info@sline.co.nz"
                    className="break-all text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    info@sline.co.nz
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-700">
                    Location
                  </p>
                  <p className="text-sm leading-6 text-neutral-500">
                    66 Longhorn Drive, Flat Bush, Auckland
                  </p>
                </div>
              </div>
            </FooterColumn>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-5 py-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} SLINE Demolition Ltd</p>

            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <span>Auckland · New Zealand</span>
              <span>Asbestos · Demolition · Earthworks · Drainage · Plumbing · All-in-One</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogoRow({
  eyebrow,
  description,
  items,
  columns,
  imageHeight,
}: {
  eyebrow: string;
  description: string;
  items: Array<{
    name: string;
    src: string;
    width: number;
    height: number;
    className: string;
    href?: string;
    linkLabel?: string;
  }>;
  columns: string;
  imageHeight: string;
}) {
  return (
    <div className="flex flex-col gap-7 py-8 sm:py-9 lg:flex-row lg:items-center lg:gap-12">
      <div className="shrink-0 lg:w-[245px]">
        <div className="mb-2.5 flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#d32329]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d32329]">
            {eyebrow}
          </p>
        </div>
        <p className="max-w-[320px] text-xs leading-5 text-neutral-500">
          {description}
        </p>
      </div>

      <div
        className={`grid flex-1 grid-cols-2 items-center gap-x-7 gap-y-6 sm:grid-cols-3 ${columns} lg:gap-x-8`}
      >
        {items.map((item) => {
          const logo = (
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className={`h-auto object-contain ${imageHeight} ${item.className}`}
              sizes="(min-width: 1024px) 150px, (min-width: 640px) 145px, 130px"
            />
          );

          if (item.href) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[82px] flex-col items-center justify-center gap-2"
                aria-label={`${item.name} - ${item.linkLabel ?? "View certificate"}`}
              >
                {logo}
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-400 transition-colors duration-200 group-hover:text-[#d32329]">
                  {item.linkLabel ?? "View certificate"}
                </span>
              </a>
            );
          }

          return (
            <div
              key={item.name}
              className="flex min-h-[82px] items-center justify-center"
            >
              {logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
        {title}
      </p>
      {children}
    </div>
  );
}
