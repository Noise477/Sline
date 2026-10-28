import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Contact SLINE",
  description:
    "Contact SLINE for asbestos, demolition, earthworks, drainage and civil project enquiries across Auckland and the North Island.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ServiceHero
          eyebrow="Contact SLINE"
          title="Get in"
          accentTitle="touch."
          description="Contact SLINE for asbestos removal, demolition, earthworks, drainage, plumbing, All-in-One or general project enquiries."
          image="/images/hero/sline-hero.jpg"
          imageAlt="SLINE project site"
          imagePosition="center"
        />

        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[920px]">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#d32329]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c92229]">
                Contact
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.6rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-neutral-900">
              Speak with
              <span className="block text-[#d32329]">
                our team.
              </span>
            </h2>

            <p className="mt-7 max-w-[720px] text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              Tell us a little about the site and the work required. We can
              discuss asbestos removal, demolition, earthworks, drainage, plumbing,
              All-in-One or a project involving several connected stages.
            </p>

            <div className="mt-12 border-t border-neutral-200">
              <ContactRow
                label="Phone"
                value="021 104 4444"
                href="tel:+64211044444"
              />

              <ContactRow
                label="Additional Phone"
                value="021 272797789"
                href="tel:021272797789"
              />

              <ContactRow
                label="Email"
                value="info@sline.co.nz"
                href="mailto:info@sline.co.nz"
              />

              <ContactRow
                label="Office Hours"
                value="Monday – Friday, 8:00 AM – 5:00 PM"
              />

              <ContactRow
                label="Address"
                value="66 Longhorn Drive, Flat Bush, Auckland"
              />
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                Connect with SLINE
              </p>

              <div className="mt-7 grid gap-10 md:grid-cols-[1fr_280px] md:items-start md:gap-14">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#c92229]">
                    Xiaohongshu / 小红书
                  </p>

                  <p className="mt-3 max-w-[520px] text-base leading-8 text-neutral-600 sm:text-lg">
                    Follow SLINE on Xiaohongshu for project updates and site content.
                  </p>

                  <a
                    href="https://xhslink.cn/m/4QEpPdqrydb"
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-5 inline-flex items-center gap-3 border-b-2 border-[#d32329] pb-1 text-xs font-black uppercase tracking-[0.12em] !text-neutral-900 transition-colors hover:!text-[#d32329]"
                  >
                    Visit Xiaohongshu
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#c92229]">
                    WeChat / 微信
                  </p>

                  <div className="mt-4 w-full max-w-[260px] overflow-hidden border border-neutral-200 bg-white">
                    <Image
                      src="/images/contact/wechat-qr.jpg"
                      alt="SLINE WeChat QR code"
                      width={888}
                      height={1125}
                      sizes="260px"
                      className="h-auto w-full"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    Scan the QR code to connect with SLINE on WeChat.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                Project Enquiries
              </p>

              <p className="mt-4 max-w-[700px] text-base leading-8 text-neutral-600 sm:text-lg">
                For a project-specific enquiry, send us the site location,
                type of work and any photos, plans or reports you already
                have.
              </p>

              <Link
                href="/request-a-quote"
                className="group mt-7 inline-flex min-h-[56px] min-w-[250px] items-center justify-between gap-8 bg-[#d32329] px-6 text-xs font-black uppercase tracking-[0.14em] !text-white transition-transform duration-300 hover:scale-[1.025]"
              >
                Request a Quote

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingContact />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-b border-neutral-200 py-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#c92229]">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-2 inline-block break-all text-xl font-black tracking-[-0.03em] !text-neutral-900 transition-colors duration-300 hover:!text-[#c92229] sm:text-2xl"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-xl font-black tracking-[-0.03em] text-neutral-900 sm:text-2xl">
          {value}
        </p>
      )}
    </div>
  );
}