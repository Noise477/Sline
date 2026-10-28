import Image from "next/image";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  accentTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  accentTitle,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[64svh] overflow-hidden bg-neutral-950 pt-24 text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale-[8%] brightness-[0.68] contrast-[1.08]"
        style={{ objectPosition: imagePosition }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.48)_43%,rgba(0,0,0,0.08)_78%,transparent_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(64svh-6rem)] max-w-[1540px] items-end px-5 pb-14 sm:px-8 lg:px-12 lg:pb-16">
        <div className="max-w-[980px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[3px] w-11 bg-[#d32329]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
              {eyebrow}
            </p>
          </div>

          <h1 className="text-[clamp(3.6rem,7.6vw,7.6rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
            {title}

            <span className="block text-[#d32329]">
              {accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-[760px] text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[4px] bg-[#d32329]" />
    </section>
  );
}