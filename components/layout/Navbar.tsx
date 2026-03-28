"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Portas", href: "#portas-modernas" },
  { label: "Madeira", href: "#portas-madeira" },
  { label: "Rodapés", href: "#rodapes" },
  { label: "Esquadrias", href: "#esquadrias" },
  { label: "Sobre", href: "#sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
        animate={{
          backgroundColor: scrolled
            ? "rgba(244, 241, 235, 0.95)"
            : "rgba(244, 241, 235, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`font-heading text-lg md:text-xl tracking-[0.15em] font-semibold transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-off-white"
            }`}
          >
            VETTA PORTAS
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-70 ${
                    scrolled ? "text-navy" : "text-off-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/PLACEHOLDER?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex text-xs uppercase tracking-[0.15em] font-medium px-5 py-2 rounded-full border transition-colors duration-300 ${
              scrolled
                ? "border-navy/20 text-navy hover:bg-navy hover:text-off-white"
                : "border-off-white/30 text-off-white hover:bg-off-white/10"
            }`}
          >
            WhatsApp
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-navy" : "text-off-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-72 bg-navy z-50 px-8 pt-24 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-off-white text-sm uppercase tracking-[0.15em] font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm uppercase tracking-[0.15em] font-medium mt-4"
            >
              WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
