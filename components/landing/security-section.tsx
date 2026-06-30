"use client";

import { useEffect, useState, useRef } from "react";

const experience = [
  {
    number: "01",
    role: "Video Editor",
    company: "Creative Cell",
    period: "2024 — Now",
    description: "Full-time video editing across brand content, social media, and motion projects.",
    stat: { value: "2024", label: "to present" },
  },
  {
    number: "02",
    role: "Video Editing (Intern)",
    company: "MetaUpSpace",
    period: "Jan 2026 — March 2026",
    description: "Internship focused on SaaS product videos and animated explainers.",
    stat: { value: "3mo", label: "internship" },
  },
  {
    number: "03",
    role: "Video Editing (Intern)",
    company: "Next2Campus",
    period: "Jan 2025 — Nov 2025",
    description: "Edited campus and creator content — building speed, consistency, and client trust.",
    stat: { value: "11mo", label: "internship" },
  },
];

const BG_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png";

function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: (seed * 127.1) % 1,
        by: (seed * 311.7) % 1,
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);
        const x = p.bx * w + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = p.by * h + flowY + influence * Math.sin(time + p.phase) * 36;
        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % experience.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = experience[activeItem];

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Smooth fade from section above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span
                className={`inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6 transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="w-12 h-px bg-white/20" />
                Experience
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] text-white transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Where I&apos;ve
                <br />
                <span className="text-white/40">worked.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-xl text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                From internships to full-time roles — building skills in video editing, animation, and motion design.
              </p>
            </div>
          </div>
        </div>

        {/* Single card — image is full-bleed behind everything, no split columns */}
        <div
          className={`relative min-h-[520px] lg:min-h-[580px] overflow-hidden border border-white/10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Background image — scaled up to kill edge gaps */}
          <div className="absolute inset-0 overflow-hidden bg-black">
            <img
              src={BG_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ transform: "scaleX(-1) scale(1.35)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,black_35%,rgba(0,0,0,0.6)_55%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content sits on top — same bg shows through on the right */}
          <div className="relative z-10 grid lg:grid-cols-2 min-h-[520px] lg:min-h-[580px]">
            <div className="relative p-8 lg:p-12 flex flex-col justify-between">
              <ParticleVisualization />

              <div key={activeItem} className="relative z-10 animate-fadeIn">
                <div>
                  <span className="font-mono text-sm text-white/40">{current.number}</span>
                  <h3 className="text-3xl lg:text-4xl font-display mt-4 mb-2 text-white">
                    {current.role}
                  </h3>
                  <p className="text-lg text-[#eca8d6] font-display mb-1">{current.company}</p>
                  <p className="font-mono text-sm text-white/40 mb-6">{current.period}</p>
                  <p className="text-lg text-white/60 leading-relaxed max-w-md">
                    {current.description}
                  </p>
                </div>

                <div className="mt-10">
                  <span className="text-5xl lg:text-6xl font-display text-white">{current.stat.value}</span>
                  <span className="block text-sm text-white/40 font-mono mt-2">{current.stat.label}</span>
                </div>
              </div>
            </div>

            {/* Right side — image visible through gradient, no second panel */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>

        {/* Tabs */}
        <div
          className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {experience.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActiveItem(index)}
              className={`text-left p-5 border transition-all duration-300 ${
                activeItem === index
                  ? "border-white/30 bg-white/[0.04]"
                  : "border-white/10 bg-black hover:border-white/20"
              }`}
            >
              <span className="font-mono text-xs text-white/40 block mb-2">
                {item.number} — {item.period}
              </span>
              <span className="font-medium block text-sm text-white">{item.role}</span>
              <span className="text-xs text-white/40">{item.company}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
