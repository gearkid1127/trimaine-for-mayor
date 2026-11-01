import Image from "next/image";
import type { ReactNode } from "react";

const priorities = [
  {
    icon: "finances",
    title: "Responsible Village Finances",
    description:
      "I'll push for clear public reporting, careful review of spending, and long-term planning. We should look for savings, grants, and sustainable revenue while protecting essential services—not make promises before examining the numbers.",
  },
  {
    icon: "airplane",
    title: "O'Hare Flyer",
    description:
      "I do not support moving forward with the proposal at this time. Residents deserve independent studies, full public information, and clear answers about costs and community impacts before the village considers any commitment.",
  },
  {
    icon: "shield",
    title: "Professional, Accountable Policing",
    description:
      "I'll work to review department policies, training, and complaint procedures so officers have the guidance and support to follow the law, serve the public, and reduce preventable harm and legal risk. I also believe in stronger support for our police and families.",
  },
  {
    icon: "business",
    title: "Local Businesses & Opportunities",
    description:
      "I'll work with business owners to identify what's getting in the way of success, make village processes easier to navigate, and explore practical ways to support storefronts, local hiring, and neighborhood commerce. Quality jobs, stronger schools, and brighter futures are part of that vision.",
  },
  {
    icon: "infrastructure",
    title: "Stronger Infrastructure",
    description:
      "Improved roads, modern facilities, and responsible investments in the infrastructure our community relies on. A stronger Forest Park starts with taking care of the village we share.",
  },
  {
    icon: "environment",
    title: "A Cleaner, Greener Forest Park",
    description:
      "Beautifying our community, supporting sustainability, and investing in our neighborhoods to make Forest Park a cleaner, greener, and more welcoming place for everyone.",
  },
];

const photos = [
  "/images/campaign-image-4.jpg",
  "/images/campaign-image-5.jpg",
  "/images/campaign-image-6.jpg",
];

function PriorityIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    finances: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
        <path d="M4 21h16" />
      </>
    ),
    airplane: (
      <>
        <path d="M22 2L9 15" />
        <path d="M22 2l-7 20-4-9-9-4z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    business: (
      <>
        <path d="M3 10h18l-2-6H5z" />
        <path d="M5 10v11h14V10" />
        <path d="M9 21v-7h6v7" />
        <path d="M3 10c0 2 3 3 4.5 1 1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0 1.5 2 4.5 1 4.5-1" />
      </>
    ),
    infrastructure: (
      <>
        <path d="M3 21L10 3h4l7 18" />
        <path d="M12 3v4" />
        <path d="M12 11v3" />
        <path d="M12 18v3" />
        <path d="M3 21h18" />
      </>
    ),
    environment: (
      <>
        <path d="M12 22v-9" />
        <path d="M12 13C5 13 3 8 4 3c6 0 8 3 8 10z" />
        <path d="M12 16c0-7 3-11 9-11 0 6-2 11-9 11z" />
        <path d="M7 22h10" />
      </>
    ),
  };

  return (
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f8e8b7]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#071d3c"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071d3c] text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a
            href="#home"
            className="text-lg font-black tracking-tight sm:text-xl"
          >
            TRIMAINE <span className="text-[#eac15b]">WILSON</span>
          </a>

          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#about" className="hover:text-[#eac15b]">
              About
            </a>
            <a href="#priorities" className="hover:text-[#eac15b]">
              Priorities
            </a>
            <a href="#community" className="hover:text-[#eac15b]">
              Community
            </a>
            <a href="#contact" className="hover:text-[#eac15b]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#eac15b] px-4 py-2 text-xs font-bold text-[#071d3c] transition hover:bg-white sm:px-5 sm:text-sm"
          >
            Get In Touch
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[650px] scroll-mt-24 items-center overflow-hidden bg-[#071d3c] text-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Illustrated campaign portrait of Trimaine Wilson in Forest Park"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071d3c]/90 via-[#071d3c]/40 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#eac15b] sm:text-base">
            Forest Park, Illinois
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl md:text-8xl">
            TRIMAINE
            <br />
            <span className="text-[#eac15b]">WILSON</span>
          </h1>

          <p className="mt-5 text-2xl font-bold md:text-3xl">FOR MAYOR</p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
            Rooted in community. Committed to service. Building a stronger
            Forest Park through accountability, compassion, and hard work.
          </p>

          <a
            href="#about"
            className="mt-9 inline-block rounded-full bg-[#eac15b] px-8 py-4 font-bold text-[#071d3c] transition hover:bg-white"
          >
            Meet Trimaine
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-[#b48a29]">
              Meet Trimaine
            </p>

            <h2 className="mb-7 text-4xl font-black text-[#071d3c] md:text-5xl">
              Rooted in Forest Park.
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Forest Park has been my home for more than 25 years. It&apos;s
                where I&apos;ve built my life, put down roots, and grown my
                business.
              </p>

              <p>
                As the owner of a Forest Park snow-plowing and landscaping
                company, I understand hard work, reliability, and serving people
                through every season.
              </p>

              <p>
                As a firearm instructor and self-defense trainer, I value
                preparation, discipline, and looking out for others.
              </p>

              <p>
                I&apos;m running for mayor because I care deeply about our
                community. My commitment is to lead with compassion, listen to
                residents, and bring the same dedication I give my business to
                serving Forest Park.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#eac15b] pl-5">
              <p className="text-lg font-bold italic text-[#071d3c]">
                Compassion. Hard Work. Listening.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#071d3c] shadow-2xl">
            <Image
              src="/images/campaign-image-3-new.png"
              alt="Trimaine Wilson for Mayor campaign graphic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <section id="priorities" className="scroll-mt-24 bg-[#f5f7fa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-[#b48a29]">
              The Vision
            </p>

            <h2 className="text-4xl font-black text-[#071d3c] md:text-5xl">
              A Stronger Forest Park
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              A financially responsible, safe, and welcoming village for
              residents and local businesses.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {priorities.map((priority) => (
              <article
                key={priority.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-lg md:p-9"
              >
                <PriorityIcon type={priority.icon} />

                <h3 className="mb-4 text-2xl font-bold text-[#071d3c]">
                  {priority.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {priority.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-center font-bold uppercase tracking-widest text-[#b48a29]">
            Community
          </p>

          <h2 className="mb-5 text-center text-4xl font-black text-[#071d3c] md:text-5xl">
            Moving Forward Together
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Building connections and working together for the future of Forest
            Park.
          </p>

          {/* 1 photo on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={photo}
                className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${
                  index === 1
                    ? "hidden sm:block"
                    : index === 2
                      ? "hidden lg:block"
                      : ""
                }`}
              >
                <Image
                  src={photo}
                  alt={`Campaign community event photo ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#071d3c] px-6 py-24 text-center text-white"
      >
        <p className="mb-4 font-bold uppercase tracking-widest text-[#eac15b]">
          Get Involved
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl font-black md:text-5xl">
          Let&apos;s Move Forest Park Forward Together.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
          Have a question or want to connect with the campaign? We&apos;d love
          to hear from you.
        </p>

        <a
          href="mailto:trimainewilson@trimaineformayor.com"
          className="mt-8 inline-block rounded-full bg-[#eac15b] px-8 py-4 font-bold text-[#071d3c] transition hover:bg-white"
        >
          Email the Campaign
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#05152c] px-6 py-8 text-center text-sm text-slate-400">
        <p className="font-bold text-white">
          TRIMAINE <span className="text-[#eac15b]">WILSON</span> FOR MAYOR
        </p>

        <p className="mt-2">Forest Park, Illinois</p>
      </footer>
    </main>
  );
}
