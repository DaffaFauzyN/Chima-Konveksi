'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 md:py-32 px-6 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24 text-center lg:text-left">
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl flex items-center justify-center font-bold text-white text-lg md:text-xl">C</div>
            <span className="font-black tracking-tighter text-xl md:text-3xl text-slate-900 uppercase">CHIMA KONVEKSI</span>
          </div>
          <p className="text-base md:text-xl text-slate-500 leading-relaxed max-w-md font-medium mb-10 md:mb-12">
            Workshop garment spesialis yang menghadirkan kualitas butik dengan ketelitian tinggi, dipercaya oleh brand lokal dan perusahaan nasional.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="https://wa.me/6285520784930" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center transition-all shadow-sm border border-slate-100">
              <span className="text-xs font-black">WA</span>
            </a>
            {['IG', 'LI', 'YT'].map(social => (
              <a key={social} href="#" className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm border border-slate-100">
                <span className="text-xs font-black">{social}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-sm md:text-xl mb-8 md:mb-10 uppercase tracking-[0.2em] text-slate-900">Navigasi</h4>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-lg text-slate-500 font-bold">
            <li><Link href="/services" className="hover:text-slate-900 transition-colors">Layanan Produksi</Link></li>
            <li><Link href="/portfolio" className="hover:text-slate-900 transition-colors">Portfolio Karya</Link></li>
            <li><Link href="/blog" className="hover:text-slate-900 transition-colors">Blog Konveksi</Link></li>
            <li><Link href="/about" className="hover:text-slate-900 transition-colors">Tentang Kami</Link></li>
            <li><a href="https://wa.me/6285520784930" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm md:text-xl mb-8 md:mb-10 uppercase tracking-[0.2em] text-slate-900">Legalitas</h4>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-lg text-slate-500 font-bold">
            <li><Link href="/terms" className="hover:text-slate-900 transition-colors">Syarat & Ketentuan</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Kebijakan Privasi</Link></li>
            <li><Link href="/production-guarantee" className="hover:text-slate-900 transition-colors">Garansi Produksi</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 md:mt-32 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
        <p className="text-[10px] md:text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">© 2026 CHIMA KONVEKSI INDONESIA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 md:gap-12 text-[10px] md:text-xs text-slate-400 font-black uppercase tracking-[0.2em]">
          <Link href="/security" className="hover:text-slate-900 transition-colors">Security</Link>
          <Link href="/status" className="hover:text-slate-900 transition-colors">Status</Link>
          <a href="/sitemap.xml" className="hover:text-slate-900 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
