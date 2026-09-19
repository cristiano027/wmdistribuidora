"use client";

import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function WorldOfVariety() {
  const highlights = [
    "Gomas e Balas de Gelatina",
    "Chocolates e Bombons Nobres",
    "Coberturas para Açaí e Sorvetes",
    "Embalagens e Artigos para Festas",
    "Chicletes e Pirulitos Coloridos",
    "Descartáveis e Sacolas Kraft",
  ];

  return (
    <section id="variedade" className="py-24 bg-wm-cream relative overflow-hidden border-y border-wm-border">
      {/* Editorial Decorative Background Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[12vw] font-black uppercase tracking-tighter text-wm-black leading-none">
          WM DISTRIBUIDORA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-[500px] mx-auto h-[460px] sm:h-[520px]">

              {/* Central Visual Showcase Box */}
              <div className="absolute inset-x-8 inset-y-6 rounded-3xl bg-wm-surface border border-wm-border shadow-md p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-wm-black">
                    Mix Selecionado WM
                  </span>
                  <Sparkles className="w-4 h-4 text-wm-yellow" />
                </div>
                <div className="text-center py-6">
                  <span className="font-hand text-3xl sm:text-4xl text-wm-black block -rotate-3">
                    Mais de centenas de itens
                  </span>
                  <span className="text-xs font-semibold text-wm-text-muted uppercase tracking-widest mt-1 block">
                    Para Atacado e Varejo
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-wm-text-muted border-t border-wm-border/60 pt-3">
                  <span>Cariacica / ES</span>
                  <span className="font-bold text-wm-black">Pronta-Entrega</span>
                </div>
              </div>

              {/* Cutout 1: Fini Banana (Top Left) */}
              <div className="absolute -top-2 left-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white p-2 shadow-lg border border-wm-border product-cutout -rotate-12 animate-float">
                <Image
                  src="/images/products/fini-banana.jpg"
                  alt="Fini Bananas"
                  fill
                  sizes="144px"
                  className="object-contain p-1"
                />
              </div>

              {/* Cutout 2: Baton ao Leite (Top Right) */}
              <div className="absolute top-2 -right-2 sm:-right-4 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white p-2 shadow-lg border border-wm-border product-cutout rotate-12 animate-float-slow">
                <Image
                  src="/images/products/baton-ao-leite.webp"
                  alt="Baton ao Leite"
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                />
              </div>

              {/* Cutout 3: Gomets 700g (Bottom Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-white p-2 shadow-lg border border-wm-border product-cutout rotate-6 animate-float-reverse">
                <Image
                  src="/images/products/gomets-700g.jpg"
                  alt="Gomets Dori"
                  fill
                  sizes="160px"
                  className="object-contain p-2"
                />
              </div>

              {/* Cutout 4: Coloreti 500g (Bottom Right) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-white p-2 shadow-lg border border-wm-border product-cutout -rotate-6 animate-float">
                <Image
                  src="/images/products/coloreti-500.jpg"
                  alt="Coloreti Jazam"
                  fill
                  sizes="160px"
                  className="object-contain p-2"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Bullet Values */}
          <div className="lg:col-span-6 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/10 text-wm-yellow text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiência & Volume</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-black tracking-tight font-display leading-[1.15]">
              UM MUNDO DE <br />
              <span className="text-wm-yellow">
                VARIEDADE & CORES.
              </span>
            </h2>

            <p className="text-wm-text-muted text-base sm:text-lg leading-relaxed">
              Trabalhar com a <strong className="text-wm-black">WM Distribuidora</strong> significa ter a tranquilidade de encontrar
              em um único parceiro tudo o que a sua bomboniere, comércio, confeitaria ou evento necessita.
              Agilidade no pedido e atendimento focado na sua rentabilidade.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-wm-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-wm-yellow shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-wm-black">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 p-4 rounded-2xl bg-wm-surface border border-wm-border flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-wm-text-muted block">
                  Atendimento Regional
                </span>
                <span className="text-sm font-extrabold text-wm-black">
                  Cariacica / ES e todo o Espírito Santo
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-wm-yellow border border-wm-yellow/20 shadow-sm">
                Atacado & Varejo
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
