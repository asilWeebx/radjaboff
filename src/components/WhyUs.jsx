import { motion } from "framer-motion";
import { Truck, Sparkles, Cog, Handshake } from "lucide-react";

const reasons = [
  {
    title: "Barqaror ta’minot",
    desc: "Mahsulotlarni doimiy va o‘z vaqtida yetkazib berish kafolatlanadi.",
    icon: Truck,
  },
  {
    title: "Yuqori sifat",
    desc: "Har bir bosqichda qattiq sifat nazorati amalga oshiriladi.",
    icon: Sparkles,
  },
  {
    title: "Zamonaviy ishlab chiqarish",
    desc: "Yevropa standartidagi uskunalar va avtomatlashtirilgan tizimlar.",
    icon: Cog,
  },
  {
    title: "Ishonchli hamkorlik",
    desc: "Shaffof shartnomalar va uzoq muddatli hamkorlik munosabatlari.",
    icon: Handshake,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Nega aynan biz
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Hamkorlik uchun mustahkam asos
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-line p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="mt-6 font-display font-semibold text-lg text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
