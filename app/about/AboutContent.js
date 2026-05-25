'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, History, Target, ShieldCheck, MessageCircle } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function AboutContent() {
  const MotionImage = motion(Image);
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Tentang Kami", path: "/about" }]} />
      {/* 1. Immersive Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/modern_garment_studio_1778119788748.png" 
            alt="Workshop Chima Konveksi Bandung - Produsen Pakaian Custom Kualitas Ekspor" 
            fill 
            className="object-cover opacity-40 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up-slow">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Our Legacy & Mission</span>
            <h1 className="text-4xl sm:text-5xl md:text-[10rem] font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 px-2">
              BEYOND <br /> <span className="italic text-slate-500">CRAFT.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium max-w-4xl mx-auto leading-relaxed md:leading-tight px-4">
              Sejak 2008, kami telah bertransformasi menjadi workshop garment spesialis yang didorong oleh semangat inovasi dan dedikasi pada kualitas butik tanpa kompromi.
            </p>
        </div>
      </section>

      {/* 2. Philosophy & Story */}
      <section className="py-32 md:py-56 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase mb-8 block">Origin Story</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-12">
              DARI BANDUNG <br /> <span className="text-slate-400 italic">UNTUK INDONESIA.</span>
            </h2>
            <div className="space-y-10 text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
              <p>
                Berawal dari sebuah workshop di Bandung, CHIMA KONVEKSI kini tumbuh menjadi pilihan utama bagi brand fashion dan perusahaan yang mencari kualitas jahit premium dengan pelayanan yang personal.
              </p>
              <p className="text-slate-900 font-black">
                Filosofi kami sederhana: "Kualitas premium adalah hasil dari niat tulus dan ketelitian tangan ahli."
              </p>
              <div className="pt-16 grid grid-cols-2 gap-12 border-t border-slate-100">
                <div>
                  <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">16+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Years of Trust</div>
                </div>
                <div>
                  <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">1M+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Pcs Produced</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5]"
          >
            <div className="absolute inset-0 bg-slate-900 rounded-[5rem] rotate-3 z-0" />
            <MotionImage 
              src="/case-study-featured.png" 
              alt="Fasilitas Mesin Jahit Modern di Workshop Chima Konveksi Bandung" 
              fill 
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{ filter: "grayscale(0%)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="object-cover rounded-[5rem] relative z-10 shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-1000" 
            />
            <div className="absolute -bottom-12 -right-12 bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 hidden md:block z-20">
              <div className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">Elite</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">Production Standards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Grid - INDUSTRIAL DARK */}
      <section className="py-32 md:py-56 bg-slate-900 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial_abstract_pattern_1778119807716.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-8 block">Our DNA</span>
            <h2 className="text-5xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
              NILAI YANG <br /> <span className="text-slate-600 italic">KAMI JUNJUNG.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Precision", desc: "Ketelitian mutlak di setiap jahitan. Kami tidak mengenal kata 'cukup baik', hanya 'sempurna'." },
              { icon: History, title: "Reliability", desc: "Menjadi mitra yang bisa Anda andalkan di setiap waktu, terutama saat mengejar deadline krusial." },
              { icon: Target, title: "Innovation", desc: "Terus mengadopsi teknik produksi terbaru untuk memastikan efisiensi dan hasil akhir modern." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/10 group transition-all duration-500"
              >
                <div className="w-20 h-20 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform">
                  <value.icon size={36} />
                </div>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{value.title}</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA - INDUSTRIAL IMPACT */}
      <section className="py-16 md:py-64 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-[8rem] font-black text-white mb-8 md:mb-12 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase">
              MULAI <span className="text-slate-500 italic">KOLABORASI</span> <br /> BERSAMA KAMI.
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed md:leading-tight">
              Wujudkan visi brand Anda bersama mitra produksi yang berpengalaman.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/6285520784930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-105 transition-all shadow-2xl group"
              >
                HUBUNGI KAMI SEKARANG
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
