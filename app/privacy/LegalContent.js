'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function LegalContent() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Beranda", path: "/" },
        { name: "Kebijakan Privasi", path: "/privacy" }
      ]} />

      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/industrial_abstract_pattern_1778119807716.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Privacy</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              KEBIJAKAN <br /><span className="text-slate-500 italic">PRIVASI.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Komitmen kami dalam melindungi data pribadi Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {[
              {
                title: "1. Informasi yang Kami Kumpulkan",
                content: "Kami mengumpulkan informasi yang Anda berikan secara langsung melalui formulir kontak, WhatsApp, atau email, termasuk nama, nomor telepon, alamat email, dan detail proyek produksi. Informasi ini digunakan semata-mata untuk keperluan komunikasi dan proses produksi."
              },
              {
                title: "2. Penggunaan Informasi",
                content: "Data pribadi Anda hanya digunakan untuk: memproses pesanan dan produksi, berkomunikasi terkait proyek, memberikan informasi layanan yang relevan, serta meningkatkan kualitas layanan kami. Kami tidak akan pernah menjual atau menyewakan data pribadi Anda kepada pihak ketiga."
              },
              {
                title: "3. Penyimpanan & Keamanan Data",
                content: "Data pribadi disimpan secara aman dalam sistem internal kami dengan akses terbatas hanya untuk tim yang membutuhkan. Kami menerapkan protokol keamanan standar industri untuk mencegah akses tidak sah, kebocoran data, atau penyalahgunaan informasi."
              },
              {
                title: "4. Hak Anda",
                content: "Anda berhak untuk meminta akses, koreksi, atau penghapusan data pribadi Anda yang kami simpan. Untuk mengajukan permintaan tersebut, silakan hubungi kami melalui WhatsApp di +62 855-2078-4930."
              },
              {
                title: "5. Cookie & Tracking",
                content: "Website kami dapat menggunakan cookie untuk meningkatkan pengalaman browsing. Cookie yang digunakan bersifat anonim dan tidak mengumpulkan data pribadi. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda."
              },
              {
                title: "6. Perubahan Kebijakan",
                content: "Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan diinformasikan melalui website kami. Dengan terus menggunakan layanan kami, Anda menyetujui pembaruan kebijakan privasi yang berlaku."
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-slate-100 pb-16 last:border-0"
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter">{section.title}</h2>
                <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
