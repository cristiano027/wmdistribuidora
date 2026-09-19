"use client";

import Image from "next/image";
import { Sparkles, MessageCircle } from "lucide-react";
import { FEATURED_PRODUCTS, COMPANY_INFO } from "@/data/company";

export default function ProductShowcase() {
  return (
    <section id="produtos" className="py-24 bg-wm-cream relative overflow-hidden border-y border-wm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/20 text-wm-yellow-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vitrine Visual</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-text tracking-tight font-display">
              ALGUNS DOS SABORES QUE PASSAM POR AQUI.
            </h2>
            <p className="text-wm-text-muted text-base sm:text-lg">
              Uma seleção visual representativa das marcas líderes que compõem o portfólio da WM Distribuidora.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-wm-text-muted font-semibold block">
              *Apresentação institucional de marcas
            </span>
            <span className="text-xs font-bold text-wm-text">
              Consulte todo o mix com nossos consultores
            </span>
          </div>
        </div>

        {/* Editorial Product Grid (Strictly Visual - No prices, no buy buttons) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {FEATURED_PRODUCTS.map((prod, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-wm-surface border border-wm-border p-4 sm:p-5 flex flex-col justify-between hover:bg-white hover:border-wm-yellow/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-wm-text border border-wm-border shadow-xs">
                  {prod.brand}
                </span>
                <span className="text-[10px] font-bold text-wm-yellow-dark">
                  {prod.highlight}
                </span>
              </div>

              {/* Product Image Box */}
              <div className="relative w-full aspect-square my-2 rounded-2xl bg-white p-3 flex items-center justify-center border border-wm-border group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 220px"
                  className="object-contain p-2"
                />
              </div>

              {/* Product Info */}
              <div className="pt-3 border-t border-wm-border/60 mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-wm-text-muted block mb-1">
                  {prod.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-wm-text group-hover:text-wm-yellow transition-colors line-clamp-2 leading-snug">
                  {prod.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Banner bottom */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-wm-black text-wm-text-light border border-wm-charcoal flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Procurando algum produto ou marca específica?
            </h4>
            <p className="text-xs sm:text-sm text-wm-text-muted">
              Nosso catálogo físico e digital possui centenas de opções adicionais.
            </p>
          </div>
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wm-yellow hover:bg-wm-yellow-light text-wm-black text-xs sm:text-sm font-bold shadow-md transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-wm-black" />
            <span>Consultar produto no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
