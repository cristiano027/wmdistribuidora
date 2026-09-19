"use client";

import { COMPANY_INFO } from "@/data/company";
import { Sparkles, Check, Zap, Award, Truck, Layers } from "lucide-react";

export default function Differentials() {
  return (
    <section className="py-24 bg-wm-surface relative border-t border-wm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/10 text-wm-yellow-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-wm-yellow" />
            <span>Por que escolher a WM?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-text tracking-tight font-display">
            NOSSOS DIFERENCIAIS CONFIRMADOS
          </h2>
          <p className="text-wm-text-muted text-base sm:text-lg">
            Pilares que garantem segurança e tranquilidade no abastecimento do seu negócio.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.differentials.map((diff, index) => {
            const icons = [
              <Layers key="0" className="w-6 h-6 text-wm-yellow" />,
              <Zap key="1" className="w-6 h-6 text-wm-yellow" />,
              <Award key="2" className="w-6 h-6 text-wm-yellow" />,
              <Truck key="3" className="w-6 h-6 text-wm-yellow" />,
            ];

            return (
              <div
                key={diff.id}
                className="group p-8 rounded-3xl bg-wm-cream border border-wm-border hover:bg-white hover:border-wm-yellow/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white border border-wm-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {icons[index]}
                    </div>
                    <span className="text-xs font-bold text-wm-text-muted">0{index + 1}</span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-wm-surface text-wm-text border border-wm-border block w-fit">
                    {diff.tag}
                  </span>

                  <h3 className="text-xl font-bold text-wm-text font-display group-hover:text-wm-yellow transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs font-semibold text-wm-text-muted">
                    {diff.subtitle}
                  </p>

                  <p className="text-xs text-wm-text-muted leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-wm-border/60 flex items-center gap-2 text-xs font-bold text-wm-yellow">
                  <Check className="w-4 h-4" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
