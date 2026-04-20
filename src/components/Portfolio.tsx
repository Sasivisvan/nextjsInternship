"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Aura E-Commerce",
    category: "Web Development",
    image: "/portfolio/ecommerce.png",
  },
  {
    title: "Finance Hub App",
    category: "UI/UX Design",
    image: "/portfolio/banking-app.png",
  },
  {
    title: "NOX Restaurant Branding",
    category: "Branding",
    image: "/portfolio/branding.png",
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "/portfolio/social-media.png",
  },
  {
    title: "Astra Analytics Dashboard",
    category: "Web Development",
    image: "/portfolio/dashboard.png",
  },
  {
    title: "Wanderlust Travel",
    category: "Web Development",
    image: "/portfolio/travel.png",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-background py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="reveal opacity-0 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent">
            Our Work
          </span>
          <h2 className="reveal opacity-0 delay-100 mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured projects
          </h2>
          <p className="reveal opacity-0 delay-200 mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A curated selection of our recent work across branding, UI/UX, web
            development, and marketing.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal opacity-0 delay-${(i + 1) * 100} group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-medium tracking-wider uppercase text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-bold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
