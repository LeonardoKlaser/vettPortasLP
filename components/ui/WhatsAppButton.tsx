"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/PLACEHOLDER?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos.";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full p-4 shadow-lg group hover:pr-6 transition-all duration-300"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle className="w-6 h-6" fill="white" stroke="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-sm font-medium whitespace-nowrap">
        Fale conosco
      </span>
    </motion.a>
  );
}
