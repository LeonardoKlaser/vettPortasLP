"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

import img1 from "@/assets/modern-doors/porta-moderna-1.jpeg";
import img2 from "@/assets/modern-doors/porta-moderna-2.jpeg";
import img3 from "@/assets/modern-doors/porta-moderna-3.jpeg";
import img4 from "@/assets/modern-doors/porta-moderna-4.jpeg";
import img5 from "@/assets/modern-doors/porta-moderna-5.jpeg";

const PRODUCTS = [
  { img: img2, name: "Porta Pivotante", desc: "Ideal para entradas e halls" },
  { img: img3, name: "Porta de Correr", desc: "Perfeita para espaços compactos" },
  { img: img4, name: "Porta com Vidro", desc: "Ambientes integrados com luz" },
  { img: img5, name: "Porta Camarão", desc: "Versatilidade e elegância" },
];

export function ModernDoors() {
  return (
    <section id="portas-modernas" className="py-16 md:py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-start">
          <ScrollReveal withScale>
            <div className="overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                <Image
                  src={img1}
                  alt="Porta moderna em ambiente decorado"
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center lg:pt-12">
            <SectionHeader
              label="Coleção"
              title={<>Modelos mais famosos e{" "}<em className="italic text-warm-taupe">modernos</em></>}
              description="Os tipos de porta mais vendidos e para qual uso é recomendado cada uma. Portas que combinam design contemporâneo com funcionalidade para cada ambiente da sua casa."
            />
            <a
              href="https://wa.me/PLACEHOLDER?text=Olá! Gostaria de saber mais sobre as portas modernas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-terracotta mt-6 hover:opacity-70 transition-opacity"
            >
              Ver todos os modelos <span>→</span>
            </a>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16"
        >
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              className="group bg-white rounded-lg border border-navy/5 overflow-hidden"
            >
              <div className="overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover transition-all duration-500 ease-out group-hover:brightness-[0.92]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
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
