"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VarietyManifesto() {
  const manifestoPoints = [
    {
      title: "VARIEDADE ELEVADA",
      desc: "Do doce tradicional à novidade de mercado – milhares de itens para abastecer qualquer necessidade comercial."
    },
    {
      title: "NEGÓCIOS EM CRESCIMENTO",
      desc: "Condições especiais no atacado pensadas para comércios que buscam margem e giro constante."
    },
    {
      title: "MARCA CONFIANÇA",
      desc: "As maiores fabricantes do país trabalham conosco: Fini, Garoto, Arcor, Dori, Florestal e mais."
    },
    {
      title: "ENTREGA RÁPIDA",
      desc: "Estrutura dedicada em Cariacica/ES para despacho ágil para todo o Brasil."
    }
  ];

  return (
    <section className="relative py-24 bg-wm-deep-black text-white overflow-hidden">
      {/* Background gradients - Controlled colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-wm-yellow/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-wm-black/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-wm-yellow/10 border border-wm-yellow/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-bold uppercase tracking-wider text-wm-yellow">Manifesto WM</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">DO </span>
            <span className="text-wm-yellow">DOCE</span>
            <span className="text-white"> À </span>
            <span className="text-wm-yellow">FESTA</span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A verdadeira distribuição em Cariacica que conecta comércios, confeitarias e eventos com variedade incomparável e condições exclusivas.
          </p>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {manifestoPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-3xl bg-wm-charcoal/60 border border-wm-border hover:border-wm-yellow/50 transition-all duration-300 hover:bg-wm-charcoal/90"
            >
              <div className="relative mb-4">
                <div className="absolute -top-2 -right-2">
                  <span className="text-xs font-bold text-white/40">0{idx + 1}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-wm-yellow transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {point.desc}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-wm-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-wm-yellow/10 border border-wm-yellow/30 backdrop-blur-sm">
            <span className="font-semibold text-white">Fale com nosso consultor de atacado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
