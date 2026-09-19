"use client";

import { MessageCircle, CheckCircle2, TrendingUp, Sparkles, Building2, PackageCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Wholesale() {
  const wholesalePerks = [
    {
      title: "Descontos Progressivos",
      desc: "Tabelas de atacado diferenciadas para compras em quantidade e volumes corporativos.",
    },
    {
      title: "Mix Amplo & Consolidado",
      desc: "Compre doces, balas, chocolates e embalagens em um único pedido e nota fiscal.",
    },
    {
      title: "Consultoria Comercial",
      desc: "Atendimento direto com consultores especialistas para indicar os itens de maior giro para sua região.",
    },
    {
      title: "Retirada ou Despacho Ágil",
      desc: "Estrutura pronta para expedição rápida ou retirada direta em nossas unidades em Cariacica.",
    },
  ];

  return (
    <section id="atacado" className="py-24 bg-wm-deep-black text-white relative overflow-hidden">
      {/* Background gradients - Controlled colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wm-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wm-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Bold Editorial Wholesale Statement */}
          <div className="lg:col-span-6 space-y-8">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wm-yellow/10 border border-wm-yellow/20 text-wm-yellow text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Condições Exclusivas para Empresas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.12]">
              <span className="text-white">PARA QUEM VENDE, </span><br />
              <span className="text-white">PARA QUEM PRODUZ, </span><br />
              <span className="text-wm-yellow">
                PARA QUEM PRECISA DE VARIEDADE.
              </span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              Seja para abastecer sua loja, sua lanchonete, sua fábrica de bolos e doces ou sua açaíteria:
              a WM oferece condições comerciais pensadas para aumentar a sua margem de lucro.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-wm-yellow hover:bg-wm-yellow-light text-wm-black font-bold text-base shadow-[0_12px_25px_rgba(251,191,36,0.3)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Falar com consultor de Atacado</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-wm-yellow" /> Atendimento rápido via WhatsApp
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-wm-yellow" /> Sem burocracia excessiva
              </span>
            </div>

          </div>

          {/* Right Column: Perks Grid in Bento Style */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {wholesalePerks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-wm-charcoal/60 border border-wm-border hover:border-wm-yellow/50 transition-all duration-300 hover:bg-wm-charcoal/90 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-wm-yellow/10 text-wm-yellow">
                    {idx === 0 && <TrendingUp className="w-5 h-5" />}
                    {idx === 1 && <PackageCheck className="w-5 h-5" />}
                    {idx === 2 && <MessageCircle className="w-5 h-5" />}
                    {idx === 3 && <Building2 className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-bold text-white/30">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
