export default function FloatingContact() {
  return (
    <>
      {/* Desktop */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-[2px] lg:flex">
        {/* Phone */}
        <div className="group flex h-[58px] w-[58px] justify-end overflow-hidden bg-[#d32329] shadow-lg transition-all duration-300 ease-out hover:w-[250px]">
          {/* Expanded content */}
          <div className="flex min-w-[192px] shrink-0 flex-col justify-center pl-5 pr-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">
              Mobile
            </span>

            <a
              href="tel:+64211044444"
              className="!text-[13px] !font-semibold !text-white transition-opacity hover:opacity-70"
            >
              021 104 4444
            </a>
          </div>

          {/* Phone icon */}
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
        </div>

        {/* Email */}
        <a
          href="mailto:info@sline.co.nz"
          className="group flex h-[58px] w-[58px] justify-end overflow-hidden bg-neutral-900 shadow-lg transition-all duration-300 ease-out hover:w-[300px]"
          aria-label="Email SLINE"
        >
          {/* Expanded content */}
          <div className="flex min-w-[242px] shrink-0 items-center pl-5 pr-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="whitespace-nowrap text-[13px] font-semibold !text-white">
              info@sline.co.nz
            </span>
          </div>

          {/* Email icon */}
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>
        </a>
      </div>

      {/* Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-white/10 lg:hidden">
        <a
          href="tel:+64211044444"
          className="flex h-[54px] items-center justify-center gap-2 bg-[#d32329] text-[12px] font-bold uppercase tracking-[0.1em] !text-white"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
          </svg>

          Call
        </a>

        <a
          href="mailto:info@sline.co.nz"
          className="flex h-[54px] items-center justify-center gap-2 bg-neutral-900 text-[12px] font-bold uppercase tracking-[0.1em] !text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>

          Email
        </a>
      </div>
    </>
  );
}