"use client";

import { CLIENT_SEGMENTS } from "@/data/company";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ExperienceFlow() {
  return (
    <section className="py-24 bg-wm-cream relative overflow-hidden border-y border-wm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/10 text-wm-yellow-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-wm-yellow" />
            <span>Presença & Atuação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-text tracking-tight font-display">
            QUEM ATENDEMOS NO DIA A DIA
          </h2>
          <p className="text-wm-text-muted text-base sm:text-lg">
            Soluções personalizadas em suprimento de doces e descartáveis para os mais diversos modelos de negócio.
          </p>
        </div>

        {/* Horizontal Card Flow (Responsive: horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {CLIENT_SEGMENTS.map((seg) => (
            <div
              key={seg.number}
              className="group p-6 rounded-3xl bg-white border border-wm-border hover:border-wm-yellow/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-wm-border group-hover:text-wm-yellow transition-colors font-display">
                    {seg.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-wm-surface text-wm-text border border-wm-border group-hover:bg-wm-yellow/10 group-hover:text-wm-yellow transition-colors">
                    {seg.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-wm-text group-hover:text-wm-yellow transition-colors font-display leading-snug">
                  {seg.title}
                </h3>

                <p className="text-xs text-wm-text-muted leading-relaxed">
                  {seg.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-wm-border/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-wm-text-muted group-hover:text-wm-text transition-colors">
                  Atendimento WM
                </span>
                <ArrowRight className="w-4 h-4 text-wm-border group-hover:text-wm-yellow group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
