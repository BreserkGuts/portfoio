"use client";

import { useEffect, useRef, useState } from "react";

const projectCategories = [
  {
    number: "01",
    title: "Event Post-Production",
    ghost: "EVENTS",
    category: "Post-Production / Event Recap",
    description: "High-energy event recaps and seamless post-production editing that captures the vibe, tempo, and atmosphere of live events.",
    samples: [
      { title: "Event Showcase 1", video: "https://drive.google.com/file/d/1OZu78qqXCgUjNuf_1RDM0iHRBpuScJUS/view?usp=drive_link" },
      { title: "Event Showcase 2", video: "https://drive.google.com/file/d/1hvkPK4gbx-GVFjO_l8eIJDUx7Y3IOOoI/view?usp=drive_link" },
    ],
  },
  {
    number: "02",
    title: "Motion Graphics",
    ghost: "MOTION",
    category: "Motion Graphics / Animation",
    description: "Bold motion design, kinetic type, and custom animations that bring visual stories to life.",
    samples: [
      { title: "Motion Graphic Showcase 1", video: "https://drive.google.com/file/d/182VUd_8YAThaHejPwI7D0T_PmdybK7IR/view?usp=sharing" },
      { title: "Motion Graphic Showcase 2", video: "https://drive.google.com/file/d/1wYbt5mPmj7qwfUqcEso9IsUZP01jH8nZ/view?usp=sharing" },
    ],
  },
  {
    number: "03",
    title: "Talking Head Videos",
    ghost: "TALKING",
    category: "Educational / Course Content",
    description: "Clean, engaging talking head edits with pacing, captions, and clarity for courses and creators.",
    samples: [
      { title: "Talking Head Showcase 1", video: "https://drive.google.com/file/d/1E9khk4JF4Mh0dNLPFkyXtB5Yy_wKZDhe/view?usp=sharing" },
      { title: "Talking Head Showcase 2", video: "https://drive.google.com/file/d/1eCPP9-_Zmb-XUX9Bm5SRMby3p4V9mN46/view?usp=drive_link" },
    ],
  },
  {
    number: "04",
    title: "AI-Generated Videos",
    ghost: "AI",
    category: "AI Video / Creative Tech",
    description: "Cutting-edge videos powered by AI generation, custom voice synthesis, and dynamic AI-driven visuals.",
    samples: [
      { title: "AI Video Showcase 1", video: "https://drive.google.com/file/d/1I09zGRowoHh19PeQgcz_3IiZ7f7Eulv4/view?usp=drive_link" },
      { title: "AI Video Showcase 2", video: "https://drive.google.com/file/d/1qlhIsXeHiQVggW6pn7lfHrsy_EKSzVcL/view?usp=drive_link" },
    ],
  },
  /*
  {
    number: "05",
    title: "Moments That Stick",
    category: "Short Form",
    description: "Tight, memorable short-form pieces — every second counts, every cut has purpose.",
    samples: [
      { title: "Highlight Reel", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
      { title: "Event Recap", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
      { title: "Teaser Cut", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
    ],
  },
  {
    number: "06",
    title: "Motion That Moves",
    category: "Animations / Motion Graphics",
    description: "Bold motion design, kinetic type, and animated visuals that bring ideas to life on screen.",
    samples: [
      { title: "Title Sequence", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
      { title: "Explainer Motion", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
      { title: "Kinetic Brand", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" },
    ],
  },
  */
];

function getGoogleDrivePreviewUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return null;
}

function VideoSample({ title, video }: { title: string; video: string }) {
  const drivePreviewUrl = getGoogleDrivePreviewUrl(video);
  const isGoogleDrive = drivePreviewUrl !== null;

  return (
    <div className="group relative aspect-video overflow-hidden border border-white/10 bg-black">
      {isGoogleDrive ? (
        <iframe
          src={drivePreviewUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <span className="text-sm font-mono text-white/80">{title}</span>
      </div>
    </div>
  );
}

function CategoryBlock({
  category,
  index,
}: {
  category: (typeof projectCategories)[0];
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (blockRef.current) observer.observe(blockRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Category header */}
      <div className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-white/10">
        <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-12 items-end overflow-hidden">
          {/* Ghost watermark word */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 font-display font-black uppercase leading-none text-white/[0.04] whitespace-nowrap"
            style={{ fontSize: "clamp(80px, 15vw, 200px)", letterSpacing: "-0.04em" }}
          >
            {category.ghost}
          </span>
          <div className="lg:col-span-1">
            <span className="font-mono text-sm text-[#eca8d6]">{category.number}</span>
          </div>
          <div className="lg:col-span-11 relative z-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display text-white tracking-tight leading-[0.95]">
              {category.title}
            </h3>
            <p className="text-white/40 mt-4 text-xl md:text-2xl font-mono tracking-wide">
              {category.category}
            </p>
            <p className="text-white/50 mt-6 max-w-2xl leading-relaxed">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Video samples */}
      <div className={`grid gap-4 lg:gap-6 ${category.samples.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {category.samples.map((sample, sampleIndex) => (
          <div
            key={sample.title}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + sampleIndex * 100}ms` }}
          >
            <VideoSample title={sample.title} video={sample.video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfrastructureSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-20 lg:mb-28 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-4 text-sm font-mono text-white/40 mb-6">
            <span className="w-12 h-px bg-white/20" />
            Projects
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-white tracking-tight">
            Selected work
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projectCategories.map((category, index) => (
            <CategoryBlock key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
