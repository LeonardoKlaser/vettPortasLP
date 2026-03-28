"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

import rodape1 from "@/assets/rodapes/rodape-1.jpeg";
import rodape2 from "@/assets/rodapes/rodape-2.jpeg";
import rodape3 from "@/assets/rodapes/rodape-3.jpeg";

const PRODUCTS = [
  { img: rodape1, name: "Rodapé Clássico" },
  { img: rodape2, name: "Rodapé Moderno" },
  { img: rodape3, name: "Rodapé Premium" },
];

export function Baseboards() {
  return (
    <section id="rodapes" className="py-16 md:py-24 lg:py-40">
      <div className="h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent mb-16 md:mb-24 lg:mb-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          label="Transformação"
          title={<>Rodapés — Quase ninguém<br />percebe, mas <em className="italic text-warm-taupe">mudam tudo</em></>}
          description="Veja a diferença que um rodapé de qualidade faz. Detalhes que completam o projeto e valorizam o ambiente."
        />

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="relative rounded-lg overflow-hidden">
            <Image src={rodape1} alt="Ambiente antes do rodapé" className="w-full h-64 object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <span className="absolute top-3 left-3 text-xs uppercase tracking-wider bg-navy/90 text-off-white px-3 py-1 rounded-full">Antes</span>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src={rodape2} alt="Ambiente depois do rodapé" className="w-full h-64 object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <span className="absolute top-3 left-3 text-xs uppercase tracking-wider bg-olive/90 text-off-white px-3 py-1 rounded-full">Depois</span>
          </div>
        </ScrollReveal>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta font-medium mb-6">Tipos disponíveis</p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRODUCTS.map((p) => (
              <motion.div key={p.name} variants={staggerItem} className="group bg-white rounded-lg border border-navy/5 overflow-hidden">
                <div className="overflow-hidden">
                  <Image src={p.img} alt={p.name} className="w-full h-48 object-cover transition-all duration-500 ease-out group-hover:brightness-[0.92]" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-navy">{p.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
