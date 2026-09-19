"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles, Box, ShieldCheck, Truck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-wm-cream"
    >
      {/* Background elements - Neutral and Brand only */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-wm-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-wm-black/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-64 bg-wm-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-wm-border shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-wm-yellow animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-wm-black">
                Distribuição no Atacado & Varejo
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-wm-text-muted font-medium">Cariacica / ES</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-wm-black leading-[1.08] font-display">
                VARIEDADE QUE <br />
                <span className="text-wm-yellow">
                  MOVE O SEU NEGÓCIO.
                </span>
              </h1>

              <div className="pt-2 flex items-center gap-3">
                <span className="font-hand text-2xl sm:text-3xl text-wm-yellow -rotate-2 block">
                  Do doce à festa, o mix mais completo do ES ✨
                </span>
              </div>
            </div>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-wm-text-muted max-w-xl leading-relaxed font-normal">
              A <strong className="text-wm-black">WM Distribuidora</strong> reúne o maior sortimento de doces, balas, chocolates,
              guloseimas, itens para açaí e embalagens. Fornecimento direto, estoque a pronta-entrega
              e atendimento consultivo para revendedores e comércios.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-wm-yellow hover:bg-wm-yellow-light text-wm-black font-bold text-base shadow-[0_12px_25px_rgba(251,191,36,0.3)] hover:shadow-[0_16px_32px_rgba(251,191,36,0.4)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Falar com um consultor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-wm-cream text-wm-black font-semibold text-base border border-wm-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-slate-300"
              >
                <span>Conhecer categorias</span>
              </a>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-wm-border/80 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow-dark">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-wm-black block">Mix Amplo</span>
                  <span className="text-[11px] text-wm-text-muted">Pronta-entrega</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow-dark">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-wm-black block">Marcas Líderes</span>
                  <span className="text-[11px] text-wm-text-muted">100% Originais</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow-dark">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-wm-black block">Cariacica / ES</span>
                  <span className="text-[11px] text-wm-text-muted">2 Unidades</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Product Showcase */}
          <div className="lg:col-span-5 relative">

            {/* Background composition card */}
            <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-wm-surface border border-wm-border shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center justify-center">

              {/* Radial decorative ring */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-wm-yellow/20 pointer-events-none animate-[spin_60s_linear_infinite]" />

              {/* Central Main Product: Nutella or Fini */}
              <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 animate-float">
                <div className="relative w-full h-full p-2 bg-white/95 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center group overflow-hidden">
                  <Image
                    src="/images/products/nutella-650g.webp"
                    alt="Nutella 650g"
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-wm-black/80 backdrop-blur-sm py-1 px-2.5 rounded-full text-center">
                    <span className="text-[10px] font-bold tracking-wider text-white uppercase">Linha Chocolates</span>
                  </div>
                </div>
              </div>

              {/* Floating Layer 1: Fini Amora (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-6 z-30 w-32 h-32 sm:w-36 sm:h-36 animate-float-slow">
                <div className="relative w-full h-full p-2 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-wm-border flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/fini-amora.jpg"
                    alt="Fini Amora"
                    fill
                    sizes="144px"
                    className="object-contain p-2"
                  />
                  <div className="absolute -top-2 -right-2 bg-wm-black text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                    Fini
                  </div>
                </div>
              </div>

              {/* Floating Layer 2: Bombom Serenata (Top Right) */}
              <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-6 z-20 w-28 h-28 sm:w-32 sm:h-32 animate-float-reverse">
                <div className="relative w-full h-full p-2 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-wm-border flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/bombom-serenata.jpg"
                    alt="Bombom Serenata de Amor"
                    fill
                    sizes="128px"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Floating Layer 3: Diploko Monster Neon (Bottom Left) */}
              <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-6 z-30 w-32 h-32 sm:w-36 sm:h-36 animate-float-reverse">
                <div className="relative w-full h-full p-2 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-wm-border flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/diploko-monster.webp"
                    alt="Diploko Monster Neon"
                    fill
                    sizes="144px"
                    className="object-contain p-2"
                  />
                  <div className="absolute -bottom-2 left-2 bg-wm-black text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                    Neon Pop
                  </div>
                </div>
              </div>

              {/* Floating Layer 4: Sacola de Papel (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 z-20 w-28 h-28 sm:w-32 sm:h-32 animate-float">
                <div className="relative w-full h-full p-2 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-wm-border flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/sacola-papel-laranja.png"
                    alt="Sacola de Papel Festa"
                    fill
                    sizes="128px"
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Mini Stamp Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-40 bg-wm-black text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg border border-wm-charcoal flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-wm-yellow" />
                <span>100% Produtos Originais</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
