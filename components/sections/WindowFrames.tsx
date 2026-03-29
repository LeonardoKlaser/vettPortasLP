"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

import esq1 from "@/assets/esquadrias/esquadria-1.jpeg";
import esq2 from "@/assets/esquadrias/esquadria-2.jpeg";
import esq3 from "@/assets/esquadrias/esquadria-3.jpeg";
import esq4 from "@/assets/esquadrias/esquadria-4.jpeg";

const PRODUCTS = [
  { img: esq1, name: "Janela de Correr", desc: "Versátil e funcional para qualquer ambiente" },
  { img: esq2, name: "Maxim-Ar", desc: "Ventilação controlada com privacidade" },
  { img: esq3, name: "Porta Balcão", desc: "Conexão elegante entre ambientes" },
  { img: esq4, name: "Pivotante", desc: "Impacto visual e sofisticação" },
];

export function WindowFrames() {
  return (
    <section id="esquadrias" className="py-10 md:py-16 lg:py-20">
      <div className="h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent mb-10 md:mb-16 lg:mb-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          centered
          label="Alumínio"
          title={<>Esquadrias de{" "}<em className="italic text-warm-taupe">alumínio</em></>}
          description="Janelas e portas em alumínio de alta qualidade para complementar seu projeto com durabilidade e design."
        />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16">
          {PRODUCTS.map((p) => (
            <motion.div key={p.name} variants={staggerItem} className="group bg-white rounded-lg border border-navy/5 overflow-hidden">
              <div className="overflow-hidden">
                <Image src={p.img} alt={p.name} className="w-full h-48 object-cover transition-all duration-500 ease-out group-hover:brightness-[0.92]" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-navy">{p.name}</p>
                <p className="text-xs text-dark-brown/60 mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
