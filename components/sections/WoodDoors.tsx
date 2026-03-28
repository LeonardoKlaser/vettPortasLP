"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

import img1 from "@/assets/wood-doors/porta-madeira-1.jpeg";
import img2 from "@/assets/wood-doors/porta-madeira-2.jpeg";
import img3 from "@/assets/wood-doors/porta-madeira-3.jpeg";

const WOOD_TAGS = ["Cumaru", "Ipê", "Cedro", "Mogno"];

export function WoodDoors() {
  return (
    <section id="portas-madeira" className="py-16 md:py-24 lg:py-40">
      <div className="h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent mb-16 md:mb-24 lg:mb-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start">
          <div className="flex flex-col justify-center">
            <SectionHeader
              label="Destaque"
              title={<>As queridinhas...<br />PORTAS EM <em className="italic text-warm-taupe">MADEIRA</em></>}
              description="Tipos de portas, tipos de madeira e modelos que encantam. A madeira traz nobreza e calor a qualquer ambiente."
            />
            <div className="flex flex-wrap gap-2 mt-6">
              {WOOD_TAGS.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-wider text-olive bg-olive/5 border border-olive/15 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/PLACEHOLDER?text=Olá! Gostaria de saber mais sobre as portas em madeira."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-terracotta mt-6 hover:opacity-70 transition-opacity"
            >
              Explorar madeiras <span>→</span>
            </a>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="row-span-2 overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200, damping: 30 }} className="h-full">
                  <Image src={img1} alt="Porta em madeira" className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 35vw" />
                </motion.div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image src={img2} alt="Detalhe de porta em madeira" className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image src={img3} alt="Porta de madeira em ambiente" className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
