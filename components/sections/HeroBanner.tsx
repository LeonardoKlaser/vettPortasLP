"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-banner/ambientada.jpeg";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-off-white">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative line */}
            <div className="absolute top-1/2 -left-8 w-12 h-px bg-gold hidden lg:block" />

            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
              Vetta Portas
            </p>
            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl tracking-tighter font-normal leading-[1.05] text-navy mb-5">
              A porta que define{" "}
              <em className="italic text-warm-taupe">o seu espaço</em>
            </h1>
            <p className="text-base md:text-lg text-dark-brown/70 mb-8 max-w-md leading-relaxed">
              Portas, esquadrias e rodapés que transformam ambientes com
              elegância e qualidade.
            </p>
            <a
              href="#portas-modernas"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-navy border-[1.5px] border-gold/60 px-7 py-3.5 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Conheça nossos modelos
              <span>→</span>
            </a>
          </motion.div>

          {/* Image Card Side */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(26,41,47,0.12),0_10px_30px_rgba(26,41,47,0.06)] transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.01]">
              <Image
                src={heroImg}
                alt="Porta em ambiente decorado — VettaPortas"
                className="w-full h-[500px] md:h-[600px] object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
