import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Signature "pour" gradient element */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(47,107,255,0.18), rgba(47,107,255,0.04) 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-10 w-[420px] h-[420px] rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9), rgba(247,249,252,0.2) 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-muted tracking-wide uppercase mb-6">
              Qarshi, O‘zbekiston
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink max-w-xl">
              Tabiiy sut mahsulotlari — premium sifat va ishonch
            </h1>

            <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
              Radjaboff — yogurt, kefir, ayran va tvorog ishlab chiqaruvchi
              zamonaviy kompaniya
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white text-sm font-semibold px-7 py-3.5 shadow-sm hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Hamkor bo‘lish
                <ArrowRight size={16} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white text-ink text-sm font-semibold px-7 py-3.5 hover:border-accent/40 hover:bg-surface transition-all"
              >
                <Package size={16} />
                Mahsulotlar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] bg-surface border border-line p-10 sm:p-14 shadow-[0_30px_60px_-30px_rgba(47,107,255,0.25)]">
              <div className="aspect-square w-full rounded-3xl bg-white border border-line flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                  {["Yogurt", "Kefir", "Ayran", "Tvorog"].map((name, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                      className="rounded-2xl bg-surface border border-line flex flex-col items-center justify-center gap-2 p-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm font-semibold text-ink">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white rounded-2xl border border-line shadow-lg px-6 py-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">100% tabiiy</p>
                <p className="text-xs text-muted">Qo‘shimchasiz tarkib</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
