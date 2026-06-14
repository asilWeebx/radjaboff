import { motion } from "framer-motion";
import { Droplets, Milk, Wheat, Sandwich, CircleDot } from "lucide-react";

const products = [
  {
    name: "Yogurt",
    desc: "Krem konsistensiyali, tabiiy ferment bilan tayyorlangan yogurt.",
    icon: Milk,
  },
  {
    name: "Kefir",
    desc: "Foydali bakteriyalarga boy, kunlik iste’mol uchun ideal ichimlik.",
    icon: Droplets,
  },
  {
    name: "Ayran",
    desc: "Yengil va tetiklashtiruvchi, issiq kunlar uchun mukammal tanlov.",
    icon: CircleDot,
  },
  {
    name: "Tvorog",
    desc: "Yumshoq tuzilishga ega, oqsilga boy tabiiy tvorog.",
    icon: Sandwich,
  },
  {
    name: "Qurt",
    desc: "An’anaviy retsept asosida quritilgan, tabiiy sut taomi.",
    icon: Wheat,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Mahsulotlar
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Har kungi dasturxon uchun tabiiy mahsulotlar
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-3xl bg-white border border-line p-8 hover:shadow-[0_20px_40px_-24px_rgba(47,107,255,0.25)] hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-accent group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
