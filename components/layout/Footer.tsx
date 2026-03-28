const NAV_LINKS = [
  { label: "Portas Modernas", href: "#portas-modernas" },
  { label: "Portas em Madeira", href: "#portas-madeira" },
  { label: "Rodapés", href: "#rodapes" },
  { label: "Esquadrias", href: "#esquadrias" },
];

const COMPANY_LINKS = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
];

const CONTACT_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/PLACEHOLDER" },
  { label: "Instagram", href: "#" },
  { label: "Email", href: "mailto:contato@vettaportas.com.br" },
];

export function Footer() {
  return (
    <footer className="bg-dark-brown py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl tracking-[0.1em] text-off-white mb-3">
              VETTA PORTAS
            </p>
            <p className="text-sm text-off-white/50 leading-relaxed max-w-[220px]">
              Portas, esquadrias e rodapés que transformam ambientes com
              elegância e qualidade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm text-warm-taupe mb-4">
              Navegação
            </h4>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-off-white/50 hover:text-off-white transition-colors mb-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm text-warm-taupe mb-4">
              Empresa
            </h4>
            {COMPANY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-off-white/50 hover:text-off-white transition-colors mb-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm text-warm-taupe mb-4">
              Contato
            </h4>
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block text-sm text-off-white/50 hover:text-off-white transition-colors mb-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-off-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-off-white/30">
            &copy; {new Date().getFullYear()} Vetta Portas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
