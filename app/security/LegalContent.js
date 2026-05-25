'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, Eye, FileText } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function LegalContent() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Beranda", path: "/" },
        { name: "Keamanan", path: "/security" }
      ]} />

      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/industrial_abstract_pattern_1778119807716.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Security</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              KEAMANAN <br /><span className="text-slate-500 italic">DATA.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Komitmen kami dalam menjaga kerahasiaan dan keamanan data klien.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {[
              {
                icon: Lock,
                title: "Enkripsi Data",
                content: "Seluruh data yang dikirimkan melalui website dan komunikasi digital kami dilindungi dengan enkripsi SSL/TLS standar industri. Informasi pribadi dan detail proyek Anda aman dari intersepsi pihak ketiga."
              },
              {
                icon: Server,
                title: "Infrastruktur Aman",
                content: "Kami menggunakan infrastruktur server yang aman dengan akses terbatas. Hanya personel yang berwenang yang memiliki akses ke data klien, dan semua akses dicatat serta diaudit secara berkala."
              },
              {
                icon: Eye,
                title: "Privasi Desain",
                content: "Desain dan artwork yang Anda kirimkan kepada kami bersifat rahasia. Kami tidak akan membagikan, menggunakan, atau mendistribusikan desain Anda tanpa izin tertulis. Portofolio yang kami tampilkan di website hanya atas persetujuan klien."
              },
              {
                icon: FileText,
                title: "Kepatuhan Regulasi",
                content: "Kami mematuhi peraturan perlindungan data yang berlaku di Indonesia (UU ITE) dan standar internasional dalam pengelolaan data pribadi."
              },
              {
                icon: ShieldCheck,
                title: "Audit Berkala",
                content: "Sistem keamanan kami diaudit secara berkala untuk memastikan tidak ada celah keamanan. Pembaruan keamanan diterapkan secara proaktif untuk melindungi data klien dari ancaman siber terbaru."
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-8 items-start border-b border-slate-100 pb-16 last:border-0"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 mt-1">
                  <section.icon size={28} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter">{section.title}</h2>
                  <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
