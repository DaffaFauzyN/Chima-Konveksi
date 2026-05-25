'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, MessageCircle, ChevronRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { blogPosts } from "../posts";

export default function BlogPostContent({ post }) {
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Beranda", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]} />
      <article>
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-900 text-white px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs uppercase tracking-widest mb-12"
              >
                <ArrowLeft size={16} /> Kembali ke Blog
              </Link>
              <div className="flex items-center gap-6 mb-6 text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {post.readTime}
                </span>
                <span>{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-8xl font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8">
                {post.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-56 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg md:prose-2xl prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-h2:text-4xl md:prose-h2:text-6xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium prose-strong:text-slate-900 prose-ul:font-medium prose-li:text-slate-600 prose-table:border-collapse prose-th:bg-slate-50 prose-th:text-left prose-th:font-black prose-td:border prose-td:border-slate-100 prose-td:p-4"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map((line) => {
                    if (line.startsWith('## ')) {
                      return `<h2>${line.replace('## ', '')}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3>${line.replace('### ', '')}</h3>`;
                    }
                    if (line.startsWith('|')) {
                      return line;
                    }
                    if (line.startsWith('- **')) {
                      const match = line.match(/- \*\*(.+?)\*\*.*— (.+)/);
                      if (match) {
                        return `<li><strong>${match[1]}</strong> — ${match[2]}</li>`;
                      }
                    }
                    if (line.match(/^\d+\. /)) {
                      return `<li>${line.replace(/^\d+\. /, '')}</li>`;
                    }
                    if (line.trim() === '') {
                      return '';
                    }
                    if (line.startsWith('*Harga') || line.startsWith('*')) {
                      return `<p class="text-sm text-slate-400 italic mt-2">${line.replace(/\*/g, '')}</p>`;
                    }
                    return `<p>${line}</p>`;
                  })
                  .filter(Boolean)
                  .join('\n'),
              }}
            />
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-56 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-16 md:mb-24 tracking-tighter uppercase">
              ARTIKEL <span className="text-slate-400 italic">LAINNYA.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="aspect-[16/9] rounded-[3rem] overflow-hidden relative mb-8 shadow-2xl border border-slate-100">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tighter group-hover:text-blue-600 transition-colors">
                    {rp.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                    Baca <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-64 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/case-study-featured.png" alt="" fill className="object-cover grayscale scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase">
              KONSULTASI <span className="text-slate-500 italic">GRATIS.</span>
            </h2>
            <p className="text-base md:text-3xl text-slate-400 mb-12 md:mb-20 font-medium leading-relaxed">
              Tim kami siap membantu Anda mewujudkan produksi impian.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6285520784930"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-white text-slate-900 px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-full font-black text-sm md:text-2xl items-center justify-center gap-4 md:gap-6 hover:scale-110 transition-all shadow-2xl group"
              >
                HUBUNGI KAMI
                <MessageCircle size={20} className="text-blue-600 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
