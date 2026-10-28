"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/hero/sline-hero.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-2.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-3.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-4.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-5.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-6.jpg",
    alt: "",
  },
  {
    src: "/images/hero/sline-hero-7.jpg",
    alt: "",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === heroImages.length - 1 ? 0 : current + 1
    );
  };

  // Auto change every 6 seconds.
  // Manual navigation also resets the 6 second timer.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-neutral-950">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center grayscale-[28%] brightness-[0.94] contrast-[1.08] saturate-[1.2] transition-opacity duration-[1200ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Local darkening around text only */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_48%,rgba(0,0,0,0.46)_0%,rgba(0,0,0,0.24)_30%,rgba(0,0,0,0.07)_52%,transparent_72%)]" />

      {/* Invisible previous-slide area */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous hero image"
        className="absolute bottom-20 left-0 top-24 z-30 hidden w-14 cursor-w-resize bg-transparent sm:block lg:w-20"
      />

      {/* Invisible next-slide area */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next hero image"
        className="absolute bottom-20 right-0 top-24 z-30 hidden w-14 cursor-e-resize bg-transparent sm:block lg:w-20"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="max-w-[830px] lg:pr-[280px] xl:pr-0">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#d32329]" />

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
              SLINE Demolition Ltd
            </p>
          </div>

          <h1 className="max-w-[900px] text-[clamp(3rem,6.3vw,6.7rem)] font-black uppercase leading-[0.89] tracking-[-0.055em] text-white">
            From demolition
            <span className="block text-[#d32329]">
              to full-site delivery.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-white/90 sm:text-2xl sm:leading-9">
            Asbestos removal, demolition, earthworks, public drainage, private drainage & plumbing and All-in-One site services across Auckland and beyond.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Services */}
            <a
              href="#services"
              className="group inline-flex h-12 items-center justify-center bg-[#d32329] px-6 text-sm font-bold uppercase tracking-[0.08em] !text-white shadow-[0_6px_20px_rgba(211,35,41,0.20)] transition-all duration-200 ease-out hover:scale-[1.05] hover:bg-[#b91f25] hover:shadow-[0_10px_30px_rgba(211,35,41,0.36)]"
            >
              Explore Our Services

              <span className="ml-4 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Projects */}
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center border border-white/35 bg-white/10 px-6 text-sm font-semibold uppercase tracking-[0.08em] !text-white backdrop-blur-sm transition-all duration-200 ease-out hover:scale-[1.05] hover:border-white hover:bg-white hover:!text-black hover:shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 right-0 z-20 hidden border-l border-t border-white/15 bg-black/15 backdrop-blur-md lg:grid lg:grid-cols-3">
        <HeroStat value="2018" label="Established" />
        <HeroStat value="NZ" label="Project Capability" />
        <HeroStat value="Class A & B" label="Asbestos Removal" />
      </div>
    </section>
  );
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="min-w-[170px] border-r border-white/15 px-6 py-4 last:border-r-0">
      <strong className="block whitespace-nowrap text-2xl font-extrabold tracking-tight text-white">
        {value}
      </strong>

      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
        {label}
      </span>
    </div>
  );
}