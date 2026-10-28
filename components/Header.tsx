"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Asbestos", href: "/asbestos" },
  { name: "Demolition", href: "/demolition" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const civilNavigation = [
  { name: "Civil Overview", href: "/civil" },
  { name: "Earthworks", href: "/civil/earthworks" },
  { name: "Public Drainage", href: "/civil/public-drainage" },
  {
    name: "Private Drainage & Plumbing",
    href: "/civil/private-drainage-plumbing",
  },
  { name: "All-in-One", href: "/civil/all-in-one" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [civilOpen, setCivilOpen] = useState(false);
  const [mobileCivilOpen, setMobileCivilOpen] = useState(false);

  const forceSolidHeader = pathname.startsWith("/projects/");
  const solidHeader = scrolled || forceSolidHeader;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderDesktopLink = (item: { name: string; href: string }) => (
    <Link
      key={item.name}
      href={item.href}
      className="nav-link group relative py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 hover:-translate-y-[1px]"
    >
      <span className="relative z-10 transition-colors duration-200 group-hover:text-[#ff5a5f]">
        {item.name}
      </span>

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d32329] transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );

  return (
    <>
      <header
        className={`sline-header fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          solidHeader ? "header-scrolled" : "header-top"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            solidHeader
              ? "border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-xl"
              : "border-b border-white/15 bg-black/15 backdrop-blur-lg"
          }`}
        >
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:h-[78px] lg:px-12">
            <Link
              href="/"
              className="relative block h-[40px] w-[175px] lg:h-[45px] lg:w-[195px]"
              aria-label="SLINE Home"
            >
              <Image
                src={solidHeader ? "/logo-dark.svg" : "/logo-white.svg"}
                alt="SLINE"
                fill
                priority
                className="object-contain object-left"
                sizes="200px"
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.slice(0, 4).map(renderDesktopLink)}

              <div
                className="relative"
                onMouseEnter={() => setCivilOpen(true)}
                onMouseLeave={() => setCivilOpen(false)}
                onFocus={() => setCivilOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setCivilOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={civilOpen}
                  aria-controls="civil-desktop-menu"
                  onClick={() => setCivilOpen((value) => !value)}
                  className="nav-link group relative flex items-center gap-1.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 hover:-translate-y-[1px]"
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-[#ff5a5f]">
                    Civil
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-[10px] transition-transform duration-200 ${
                      civilOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d32329] transition-all duration-300 ease-out group-hover:w-full" />
                </button>

                {civilOpen && (
                  <div
                    id="civil-desktop-menu"
                    className="absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-3"
                  >
                    <div className="border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
                      {civilNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setCivilOpen(false)}
                          className="civil-dropdown-link group flex items-center justify-between border-b border-black/5 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.07em] last:border-b-0"
                        >
                          <span>{item.name}</span>
                          <span className="text-[#d32329] transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navigation.slice(4).map(renderDesktopLink)}

              <Link
                href="/request-a-quote"
                className="quote-button ml-2 inline-flex h-[44px] items-center justify-center bg-[#d32329] px-6 text-[12px] font-bold uppercase tracking-[0.09em] !text-white shadow-[0_6px_20px_rgba(211,35,41,0.20)] transition-all duration-200 ease-out hover:scale-[1.05] hover:bg-[#b91f25] hover:shadow-[0_10px_30px_rgba(211,35,41,0.36)]"
              >
                Request a Quote
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => {
                setMenuOpen((value) => !value);
                setMobileCivilOpen(false);
              }}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="menu-line block h-[2px] w-6 transition-all" />
              <span className="menu-line block h-[2px] w-6 transition-all" />
              <span className="menu-line block h-[2px] w-6 transition-all" />
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-black/10 bg-white px-5 py-5 shadow-xl lg:hidden">
              <nav className="flex flex-col">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-link border-b border-black/10 py-4 text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-b border-black/10">
                  <button
                    type="button"
                    aria-expanded={mobileCivilOpen}
                    onClick={() => setMobileCivilOpen((value) => !value)}
                    className="mobile-nav-link flex w-full items-center justify-between py-4 text-left text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    <span>Civil</span>
                    <span
                      aria-hidden="true"
                      className={`text-[11px] transition-transform duration-200 ${
                        mobileCivilOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {mobileCivilOpen && (
                    <div className="border-t border-black/5 bg-neutral-50 px-3 py-2">
                      {civilNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileCivilOpen(false);
                          }}
                          className="mobile-civil-link flex items-center justify-between border-b border-black/5 px-2 py-3 text-[11px] font-semibold uppercase tracking-[0.07em] last:border-b-0"
                        >
                          <span>{item.name}</span>
                          <span className="text-[#d32329]">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navigation.slice(4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-link border-b border-black/10 py-4 text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/request-a-quote"
                  onClick={() => setMenuOpen(false)}
                  className="mobile-quote mt-5 flex h-12 items-center justify-center bg-[#d32329] text-[13px] font-bold uppercase tracking-[0.08em]"
                >
                  Request a Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <style jsx global>{`
        .sline-header.header-top .nav-link {
          color: #ffffff !important;
        }

        .sline-header.header-scrolled .nav-link {
          color: #171717 !important;
        }

        .sline-header .quote-button {
          color: #ffffff !important;
        }

        .sline-header.header-top .menu-line {
          background-color: #ffffff !important;
        }

        .sline-header.header-scrolled .menu-line {
          background-color: #171717 !important;
        }

        .sline-header .mobile-nav-link,
        .sline-header .mobile-civil-link,
        .sline-header .civil-dropdown-link {
          color: #171717 !important;
        }

        .sline-header .quote-button,
        .sline-header .mobile-quote {
          color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
