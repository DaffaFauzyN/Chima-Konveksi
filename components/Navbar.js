'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Layanan', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <>
      {/* 1. Top Contact Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 px-4 text-[9px] md:text-xs border-b border-white/5 relative z-[60]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={10} className="text-blue-500" /> Bandung</span>
          </div>
          <div className="flex items-center font-bold text-white">
            <span className="flex items-center gap-1.5"><Phone size={10} className="text-green-500" /> +62 855-2078-4930</span>
          </div>
        </div>
      </div>

      {/* 2. Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 px-4 shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-28">
          <Link href="/" className="flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity shrink-0">
            <div className="w-8 h-8 md:w-14 md:h-14 bg-slate-900 rounded-lg md:rounded-[1.5rem] flex items-center justify-center font-bold text-white shadow-lg text-sm md:text-2xl transform rotate-3">C</div>
            <span className="font-black tracking-tighter text-xs sm:text-sm md:text-3xl text-slate-900 uppercase">CHIMA KONVEKSI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/6285520784930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:block bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] md:text-xs font-black hover:bg-blue-600 hover:scale-105 transition-all shadow-xl uppercase tracking-widest"
            >
              Mulai Produksi
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="py-8 space-y-4 px-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </span>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
                <div className="pt-6">
                  <a 
                    href="https://wa.me/6285520784930" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-5 rounded-3xl font-black text-lg shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-blue-700 transition-colors"
                  >
                    MULAI PRODUKSI SEKARANG
                    <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
