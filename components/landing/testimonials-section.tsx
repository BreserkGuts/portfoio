"use client";

import { useEffect, useState, useRef } from "react";

const BANNER_IMAGE = "/images/whale.png";

const testimonials = [
  {
    quote:
      "One of the most productive Editors of our club. Always delivered whenever we expected Aviral to deliver.",
    author: "Creative Cell",
    role: "Official Club of KIET Deemed to be University",
    avatar: "CC",
    avatarStyle: "from-sky-500/30 to-blue-900/40",
  },
  {
    quote: "Great Motion Designer. Given some really good animation.",
    author: "Jayant",
    role: "Founder of Clipartca",
    avatar: "J",
    avatarStyle: "from-[#eca8d6]/40 to-purple-900/40",
  },
  {
    quote:
      "Never missed a single deadline. One of the most reliable editors I have worked with.",
    author: "Sumit Mishra",
    role: "Next2Campus",
    avatar: "S",
    avatarStyle: "from-emerald-500/30 to-teal-900/40",
  },
];

function TestimonialCard({
  item,
  index,
  isVisible,
}: {
  item: (typeof testimonials)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150 + 100}ms` }}
    >
      <div
        className="group relative flex flex-col p-8 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-xl min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:border-white/15 hover:bg-zinc-900/10 cursor-pointer"
        style={{ 
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px -10px rgba(0, 0, 0, 0.5)"
        }}
      >
        {/* Background brand glow on hover */}
        <div 
          className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, #f43f5e 0%, transparent 70%)`
          }}
        />

        {/* Quote Symbol */}
        <span className="text-6xl font-display text-pink-500/10 leading-none mb-2 select-none group-hover:text-pink-500/20 transition-colors duration-500">&ldquo;</span>
        
        {/* Quote Text */}
        <p className="text-base lg:text-lg text-zinc-300 leading-relaxed flex-1 group-hover:text-zinc-100 transition-colors duration-300 font-sans font-light">
          {item.quote}
        </p>

        {/* Author Footer */}
        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/5">
          <div
            className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.avatarStyle} border border-white/10 flex items-center justify-center shrink-0 shadow-lg`}
          >
            {/* Inner ring */}
            <div className="absolute inset-0.5 rounded-full bg-black/60 flex items-center justify-center">
              <span className="font-display text-lg text-zinc-100 group-hover:text-white group-hover:scale-105 transition-all duration-300">{item.avatar}</span>
            </div>
          </div>
          <div>
            <p className="font-medium text-zinc-200 text-sm group-hover:text-white transition-colors duration-300">{item.author}</p>
            <p className="text-zinc-500 text-xs mt-0.5 leading-snug font-mono uppercase tracking-wider">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="testimonials" ref={sectionRef} className="relative bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-24 lg:pb-32">
        {/* Header */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6">
            <span className="w-12 h-px bg-white/20" />
            Testimonials
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] text-white">
            What clients
            <br />
            <span className="text-white/35">said.</span>
          </h2>
        </div>

        {/* Landscape banner — seamless fade into cards */}
        <div
          className={`relative w-full h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={BANNER_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ transform: "scale(1.08)" }}
          />
          {/* Fades to prevent any borders or cut-offs */}
          {/* Top border fade: solid black at top edge fading to transparent */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
          
          {/* Bottom border fade: solid black at bottom edge fading to transparent */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          
          {/* Left border fade: solid black at left edge fading to transparent */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          
          {/* Right border fade: solid black at right edge fading to transparent */}
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-black/10 z-10" />
        </div>

        {/* Cards — overlap banner slightly */}
        <div className="relative z-20 -mt-10 lg:-mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.author} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
