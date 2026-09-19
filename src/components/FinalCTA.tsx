"use client";

import { MessageCircle, Clock, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-wm-deep-black relative overflow-hidden">
      {/* Background gradients - Controlled colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-wm-yellow/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-wm-black/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Compelling CTA */}
          <div className="lg:col-span-8 space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wm-yellow/10 border border-wm-yellow/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-wm-yellow" />
              <span className="text-sm font-bold uppercase tracking-wider text-wm-yellow">Falar com Consultor de Atacado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.12]">
              PRECISA DE VARIEDADE?<br/>
              <span className="text-wm-yellow">
                FALE COM QUEM ENTENDE DO ASSUNTO.
              </span>
            </h2>

            <p className="text-lg text-white leading-relaxed">
              Não importa se é para abastecer o seu comércio, a sua lanchonete, a sua fábrica de bolos e doces ou a sua açaíteria: a WM oferece condições comerciais pensadas para aumentar a sua margem de lucro.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Atendimento Rápido</span>
                  <span className="text-xs text-white">Via WhatsApp</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Sem Burocracia</span>
                  <span className="text-xs text-white">Atendimento direto</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-wm-yellow/10 text-wm-yellow">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Vantagens no Atacado</span>
                  <span className="text-xs text-white">Maiores marcas</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-6">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-wm-yellow hover:bg-wm-yellow-light text-wm-black font-bold text-lg shadow-[0_12px_25px_rgba(251,191,36,0.3)] hover:shadow-[0_16px_32px_rgba(251,191,36,0.4)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span>Falar com Consultor de Atacado</span>
              </a>
            </div>

          </div>

          {/* Right Column: Product Showcase */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-3xl bg-wm-charcoal/60 backdrop-blur-sm border border-wm-border p-8 shadow-2xl">

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-wm-yellow/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-wm-black/30 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Precisa de Variedade?<br/>
                  <span className="text-wm-yellow">Fale com a WM.</span>
                </h3>

                {/* Product icons preview */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="aspect-square rounded-xl bg-wm-black/30 border border-wm-border p-3 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-lg bg-wm-yellow text-wm-black flex items-center justify-center">
                      <span className="text-xs font-bold">Fini</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-wm-black/30 border border-wm-border p-3 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-lg bg-wm-yellow text-wm-black flex items-center justify-center">
                      <span className="text-xs font-bold">Nutella</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-wm-black/30 border border-wm-border p-3 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-lg bg-wm-yellow text-wm-black flex items-center justify-center">
                      <span className="text-xs font-bold">Garoto</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-wm-yellow" />
                    <span className="text-sm text-white">Produtos originais e exclusivos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-wm-yellow" />
                    <span className="text-sm text-white">Atendimento personalizado especializado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-wm-yellow" />
                    <span className="text-sm text-white">Condições especiais para atacado</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-wm-border/60">
                  <div className="flex items-center gap-2 text-xs text-white">
                    <Clock className="w-3 h-3 text-wm-yellow" />
                    <span>Seg - Sex: 08h-18h | Sáb: 08h-17h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
