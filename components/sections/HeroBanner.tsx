"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-banner/banner-1.jpeg";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBanner() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      <Image
        src={heroBg}
        alt="Porta em ambiente decorado"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,41,47,0.7)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Vetta Portas
          </p>
          <h1 className="font-heading text-5xl md:text-7xl xl:text-8xl tracking-tighter font-normal leading-[1.05] text-off-white mb-4">
            A porta que define{" "}
            <em className="italic text-warm-taupe">o seu espaço</em>
          </h1>
          <p className="text-base md:text-lg text-off-white/75 mb-8 max-w-md">
            Portas, esquadrias e rodapés que transformam ambientes com elegância
            e qualidade.
          </p>
          <a
            href="#portas-modernas"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-gold border border-gold/40 px-6 py-3 rounded-full hover:bg-gold/10 transition-colors duration-300"
          >
            Conheça nossos modelos
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
