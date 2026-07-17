import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

export const Hero = () => {
  const marqueeText =
    "Emerging tech professional exploring the intersection of data, intelligence, and experience. I simplify complex datasets into elegant insights and build seamless solutions.";

  const sparkIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M12 2.5l1.9 4.8L19 9.2l-5.1 1.9L12 16l-1.9-4.9L5 9.2l5.1-1.9L12 2.5Z" />
      <path d="M18.5 13.5l.8 2 2 0.8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </svg>
  );

  const downloadIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M12 3v10" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 19h14" />
    </svg>
  );

  const arrowIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );

  return (
    <section id="hero" className="hero-section bg-grid-texture">
      {/* Full-Screen Hero Area */}
      <div className="hero-screen-area">
        {/* Top Left Typography: MANHARAN */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-24 sm:top-35 left-6 sm:left-10 md:left-14 lg:left-16 z-40 select-none pointer-events-none"
        >
          <h1 className="text-[13.5vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-bold tracking-tighter text-white leading-none">
            MANHARAN
          </h1>
        </motion.div>

        {/* Center Portrait Image (Occupies 55-60% of hero height, centered, hidden on mobile) */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 hidden sm:flex items-end justify-center pointer-events-none z-20"
        >
          <img
            src="/hero-awwwards.jpg"
            alt="Manharan Kaur"
            className="hero-portrait-img"
          />
        </motion.div>

        {/* Main Headline Overlapping the Portrait (Centered, exactly ONE line) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bottom-[-30vh] flex items-center justify-center z-30 pointer-events-none px-2"
        >
          <p className="text-[2.6vw] sm:text-[2.2vw] md:text-[2.05vw] lg:text-[1.9vw] xl:text-[1.8vw] font-medium tracking-tight text-white whitespace-nowrap drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Building intelligent experiences where{" "}
            <span className="text-[#ff4fa3] font-semibold">code</span> meets{" "}
            <span className="text-[#ff4fa3] font-semibold">creativity</span>
          </p>
        </motion.div>

        {/* Bottom Right Typography: KAUR */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[20px] right-6 sm:right-10 md:right-14 lg:right-16 z-40 select-none pointer-events-none"
        >
          <h1 className="text-[13.5vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-bold tracking-tighter text-white leading-none">
            KAUR
          </h1>
        </motion.div>

        {/* Top Right Tech Tag */}
        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="group absolute top-24 sm:top-28 right-6 sm:right-10 md:right-14 lg:right-16 z-50 inline-flex items-center gap-2 rounded-full border border-[#39C5FF] bg-white/5 px-4 py-2 text-[11px] sm:text-xs font-medium tracking-[0.22em] text-white backdrop-blur-[6px] transition-all duration-300 hover:shadow-[0_0_24px_rgba(57,197,255,0.28)] hover:bg-white/8"
        >
          <span className="text-[#39C5FF] transition-transform duration-300 group-hover:scale-110">
            {sparkIcon}
          </span>
          <span className="whitespace-nowrap">AI • Data • Full Stack</span>
        </motion.div>

        {/* Bottom Left CTA Buttons */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 left-6 sm:left-10 md:left-14 lg:left-16 z-50 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="#featured-work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4fa3] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,79,163,0.35)]"
          >
            <span>View My Work</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {arrowIcon}
            </span>
          </a>

          <a
            href="/Resume__Manharan.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-transparent px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#ff4fa3] hover:text-[#ff4fa3] hover:shadow-[0_0_18px_rgba(255,79,163,0.18)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              {downloadIcon}
            </span>
            <span>View Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Full-Width Horizontal Marquee Band Below Hero */}
      <div className="hero-marquee-band border-[#ff4fa3]">
        <div className="animate-infinite-marquee">
          {/* We render 4 repeated copies for perfectly seamless infinite loop */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center space-x-6 px-3">
              <span className="text-white text-xs sm:text-sm md:text-base font-normal tracking-wide whitespace-nowrap">
                {marqueeText}
              </span>
              <span className="text-[#ff4fa3] font-bold text-lg select-none">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
