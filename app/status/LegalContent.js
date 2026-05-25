'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, CalendarCheck, Factory, Users, MessageCircle } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function LegalContent() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Beranda", path: "/" },
        { name: "Status Layanan", path: "/status" }
      ]} />

      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/industrial_abstract_pattern_1778119807716.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Service Status</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              STATUS <br /><span className="text-slate-500 italic">LAYANAN.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Informasi terkini mengenai jam operasional, antrian produksi, dan ketersediaan layanan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              { icon: Clock, label: "Jam Operasional", value: "Senin - Sabtu", sub: "08.00 - 17.00 WIB", status: "Operasional" },
              { icon: CalendarCheck, label: "Estimasi Produksi", value: "14-21 Hari", sub: "Batch kecil (2-4 lusin)", status: "Normal" },
              { icon: Factory, label: "Kapasitas Produksi", value: "20.000 Pcs/Bulan", sub: "Semua kategori", status: "Tersedia" },
              { icon: Users, label: "Antrian Proyek Aktif", value: "12 Proyek", sub: "Sedang diproses", status: "Normal" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <item.icon size={26} className="text-white" />
                  </div>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-black uppercase tracking-wider rounded-full">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">{item.label}</h3>
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1 tracking-tighter">{item.value}</div>
                <p className="text-slate-500 font-medium">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center p-12 md:p-20 bg-slate-900 rounded-[4rem]"
          >
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              PUNYA PERTANYAAN?
            </h3>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
              Tim kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <a
              href="https://wa.me/6285520784930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg items-center gap-3 hover:bg-blue-700 transition-all shadow-xl"
            >
              <MessageCircle size={22} />
              HUBUNGI KAMI
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
