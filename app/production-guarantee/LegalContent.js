'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, RefreshCw, Truck, Headphones } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function LegalContent() {
  const guarantees = [
    { icon: ShieldCheck, title: "QC 3 Lapis", desc: "Setiap produk melewati pengecekan ketat di 3 tahap: pemotongan, penjahitan, dan finishing akhir sebelum dikirim." },
    { icon: RefreshCw, title: "Garansi Revisi", desc: "Jika hasil akhir tidak sesuai dengan spesifikasi yang disepakati dalam kontrak, kami siap melakukan perbaikan tanpa biaya tambahan." },
    { icon: CheckCircle2, title: "Kepuasan Material", desc: "Kami hanya menggunakan material yang sesuai dengan permintaan Anda. Tidak ada pengurangan spek tanpa persetujuan." },
    { icon: Truck, title: "Pengemasan Aman", desc: "Setiap produk dikemas dengan standar tinggi untuk mencegah kerusakan selama proses pengiriman." },
    { icon: Headphones, title: "Dukungan Penuh", desc: "Tim kami siap membantu Anda dari proses konsultasi awal hingga produk diterima dengan baik." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Beranda", path: "/" },
        { name: "Garansi Produksi", path: "/production-guarantee" }
      ]} />

      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/industrial_abstract_pattern_1778119807716.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Warranty</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              GARANSI <br /><span className="text-slate-500 italic">PRODUKSI.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Setiap produk yang kami hasilkan dilindungi oleh standar garansi ketat untuk memastikan kepuasan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-center"
          >
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              SIAP MULAI PRODUKSI?
            </h3>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
              Setiap project mendapatkan garansi penuh. Hubungi kami untuk konsultasi gratis.
            </p>
            <a
              href="https://wa.me/6285520784930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl"
            >
              HUBUNGI KAMI
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
