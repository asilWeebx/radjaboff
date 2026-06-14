import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Aloqa
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Hamkorlik bo‘yicha so‘rov yuboring
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-md">
              Formani to‘ldiring va jamoamiz tez orada siz bilan bog‘lanadi.
              Yetkazib berish hajmi, narxlar va shartnomalar bo‘yicha
              ma’lumot beramiz.
            </p>

            <div className="mt-10 space-y-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Qarshi shahri, Qashqadaryo viloyati, O‘zbekiston
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                info@radjaboff.uz
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                +998 90 000 00 00
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-surface border border-line p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 size={40} className="text-accent" />
                  <h3 className="mt-4 font-display font-semibold text-xl text-ink">
                    So‘rovingiz qabul qilindi
                  </h3>
                  <p className="mt-2 text-sm text-muted max-w-sm">
                    Tez orada jamoamiz siz bilan bog‘lanadi. E’tiboringiz
                    uchun rahmat.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1">
                    <label htmlFor="ism" className="block text-sm font-medium text-ink mb-2">
                      Ism
                    </label>
                    <input
                      id="ism"
                      name="ism"
                      type="text"
                      required
                      placeholder="Ismingiz"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="kompaniya" className="block text-sm font-medium text-ink mb-2">
                      Kompaniya
                    </label>
                    <input
                      id="kompaniya"
                      name="kompaniya"
                      type="text"
                      placeholder="Kompaniya nomi"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@misol.uz"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="xabar" className="block text-sm font-medium text-ink mb-2">
                      Xabar
                    </label>
                    <textarea
                      id="xabar"
                      name="xabar"
                      rows={4}
                      required
                      placeholder="So‘rovingiz haqida qisqacha yozing"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-accent text-white text-sm font-semibold px-7 py-3.5 shadow-sm hover:bg-accent-dark hover:shadow-md transition-all"
                    >
                      So‘rov yuborish
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
