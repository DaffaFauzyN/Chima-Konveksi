'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Send, ChevronRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function ContactContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Berapa MOQ (Minimum Order Quantity)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MOQ standar kami adalah 24 pcs per desain. Untuk project korporat skala besar, kami memiliki kapasitas produksi hingga 20.000 pcs per bulan."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama estimasi pengerjaan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Untuk order batch kecil (2-4 lusin) estimasi ±14-21 hari kerja. Untuk order ribuan pcs estimasi ±30-45 hari kerja tergantung antrian produksi."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah melayani pengiriman luar kota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sangat melayani. Kami memiliki kerjasama dengan ekspedisi cargo darat, laut, dan udara untuk memastikan biaya kirim tetap efisien."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Kontak", path: "/contact" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. Page Header - INDUSTRIAL DARK */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Global Connectivity</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              HUBUNGI <br /> <span className="text-slate-500 italic">TIM KAMI.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Punya visi brand atau kebutuhan seragam skala besar? Mari diskusikan detail produksinya bersama konsultan ahli kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Grid & Form - PREMIUM LAYOUT */}
      <section className="py-32 md:py-56 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                {[
                  { icon: MessageCircle, title: "WhatsApp Direct", val: "+62 855-2078-4930", sub: "Fast Response (08:00 - 21:00)", color: "bg-green-500" },
                  { icon: MapPin, title: "Production HQ", val: "Bandung, West Java", sub: "Jl. Dirgantara III, Gempolsari", color: "bg-blue-600" },
                  { icon: Clock, title: "Working Hours", val: "Mon - Sat", sub: "08:00 AM - 17:00 PM", color: "bg-slate-900" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 md:gap-8 items-center bg-slate-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                      <item.icon size={24} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 md:mb-2">{item.title}</h4>
                      <div className="text-lg md:text-2xl font-black text-slate-900 mb-0.5 md:mb-1">{item.val}</div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-tight">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form - GLASSMORPHISM CARD */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                  <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter leading-none">
                    KIRIM <br /> <span className="text-slate-500 italic uppercase">Lead Pesan.</span>
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('name');
                      const whatsapp = formData.get('whatsapp');
                      const category = formData.get('category');
                      const message = formData.get('message');

                      const text = `Halo Chima Konveksi,\n\nSaya ingin memesan/tanya tentang produksi.\n\n*Nama:* ${name}\n*Nomor WA:* ${whatsapp}\n*Kategori:* ${category}\n*Pesan:* ${message}`;
                      const encodedText = encodeURIComponent(text);
                      window.open(`https://wa.me/6285520784930?text=${encodedText}`, '_blank');
                    }}
                    className="space-y-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Nama Lengkap</label>
                        <input name="name" type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-bold focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition-all outline-none" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Nomor WhatsApp</label>
                        <input name="whatsapp" type="tel" required placeholder="+62 8xx..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-bold focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Layanan Yang Dibutuhkan</label>
                      <select name="category" required className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-bold focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition-all outline-none appearance-none">
                        <option value="" className="bg-slate-900">Pilih Kategori...</option>
                        <option value="Fashion Brand" className="bg-slate-900">Fashion Brand (Premium Distro)</option>
                        <option value="Seragam Perusahaan" className="bg-slate-900">Seragam Kantor / Instansi</option>
                        <option value="Merchandise Event" className="bg-slate-900">Merchandise / Merchandise Event</option>
                        <option value="Lainnya" className="bg-slate-900">Lainnya</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Detail Brief Proyek</label>
                      <textarea name="message" required rows={5} placeholder="Jelaskan kebutuhan produksi Anda secara detail..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-bold focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition-all outline-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-5 md:py-8 rounded-xl md:rounded-2xl font-black text-sm md:text-2xl flex items-center justify-center gap-4 md:gap-6 hover:bg-blue-700 transition-all shadow-2xl group">
                      KIRIM KE WHATSAPP
                      <Send size={20} className="md:w-7 md:h-7 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ - CONSISTENT PREMIUM STYLE */}
      <section className="py-32 md:py-56 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-40">
            <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Help Center</span>
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] md:leading-none mb-8">
              FREQUENTLY <br /> <span className="text-slate-400 italic uppercase">Asked.</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "Berapa MOQ (Minimum Order Quantity)?", a: "MOQ standar kami adalah 24 pcs per desain. Untuk project korporat skala besar, kami memiliki kapasitas produksi hingga 20.000 pcs per bulan." },
              { q: "Berapa lama estimasi pengerjaan?", a: "Untuk order batch kecil (2-4 lusin) estimasi ±14-21 hari kerja. Untuk order ribuan pcs estimasi ±30-45 hari kerja tergantung antrian produksi." },
              { q: "Apakah melayani pengiriman luar kota?", a: "Sangat melayani. Kami memiliki kerjasama dengan ekspedisi cargo darat, laut, dan udara untuk memastikan biaya kirim tetap efisien." }
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-10 rounded-[3.5rem] cursor-pointer group shadow-xl"
              >
                <summary className="flex justify-between items-center font-black text-slate-900 list-none text-2xl tracking-tighter">
                  {faq.q}
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-open:bg-blue-600 group-open:text-white transition-all">
                    <ChevronRight size={24} className="group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <p className="mt-10 text-slate-500 font-medium text-lg leading-relaxed border-t border-slate-100 pt-10">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
