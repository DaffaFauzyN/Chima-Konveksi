'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Package, Factory, 
  MessageCircle, CheckCircle2, ChevronRight 
} from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function ServicesContent() {
  const MotionImage = motion(Image);
  const services = [
    {
      title: "Fashion Brand Manufacturing",
      desc: "Layanan produksi full-custom untuk brand fashion. Mulai dari pemilihan bahan grade A, pembuatan pola (pattern making), hingga finishing premium.",
      features: ["Low MOQ 24pcs", "Fabric Sourcing", "Custom Labeling"],
      image: "/portfolio-hoodie.png",
      color: "bg-blue-500"
    },
    {
      title: "Corporate Identity & Uniform",
      desc: "Produksi seragam kantor, polo shirt instansi, dan kemeja kerja dengan standar kerapihan tinggi dan bordir komputer presisi.",
      features: ["Bahan Premium Pique", "High-Density Embroidery", "Size Grading"],
      image: "/portfolio-polo.png",
      color: "bg-slate-900"
    },
    {
      title: "Event & Community Merch",
      desc: "Solusi merchandise berkualitas untuk event, komunitas, atau merchandise promosi perusahaan dengan waktu produksi yang cepat.",
      features: ["Sablon Plastisol/DTF", "Express Production", "Bulk Pricing"],
      image: "/portfolio-tee.png",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Layanan", path: "/services" }]} />
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MotionImage 
            src="/case-study-featured.png" 
            alt="Layanan Produksi Garment Premium Chima Konveksi Bandung" 
            fill 
            initial={{ filter: "grayscale(100%)", scale: 1.1 }}
            animate={{ filter: "grayscale(0%)", scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Exclusive Workshop Solutions</span>
            <h1 className="text-4xl md:text-[9rem] font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter mb-12">
              LAYANAN <br /> <span className="text-slate-500 italic">PRODUKSI</span> <br /> PREMIUM.
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Kami menghadirkan workshop produksi garment modern yang menggabungkan ketelitian tangan ahli dengan standar kualitas brand internasional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Detailed Grid */}
      <section className="py-16 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24 md:space-y-64">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-32 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${service.color} rounded-2xl md:rounded-[2rem] mb-8 md:mb-10 shadow-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform`}>
                    <Factory size={28} className="md:w-9 md:h-9" />
                  </div>
                  <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-8 md:mb-10 leading-[0.9] tracking-tighter uppercase">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 md:mb-12">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-black text-slate-800">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative aspect-square w-full">
                  <div className="absolute inset-0 bg-slate-900 rounded-[3rem] md:rounded-[5rem] rotate-3 z-0 shadow-2xl" />
                  <MotionImage 
                    src={service.image} 
                    alt={`${service.title} - Chima Konveksi Bandung`} 
                    fill 
                    initial={{ filter: "grayscale(100%)" }}
                    whileInView={{ filter: "grayscale(0%)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="object-cover rounded-[3rem] md:rounded-[5rem] relative z-10 shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-1000" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Production Process - FABRIC TEXTURE BACKGROUND */}
      <section className="py-16 md:py-56 bg-slate-50 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium_fabric_texture_1778119767955.png"
            alt=""
            fill
            className="object-cover opacity-5 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-40">
            <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Operational Workflow</span>
            <h2 className="text-4xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] md:leading-[0.85] uppercase">
              BAGAIMANA KAMI <br /> <span className="text-slate-400 italic">MENGEKSEKUSI.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Pemetaan kebutuhan brand, riset bahan, dan penentuan target budget." },
              { step: "02", title: "Prototyping", desc: "Pembuatan sampel fisik untuk validasi desain dan fitting sebelum massal." },
              { step: "03", title: "Execution", desc: "Produksi massal oleh tim master tailor dengan pengawasan kualitas berlapis." },
              { step: "04", title: "Audit QC", desc: "Pengecekan akhir per-item untuk memastikan nol cacat produksi." },
              { step: "05", title: "Logistics", desc: "Packing standar ekspor dan pengiriman aman ke seluruh titik di Indonesia." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl group hover:bg-slate-900 transition-all duration-700"
              >
                <span className="text-5xl font-black text-slate-100 group-hover:text-white/10 transition-colors mb-8 block">
                  {item.step}
                </span>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-6">
                  {item.title}
                </h3>
                <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA - INDUSTRIAL IMPACT */}
      <section className="py-16 md:py-64 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase">
              MULAI <span className="text-slate-500 italic">PRODUKSI</span> <br /> BRAND ANDA.
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed md:leading-tight">
              Klik tombol di bawah untuk terhubung langsung dengan tim ahli kami.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/6285520784930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-110 transition-all shadow-2xl group"
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
