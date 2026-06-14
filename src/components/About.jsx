import { motion } from "framer-motion";

const stats = [
  { value: "2010", label: "Yildan beri faoliyat" },
  { value: "15+", label: "Mahsulot turi" },
  { value: "100%", label: "Tabiiy xom ashyo" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Biz haqimizda
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Har bir bankada — tozalik va mehnatning natijasi
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-lg text-muted leading-relaxed">
              Radjaboff Qarshi shahrida joylashgan zamonaviy sut mahsulotlari
              ishlab chiqarish korxonasi bo‘lib, mahalliy fermer xo‘jaliklari
              bilan to‘g‘ridan-to‘g‘ri hamkorlikda ishlaydi. Har bir
              partiyaning sifati laboratoriya nazoratidan o‘tadi, ishlab
              chiqarish jarayoni esa zamonaviy uskunalar yordamida
              avtomatlashtirilgan.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Maqsadimiz — mijozlarga har kuni tabiiy, foydali va lazzatli sut
              mahsulotlarini yetkazib berish, shu bilan birga hamkorlarimiz
              uchun barqaror va shaffof yetkazib berish tizimini ta’minlash.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-ink">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
