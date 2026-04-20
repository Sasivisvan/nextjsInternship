"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-500 to-blue-600 animate-gradient" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 blur-3xl animate-float delay-600" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="reveal opacity-0 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </span>
        </div>

        <h1 className="reveal opacity-0 delay-100 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We craft digital{" "}
          <span className="relative">
            <span className="relative z-10">experiences</span>
            <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-white/20 rounded-sm md:h-4" />
          </span>{" "}
          that inspire
        </h1>

        <p className="reveal opacity-0 delay-200 mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Prisma Studio is a full-service design agency specializing in UI/UX,
          web development, branding, and digital marketing. We turn bold ideas
          into beautiful realities.
        </p>

        <div className="reveal opacity-0 delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            id="cta-get-started"
            href="#contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-purple-700 shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:bg-gray-50"
          >
            Get Started
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </a>
          <a
            id="cta-view-work"
            href="#portfolio"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 delay-400 mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "150+", label: "Projects" },
            { value: "50+", label: "Clients" },
            { value: "5+", label: "Years" },
            { value: "99%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/50 tracking-widest uppercase">
          Scroll
        </span>
        <div className="h-8 w-5 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
