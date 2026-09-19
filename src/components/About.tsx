"use client";

import Image from "next/image";
import { Sparkles, Building, ShieldCheck, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-wm-cream relative overflow-hidden border-y border-wm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Brand Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white p-8 border border-wm-border shadow-sm space-y-6">

              <div className="relative h-16 w-48 mx-auto sm:mx-0">
                <Image
                  src="/images/brand/logo-wm.png"
                  alt="WM Distribuidora"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="space-y-4 pt-4 border-t border-wm-border/60">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-wm-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-wm-black">Presença Consolidada em Cariacica</h4>
                    <p className="text-xs text-wm-text-muted">Duas unidades físicas ativas: Santana e Cruzeiro do Sul.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-wm-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-wm-black">Distribuição Confiável</h4>
                    <p className="text-xs text-wm-text-muted">Parceria com as maiores indústrias nacionais de doces e descartáveis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-wm-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-wm-black">Foco no Cliente</h4>
                    <p className="text-xs text-wm-text-muted">Atendimento próximo e suporte dedicado para compras em atacado e varejo.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-wm-surface border border-wm-border text-center">
                <span className="font-hand text-2xl text-wm-yellow block">
                  Compromisso com o seu estoque ✨
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Editorial Text */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/10 text-wm-yellow-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-wm-yellow" />
              <span>Institucional WM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-black tracking-tight font-display leading-[1.15]">
              ESTRUTURA, PARCERIA E COMPROMISSO COM QUEM EMPREENDE.
            </h2>

            <p className="text-wm-text-muted text-base sm:text-lg leading-relaxed">
              A <strong className="text-wm-black">WM Distribuidora</strong> nasceu e se fortaleceu em Cariacica/ES com um propósito claro:
              conectar comércios, revendedores e organizadores de eventos ao que há de melhor em doces, guloseimas,
              chocolates e artigos para festas.
            </p>

            <p className="text-wm-text-muted text-base sm:text-lg leading-relaxed">
              Com lojas estrategicamente localizadas nos bairros Santana e Cruzeiro do Sul, oferecemos agilidade
              tanto para quem retira diretamente no balcão quanto para quem programa pedidos maiores no atacado.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-wm-border/60">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-wm-black font-display block">2</span>
                <span className="text-xs font-semibold text-wm-text-muted uppercase tracking-wider">Unidades Físicas</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-wm-yellow font-display block">100%</span>
                <span className="text-xs font-semibold text-wm-text-muted uppercase tracking-wider">Marcas Originais</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-wm-black font-display block">ES & BR</span>
                <span className="text-xs font-semibold text-wm-text-muted uppercase tracking-wider">Capacidade Logística</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
