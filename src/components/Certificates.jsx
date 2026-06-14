import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

const badges = [
  {
    title: "ISO 22000",
    desc: "Oziq-ovqat xavfsizligi boshqaruv tizimi standartiga muvofiqlik.",
    icon: ShieldCheck,
  },
  {
    title: "HACCP",
    desc: "Xavf tahlili va nazorat nuqtalari asosida ishlab chiqarish.",
    icon: Award,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Sertifikatlar
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Xalqaro sifat standartlariga mos ishlab chiqarish
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-lg">
              Bizning ishlab chiqarish jarayonlarimiz xalqaro tan olingan
              sifat va xavfsizlik standartlariga muvofiq tashkil etilgan, bu
              esa mahsulotlarimizning har bir bosqichda nazorat qilinishini
              kafolatlaydi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-3xl bg-surface border border-line p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-line flex items-center justify-center">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-lg text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
