import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Biz haqimizda" },
  { href: "#products", label: "Mahsulotlar" },
  { href: "#certificates", label: "Sertifikatlar" },
  { href: "#why-us", label: "Nega aynan biz" },
  { href: "#contact", label: "Aloqa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: "4.5rem" }}>
        <a href="#top" className="font-display font-bold text-xl tracking-tight text-ink">
          Radjaboff
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent text-white text-sm font-semibold px-5 py-2.5 shadow-sm hover:bg-accent-dark hover:shadow-md transition-all"
          >
            Hamkor bo‘lish
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menyuni ochish"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center rounded-full bg-accent text-white text-sm font-semibold px-5 py-3"
          >
            Hamkor bo‘lish
          </a>
        </div>
      )}
    </header>
  );
}
