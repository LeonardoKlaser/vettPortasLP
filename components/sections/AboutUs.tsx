"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, Shield, Palette } from "lucide-react";

import sobreImg from "@/assets/sobre-nos/sobre-nos.jpeg";

const PILLARS = [
  { icon: Award, label: "Qualidade", color: "text-gold" },
  { icon: Shield, label: "Confiança", color: "text-terracotta" },
  { icon: Palette, label: "Design", color: "text-olive" },
];

export function AboutUs() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-40">
      <div className="h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent mb-16 md:mb-24 lg:mb-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          <ScrollReveal withScale>
            <div className="overflow-hidden rounded-lg">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200, damping: 30 }}>
                <Image src={sobreImg} alt="Ambiente da Vetta Portas" className="w-full h-auto object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
              </motion.div>
            </div>
          </ScrollReveal>

          <div>
            <SectionHeader
              label="Nossa História"
              title={<>Sobre a{" "}<em className="italic text-warm-taupe">Vetta Portas</em></>}
              description="A Vetta Portas nasceu da paixão por transformar espaços através de portas, esquadrias e acabamentos de excelência. Nosso compromisso é entregar qualidade em cada detalhe, orientando cada cliente na escolha ideal para o seu projeto."
            />

            <ScrollReveal delay={0.2} className="flex gap-3 mt-8">
              {PILLARS.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex-1 bg-white border border-navy/5 rounded-lg p-4 text-center">
                  <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
                  <p className="text-xs uppercase tracking-wider font-semibold text-navy">{label}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
