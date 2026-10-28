import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import Link from "next/link";

type TemporaryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items?: string[];
};

export default function TemporaryPage({
  eyebrow,
  title,
  description,
  items = [],
}: TemporaryPageProps) {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-neutral-900">
      <Header />

      <section className="relative overflow-hidden bg-neutral-950 px-5 pb-20 pt-40 text-white md:px-8 lg:px-12 lg:pb-28 lg:pt-48">
        {/* subtle background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#d32329]/30 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ef4a50]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-[1000px] text-[48px] font-bold leading-[0.95] tracking-[-0.045em] md:text-[70px] lg:text-[88px]">
            {title}
          </h1>

          <p className="mt-7 max-w-[720px] text-[16px] leading-7 text-white/65 md:text-[18px] md:leading-8">
            {description}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d32329]">
                Page in development
              </p>

              <h2 className="mt-4 text-[34px] font-bold tracking-[-0.035em] md:text-[44px]">
                More information is coming.
              </h2>

              <p className="mt-5 max-w-[540px] leading-7 text-neutral-600">
                This page is currently being prepared as part of the new Sline
                Demolition website. Full project information, imagery and
                service details will be added before launch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center bg-neutral-900 px-6 text-[12px] font-bold uppercase tracking-[0.1em] !text-white transition-colors hover:bg-[#d32329]"
                >
                  Back to Home
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center border border-neutral-300 px-6 text-[12px] font-bold uppercase tracking-[0.1em] !text-neutral-900 transition-colors hover:border-[#d32329] hover:!text-[#d32329]"
                >
                  Contact Sline
                </Link>
              </div>
            </div>

            {items.length > 0 && (
              <div className="grid gap-[1px] overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
                {items.map((item, index) => (
                  <div
                    key={item}
                    className="min-h-[150px] bg-white p-7 transition-colors duration-200 hover:bg-neutral-50"
                  >
                    <span className="text-[11px] font-bold tracking-[0.14em] text-[#d32329]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-7 text-[20px] font-semibold tracking-[-0.02em]">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}