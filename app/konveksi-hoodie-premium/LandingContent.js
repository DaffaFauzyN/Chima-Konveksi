'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, Cloud, Thermometer, Shield } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function LandingContent() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Konveksi Hoodie Premium", path: "/konveksi-hoodie-premium" }]} />
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio-hoodie.png"
            alt="Konveksi Hoodie Premium Bandung - Chima Konveksi"
            fill
            priority
            className="object-cover opacity-30 grayscale scale-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8"
          >
            KONVEKSI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-500 italic">HOODIE PREMIUM</span> <br />
            BANDUNG.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-3xl text-slate-300 max-w-4xl mx-auto leading-tight mb-12 font-medium"
          >
            Spesialis produksi hoodie custom dan jaket premium untuk brand fashion distro, corporate merchandise, dan kebutuhan komunitas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/6285520784930"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-5 md:px-12 md:py-7 rounded-2xl md:rounded-full font-black text-base md:text-xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl"
            >
              Konsultasi Sekarang <ArrowRight size={22} />
            </a>
            <Link
              href="/portfolio"
              className="bg-white/5 backdrop-blur-md text-white border-2 border-white/20 px-8 py-5 md:px-12 md:py-7 rounded-2xl md:rounded-full font-black text-base md:text-xl hover:bg-white/10 transition-all text-center"
            >
              Lihat Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-8 block">Premium Quality</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              HOODIE <br /> <span className="text-slate-400 italic">KUALITAS EKSPOR.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Cloud, title: "Fleece Heavy", desc: "Bahan fleece 280-320gsm dengan bulu halus di bagian dalam. Hangat, nyaman, dan tidak mudah melar." },
              { icon: Thermometer, title: "Jahit Thermal", desc: "Teknik jahit thermal lock untuk mencegah kebocoran serat. Jahitan rapi dan kuat untuk pemakaian jangka panjang." },
              { icon: Shield, title: "Bordir Premium", desc: "Bordir komputer high-density untuk logo brand. Hasil 3D timbul yang presisi dan tahan lama." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-blue-600 transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase">{item.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-56 px-6 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8 block">Mengapa Hoodie Kami Berbeda</span>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-16">
              STANDAR <br /> <span className="text-slate-600 italic">PREMIUM.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Bahan fleece heavy 280-320gsm grade A",
              "Tersedia 20+ varian warna",
              "Sablon / bordir sesuai permintaan",
              "Drawstring custom dengan metal tip",
              "Kangaroo pocket dengan jahitan double",
              "Ribbing lengan & bawah elastis premium",
              "QC jahitan thermal lock anti rusak",
              "Packing aman dengan plastik PP + box karton",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10"
              >
                <CheckCircle2 size={24} className="text-blue-500 shrink-0" />
                <span className="text-white font-bold text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-64 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/portfolio-hoodie.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase">
              PRODUKSI <span className="text-slate-500 italic">HOODIE</span> PREMIUM.
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed">
              Wujudkan desain hoodie brand Anda bersama tim produksi kami.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6285520784930"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-110 transition-all shadow-2xl group"
              >
                KONSULTASI SEKARANG
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
