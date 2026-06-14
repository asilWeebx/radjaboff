const links = [
  { href: "#about", label: "Biz haqimizda" },
  { href: "#products", label: "Mahsulotlar" },
  { href: "#certificates", label: "Sertifikatlar" },
  { href: "#why-us", label: "Nega aynan biz" },
  { href: "#contact", label: "Aloqa" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-ink">
              Radjaboff
            </span>
            <p className="mt-2 text-sm text-muted max-w-xs leading-relaxed">
              Qarshi shahridagi zamonaviy sut mahsulotlari ishlab chiqarish
              kompaniyasi.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} Radjaboff. Barcha huquqlar himoyalangan.</p>
          <p>Qarshi, O‘zbekiston</p>
        </div>
      </div>
    </footer>
  );
}
