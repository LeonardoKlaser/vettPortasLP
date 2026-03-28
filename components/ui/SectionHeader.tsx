import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const align = centered ? "text-center" : "";
  const labelColor = light ? "text-gold" : "text-terracotta";
  const titleColor = light ? "text-off-white" : "text-navy";
  const descColor = light ? "text-off-white/70" : "text-dark-brown/70";

  return (
    <ScrollReveal className={align}>
      <p
        className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${labelColor}`}
      >
        {label}
      </p>
      <h2
        className={`font-heading text-4xl md:text-6xl lg:text-7xl tracking-tighter font-normal leading-[1.05] mb-4 ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed max-w-prose ${descColor} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
