"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, BadgeCheck, CreditCard, Users, Truck, Heart } from "lucide-react";

const DIFFERENTIALS = [
  { icon: ShieldCheck, title: "Garantia", desc: "Produtos com garantia de fábrica e acompanhamento pós-venda" },
  { icon: BadgeCheck, title: "Certificações", desc: "Materiais certificados e dentro das normas técnicas" },
  { icon: CreditCard, title: "Parcelamento", desc: "Condições exclusivas de pagamento facilitado" },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais prontos para orientar seu projeto" },
  { icon: Truck, title: "Entrega Segura", desc: "Logística cuidadosa para proteger seu produto" },
  { icon: Heart, title: "Atendimento Humano", desc: "Quem está por trás faz toda a diferença" },
];

export function WhyVetta() {
  return (
    <section id="diferenciais" className="py-10 md:py-16 lg:py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          centered
          light
          label="Diferenciais"
          title={<>Por que comprar com a{" "}<em className="italic text-warm-taupe">Vetta Portas</em></>}
        />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
          {DIFFERENTIALS.map((d) => (
            <motion.div key={d.title} variants={staggerItem} className="bg-off-white/5 border border-off-white/10 rounded-lg p-6 text-center">
              <d.icon className="w-6 h-6 mx-auto mb-3 text-gold" />
              <h3 className="text-sm font-semibold text-off-white mb-2">{d.title}</h3>
              <p className="text-xs text-off-white/70 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
