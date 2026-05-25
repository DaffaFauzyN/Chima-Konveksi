'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ChevronRight, MessageCircle, CheckCircle2, Factory,
  ShieldCheck, Zap, Star, AlertCircle, Clock,
  ThumbsDown, ArrowRight, Play, Package, Users, MapPin, Mail, Phone
} from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function HomeContent() {
  const MotionImage = motion(Image);
  const finalCtaRef = useRef(null);
  const isFinalCtaInView = useInView(finalCtaRef, { amount: 0.1 });

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }]} />

      {/* 3. Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.webp"
            alt="Workshop Chima Konveksi Bandung - Jasa Konveksi Kaos, Hoodie & Seragam Custom Premium"
            fill
            priority
            className="object-cover opacity-30 grayscale scale-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-full mb-8 md:mb-10 shadow-2xl mx-4 animate-fade-in-up">
            <span className="flex h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-[8px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/90">
              #1 Konveksi Terpercaya & Berpengalaman
            </span>
          </div>

          <h1 className="text-5xl md:text-9xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8 md:mb-12 animate-fade-in-up-slow">
            KUALITAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-500 italic">EKSPOR</span> <br />
            HARGA LOKAL.
          </h1>

          <p className="text-lg md:text-3xl text-slate-300 max-w-4xl mx-auto leading-tight mb-12 md:mb-16 font-medium px-4 animate-fade-in-up-delay-1">
            Workshop produksi garment spesialis yang menghadirkan kualitas butik <br className="hidden md:block" />
            dengan ketelitian di setiap jahitan untuk kebutuhan brand & perusahaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-6 animate-fade-in-up-delay-2">
            <a 
              href="https://wa.me/6285520784930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-5 md:px-12 md:py-7 rounded-2xl md:rounded-full font-black text-base md:text-xl flex items-center justify-center gap-3 md:gap-4 hover:bg-blue-500 transition-all shadow-xl hover:scale-105 active:scale-95 group"
            >
              Hubungi Sekarang
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform md:w-7 md:h-7" />
            </a>
            <Link 
              href="/portfolio" 
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border-2 border-white/20 px-8 py-5 md:px-12 md:py-7 rounded-2xl md:rounded-full font-black text-base md:text-xl hover:bg-white/10 transition-all shadow-xl text-center"
            >
              Cek Portfolio
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
        </div>
      </section>

      {/* 4. Tentang Kami */}
      <section className="relative py-16 md:py-56 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern_garment_studio_1778119788748.png"
            alt="Studio Garment Chima Konveksi Bandung"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-blue-600 uppercase mb-8 block">Legacy & Excellence</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-12">
                DEDIKASI <br /> <span className="text-slate-400 italic">PADA KUALITAS.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12">
                Sejak 2008, CHIMA KONVEKSI telah menjadi standar workshop garment berkualitas di Bandung. Kami menggabungkan teknik jahit tradisional yang teliti dengan pendekatan produksi yang personal dan modern.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-12">
                <div>
                  <div className="text-5xl md:text-7xl font-black text-slate-900">16+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Years Exp.</div>
                </div>
                <div>
                  <div className="text-5xl md:text-7xl font-black text-slate-900">1M+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Pcs Produced</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-slate-900 rounded-[4rem] rotate-3 shadow-2xl" />
              <MotionImage
                src="/bg-sewing.webp"
                alt="Proses Jahit Pakaian Custom di Workshop Chima Konveksi Bandung"
                fill
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="object-cover rounded-[4rem] -rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="font-black text-slate-900 uppercase tracking-tighter">Certified Quality</div>
                </div>
                <p className="text-xs text-slate-400 font-bold max-w-[180px]">Setiap produk melewati 3 tahap pengecekan kualitas sebelum sampai ke tangan Anda.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof (Stats) */}
      <section className="relative z-20 -mt-10 md:-mt-24 mb-16 md:mb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-3xl rounded-[2rem] md:rounded-[5rem] p-8 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            {[
              { label: "Tahun Berdiri", value: "16+", desc: "Sejak 2008" },
              { label: "Proyek Selesai", value: "3.5K+", desc: "Klien Puas" },
              { label: "Total Produksi", value: "2M+", desc: "Kualitas Premium" },
              { label: "Tingkat Kepuasan", value: "99%", desc: "Repeat Order" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left flex flex-col items-center md:items-start group"
              >
                <span className="text-5xl md:text-8xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                  {stat.label}
                </span>
                <div className="h-1 w-10 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits Section - DARK MODE */}
      <section className="relative py-16 md:py-56 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial_abstract_pattern_1778119807716.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
              KEUNGGULAN <br /> <span className="text-slate-600 italic">TANPA TANDING.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { icon: Zap, title: "Harga Kompetitif", desc: "Sistem efisiensi produksi kami memungkinkan harga yang lebih bersahabat tanpa menurunkan standar kualitas jahit." },
              { icon: ShieldCheck, title: "QC 3 Lapis", desc: "Setiap helai pakaian melewati pengecekan di bagian pemotongan, penjahitan, hingga tahap finishing akhir." },
              { icon: Clock, title: "Tepat Waktu", desc: "Kami memahami pentingnya deadline bagi bisnis Anda. Ketepatan waktu adalah prioritas nomor satu kami." },
              { icon: ArrowRight, title: "Garansi Kepuasan", desc: "Jika ada cacat produksi yang tidak sesuai dengan kesepakatan, kami siap bertanggung jawab penuh." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 md:p-16 rounded-[4rem] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-start group hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(37,99,235,0.3)] group-hover:rotate-12 transition-transform">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-white uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-lg md:text-xl">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Product Categories - BENTO GRID */}
      <section id="categories" className="relative py-16 md:py-56 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 md:mb-40 gap-12">
            <div className="max-w-4xl">
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-400 uppercase mb-8 block">Product Categories</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                SOLUSI <br /> <span className="text-slate-400">GARMENT LENGKAP.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[900px]">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 relative rounded-[4rem] overflow-hidden group shadow-2xl"
            >
              <MotionImage 
                src="/port-corp.webp" 
                alt="Produksi Kemeja Kantor & Seragam PDL Chima Konveksi Bandung" 
                fill 
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="object-cover group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12">
                <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Formal & Uniform</span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6">KEMEJA & PDL</h3>
                <p className="text-slate-300 max-w-md font-medium text-lg">Pilihan utama untuk seragam perusahaan dan instansi dengan standar kerapihan tinggi.</p>
              </div>
            </motion.div>

            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6 md:gap-8">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative rounded-[4rem] overflow-hidden group shadow-2xl bg-slate-100"
              >
                <MotionImage 
                  src="/portfolio-hoodie.png" 
                  alt="Produksi Jaket & Hoodie Custom Chima Konveksi Bandung" 
                  fill 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1 }}
                  className="object-cover transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white mb-2">JAKET & HOODIE</h3>
                  <p className="text-slate-200 text-sm font-medium">Material premium & teknik jahit distro.</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative rounded-[4rem] overflow-hidden group shadow-2xl bg-slate-100"
              >
                <MotionImage 
                  src="/portfolio-pants.png" 
                  alt="Produksi Celana Chino Custom Chima Konveksi Bandung" 
                  fill 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1 }}
                  className="object-cover transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white mb-2">CELANA CHINO</h3>
                  <p className="text-slate-200 text-sm font-medium">Konstruksi kuat & fitting yang pas.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Proses Produksi - FABRIC TEXTURE BACKGROUND */}
      <section className="relative py-16 md:py-56 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium_fabric_texture_1778119767955.png"
            alt=""
            fill
            className="object-cover opacity-5 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-8 block">Workflow Process</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter uppercase">
              PROSES <br /> <span className="text-slate-400 italic">TANPA CELAH.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Diskusi Desain", desc: "Diskusi konsep, pemilihan material, dan estimasi biaya produksi yang transparan.", icon: Users },
              { step: "02", title: "Sampling", desc: "Pembuatan sampel fisik untuk memastikan detail sesuai sebelum naik produksi massal.", icon: Zap },
              { step: "03", title: "Mass Production", desc: "Produksi massal oleh tim ahli dengan pengawasan QC ketat di setiap tahapannya.", icon: Factory }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 relative group"
              >
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:bg-blue-600 transition-colors">
                  <item.icon size={28} />
                </div>
                <div className="text-6xl font-black text-slate-100 mb-6 absolute top-10 right-12 group-hover:text-blue-50 transition-colors">{item.step}</div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">{item.title}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Komitmen / QC - INDUSTRIAL DARK */}
      <section id="why-us" className="relative py-16 md:py-56 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial_abstract_pattern_1778119807716.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8 block">Our Commitment</span>
              <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter">
                KUALITAS <br /> <span className="text-slate-600 italic">TANPA KOMPROMI.</span>
              </h2>
              <div className="space-y-10 text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
              <p>
                Berawal dari sebuah workshop di Bandung, CHIMA KONVEKSI kini tumbuh menjadi pilihan utama bagi brand fashion dan perusahaan yang mencari kualitas jahit premium dengan pelayanan yang personal.
              </p>
              <p className="text-slate-900 font-black">
                Filosofi kami sederhana: "Setiap jahitan adalah representasi dari komitmen kami pada detail dan kepuasan Anda."
              </p>
              {[
                  { title: "Presisi Jahitan", desc: "Setiap jahitan dipastikan lurus dan kuat menggunakan mesin industri terbaru." },
                  { title: "Garansi Revisi", desc: "Tersedia layanan perbaikan jika hasil tidak sesuai dengan spesifikasi yang disepakati." },
                  { title: "Transparansi Bahan", desc: "Hanya menggunakan material terbaik sesuai permintaan tanpa ada pengurangan spek." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[5rem] blur-[120px] animate-pulse" />
              <MotionImage
                src="/case-study-featured.png"
                alt="Proses Quality Control 3 Lapis Chima Konveksi Bandung"
                fill
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="object-cover rounded-[5rem] transition-all duration-1000 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Portofolio & Trusted By */}
      <section id="portfolio" className="relative py-16 md:py-56 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-slate-400 uppercase mb-8 block">Trusted Legacy</span>
            <h2 className="text-5xl md:text-[8rem] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              JEJAK <br /> <span className="text-slate-400 italic">KARYA KAMI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { name: "PT Adaro", qty: "11K+ Pcs", cat: "Corporate" },
              { name: "Sinergi", qty: "3K+ Pcs", cat: "Uniform" },
              { name: "Hammerstout", qty: "1K+ Pcs", cat: "Fashion" },
              { name: "Timebomb", qty: "800+ Pcs", cat: "Fashion" },
              { name: "KRSP", qty: "600+ Pcs", cat: "Uniform" }
            ].map((client, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-100 text-center group transition-all shadow-sm hover:shadow-2xl hover:bg-white"
              >
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">{client.qty}</div>
                <div className="text-xl md:text-2xl text-slate-900 font-black mb-1">{client.name}</div>
                <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">{client.cat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials - FABRIC TEXTURE BACKGROUND */}
      <section className="relative py-16 md:py-56 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium_fabric_texture_1778119767955.png"
            alt=""
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 md:mb-40">
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-12">
              KATA MEREKA <br /> <span className="text-slate-400">TENTANG CHIMA.</span>
            </h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={28} className="text-blue-600" fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "Budi Santoso", role: "Founder, Urbanwear", review: "Gila sih rapi banget jahitannya. Selama ini susah cari konveksi yang detailnya sedetail ini." },
              { name: "Siska Saraswati", role: "HR Manager, TechCorp", review: "Pesan seragam kantor 500 pcs untuk event tahunan. Kualitas kain premium & bordir rapi." },
              { name: "Andi Wijaya", role: "Owner, Local Brand", review: "Sistem komunikasinya enak banget. Adminnya ngerti teknis bahan jadi gampang diskusi." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-2xl border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-lg md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 md:mb-12 italic relative z-10">
                  “{item.review}”
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-xl">{item.name}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final High-Impact CTA */}
      <section ref={finalCtaRef} className="relative py-20 md:py-64 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[7rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-block bg-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-8 md:mb-12 shadow-2xl"
            >
              Start Your Production Now
            </motion.div>
            <h2 className="text-4xl md:text-[9.5rem] font-black text-white mb-8 md:mb-12 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase">
              WUJUDKAN <br /> <span className="text-slate-500 italic">PRODUKSI</span> IMPIAN.
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium max-w-2xl mx-auto leading-relaxed md:leading-tight">
              Klik tombol di bawah untuk terhubung langsung dengan tim produksi kami di WhatsApp.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/6285520784930" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
              >
                HUBUNGI KAMI SEKARANG
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WA Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        href="https://wa.me/6285520784930"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.5)] hover:scale-110 transition-all group"
      >
        <MessageCircle size={28} className="md:hidden" />
        <MessageCircle size={32} className="hidden md:block group-hover:rotate-12 transition-transform" />
      </motion.a>
    </main>
  );
}
