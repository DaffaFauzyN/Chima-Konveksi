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
        { name: "Syarat & Ketentuan", path: "/terms" }
      ]} />

      <section className="pt-32 pb-16 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/industrial_abstract_pattern_1778119807716.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Legal</span>
            <h1 className="text-4xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              SYARAT & <br /><span className="text-slate-500 italic">KETENTUAN.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Dengan menggunakan layanan Chima Konveksi, Anda menyetujui syarat dan ketentuan yang berlaku.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-16">
            {[
              {
                title: "1. Pemesanan & Kontrak",
                content: "Pemesanan dianggap sah setelah kedua belah pihak menandatangani kontrak kerja sama dan pembayaran down payment (DP) sebesar 50% telah diterima. Seluruh spesifikasi produk, material, ukuran, dan tenggat waktu produksi akan tercantum dalam kontrak sebagai acuan utama."
              },
              {
                title: "2. MOQ (Minimum Order Quantity)",
                content: "Standar MOQ kami adalah 24 pcs per desain per warna. Untuk desain dengan variasi ukuran (S-XXL), minimal pemesanan tetap 24 pcs. Kebutuhan di bawah MOQ dapat didiskusikan dengan tim kami untuk solusi terbaik."
              },
              {
                title: "3. Revisi Desain",
                content: "Revisi desain dapat dilakukan maksimal 3 kali sebelum produksi massal dimulai. Setiap revisi tambahan akan dikenakan biaya sesuai tingkat kompleksitas. Seluruh revisi harus dikomunikasikan secara tertulis melalui WhatsApp atau email."
              },
              {
                title: "4. Pembayaran",
                content: "Sistem pembayaran: 50% DP di awal pemesanan, 50% pelunasan setelah produk selesai diproduksi dan sebelum dikirimkan. Pembayaran dapat dilakukan melalui transfer bank (BCA, Mandiri, BRI) atau cash. Pembayaran yang terlambat dapat menyebabkan penundaan pengiriman."
              },
              {
                title: "5. Pengiriman",
                content: "Biaya pengiriman ditanggung oleh klien. Kami bekerja sama dengan berbagai ekspedisi cargo untuk memastikan biaya kirim yang efisien. Risiko kerusakan selama pengiriman menjadi tanggung jawah pihak ekspedisi. Kami akan memastikan produk dikemas dengan standar pengemasan yang aman."
              },
              {
                title: "6. Pembatalan",
                content: "Pembatalan pesanan oleh klien akan dikenakan biaya sesuai progres produksi yang sudah berjalan. Jika produksi belum dimulai, DP dapat dikembalikan 50%. Jika material sudah dipotong atau produksi sudah berjalan, DP tidak dapat dikembalikan."
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
