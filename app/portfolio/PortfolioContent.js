'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Star, ArrowRight,
  CheckCircle2, ZoomIn, Package, ShieldCheck, MessageCircle
} from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function PortfolioContent() {
  const MotionImage = motion(Image);
  const projects = [
    { id: 1, cat: 'Fashion', name: 'Urban Hoodie', client: 'Vanguard', img: '/portfolio-hoodie.png', desc: 'Heavyweight Cotton Fleece 330gsm', tag: 'Best Seller' },
    { id: 2, cat: 'Corporate', name: 'Executive Polo', client: 'Lumina Tech', img: '/portfolio-polo.png', desc: 'Premium Pique with Computerized Embroidery', tag: 'Repeat Order' },
    { id: 3, cat: 'Merch', name: 'Oversized Event Tee', client: 'Zenith Festival', img: '/portfolio-tee.png', desc: '24s Combed with Plastisol Ink', tag: 'Fast Production' },
    { id: 4, cat: 'Fashion', name: 'Streetwear Pants', client: 'Aura', img: '/portfolio-pants.png', desc: 'Custom Twill with Industrial Stitching', tag: 'Premium Finish' },
    { id: 5, cat: 'Corporate', name: 'Tech Vest', client: 'Nexus Inc', img: '/portfolio-vest.png', desc: 'Water-resistant Microfiber', tag: 'Corporate Choice' },
    { id: 6, cat: 'Merch', name: 'Classic Tote Bag', client: 'Elevate Co', img: '/portfolio-tote.png', desc: 'Canvas 12oz with DTF Printing', tag: 'Eco Friendly' },
  ];

  const filteredProjects = projects;

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Portfolio", path: "/portfolio" }]} />
      {/* 1. Page Header with Stats - INDUSTRIAL DARK */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial_abstract_pattern_1778119807716.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Global Project Showcase</span>
              <h1 className="text-4xl md:text-[9rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
                JEJAK <br /> <span className="text-slate-500 italic">EKSISTENSI.</span>
              </h1>
              <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-xl">
                Setiap produk adalah perwujudan dari dedikasi kami pada detail dan kualitas jahit premium.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-8 md:gap-12 border-l border-white/10 pl-0 lg:pl-16">
              <div>
                <div className="text-4xl md:text-8xl font-black text-white mb-2 tracking-tighter">3.5K+</div>
                <div className="text-[9px] md:text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Batch Production</div>
              </div>
              <div>
                <div className="text-4xl md:text-8xl font-black text-white mb-2 tracking-tighter">99%</div>
                <div className="text-[9px] md:text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Precision Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Case Study - PREMIUM CARD */}
      <section className="py-32 md:py-56 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[5rem] overflow-hidden shadow-[0_100px_150px_-30px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row relative group">
            <div className="lg:w-1/2 relative aspect-square lg:aspect-auto overflow-hidden">
              <MotionImage 
                src="/case-study-featured.png" 
                alt="Hasil Produksi Jaket Hoodie Premium Chima Konveksi Bandung" 
                fill 
                initial={{ filter: "grayscale(100%)", scale: 1.1 }}
                whileInView={{ filter: "grayscale(0%)", scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="object-cover transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-60 lg:opacity-100" />
              <div className="absolute top-12 left-12 bg-blue-600 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-2xl">
                Case Study
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-24 flex flex-col justify-center relative z-10 text-white">
              <div className="flex gap-2 mb-8 md:mb-12">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-blue-500 md:w-6 md:h-6" fill="currentColor" />)}
              </div>
              <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-10 leading-[0.9] tracking-tighter uppercase">
                SCALING <br /> <span className="text-slate-600 italic">BRAND GLOBAL.</span>
              </h2>
              <p className="text-base md:text-2xl text-slate-400 font-medium leading-relaxed mb-10 md:mb-16">
                "CHIMA KONVEKSI berhasil merealisasikan target produksi 10.000 unit hoodie premium dalam waktu 20 hari kerja dengan standar QC nol cacat. Partner produksi yang sangat handal."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-20">
                <div className="flex items-center gap-4 md:gap-6 group/item">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-blue-500 border border-white/10 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                    <CheckCircle2 size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-black">Industrial QC</div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">Triple Stage Passed</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6 group/item">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-blue-500 border border-white/10 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                    <ShieldCheck size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-black">Export Ready</div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">ISO Standard Grade</div>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/6285520784930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-slate-900 px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-sm md:text-xl flex items-center gap-4 hover:scale-110 transition-all shadow-2xl group w-fit"
              >
                KONSULTASI PROJECT <ArrowRight size={20} className="md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Project Grid - PREMIUM CARDS */}
      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group flex flex-col"
                >
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden relative mb-12 shadow-2xl border border-slate-50">
                    <MotionImage
                      src={project.img}
                      alt={`Hasil Produksi ${project.name} - Chima Konveksi Bandung`}
                      fill
                      initial={{ filter: "grayscale(100%)" }}
                      whileInView={{ filter: "grayscale(0%)" }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute top-10 left-10">
                      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">{project.tag}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl">
                        <ZoomIn size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">{project.cat}</span>
                      <h3 className="text-4xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">{project.name}</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-slate-200" />
                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{project.client}</p>
                      </div>
                    </div>
                    <p className="mt-8 text-slate-500 text-xl font-medium leading-relaxed italic">
                      "{project.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. Final CTA - INDUSTRIAL IMPACT */}
      <section className="py-16 md:py-64 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_100px_150px_-30px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-[8.5rem] font-black text-white mb-8 md:mb-12 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase">
              REALSASIKAN <br /> <span className="text-slate-500 italic">PRODUKSI</span> ANDA.
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed md:leading-tight">
              Konsultasikan detail project Anda bersama spesialis produksi kami.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/6285520784930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-110 transition-all shadow-2xl group"
              >
                MULAI PROJECT SEKARANG
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
