'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { blogPosts } from './posts';

export default function BlogContent() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Beranda", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium_fabric_texture_1778119767955.png"
            alt=""
            fill
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">Insight & Knowledge</span>
            <h1 className="text-5xl md:text-[9rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-12 uppercase">
              BLOG <br /> <span className="text-slate-500 italic">KONVEKSI.</span>
            </h1>
            <p className="text-base md:text-3xl text-slate-400 font-medium leading-relaxed md:leading-tight max-w-3xl">
              Artikel, panduan, dan wawasan seputar industri garment, teknik sablon, dan tips membangun brand fashion dari tim Chima Konveksi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/9] rounded-[3rem] overflow-hidden relative mb-8 shadow-2xl border border-slate-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-8 left-8">
                      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">{post.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-6 mb-4 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest group-hover:gap-5 transition-all">
                      Baca Selengkapnya <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-64 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase">
              SIAP <span className="text-slate-500 italic">PRODUKSI?</span>
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed">
              Konsultasikan kebutuhan produksi Anda dengan tim ahli kami.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6285520784930"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-110 transition-all shadow-2xl group"
              >
                MULAI PRODUKSI SEKARANG
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
