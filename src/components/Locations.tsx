"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Locations() {
  return (
    <section id="unidades" className="py-24 bg-wm-cream relative overflow-hidden border-y border-wm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wm-yellow/10 text-wm-yellow-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-wm-yellow" />
            <span>Nossas Lojas Físicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-black tracking-tight font-display">
            UNIDADES EM CARIACICA / ES
          </h2>
          <p className="text-wm-text-muted text-base sm:text-lg">
            Visite nossas unidades para pronta-entrega ou retire seu pedido com agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {COMPANY_INFO.units.map((unit) => {
            const isSantana = unit.id === "santana";
            const whatsappNumber = isSantana ? "5527998014226" : COMPANY_INFO.whatsapp;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20${unit.name}`;
            const displayPhone = isSantana ? "(27) 99801-4226" : COMPANY_INFO.whatsappFormatted;

            return (
              <div
                key={unit.id}
                className="rounded-3xl bg-white border border-wm-border shadow-sm p-8 sm:p-10 flex flex-col justify-between hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-wm-yellow" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-wm-surface text-wm-black border border-wm-border group-hover:text-wm-yellow group-hover:border-wm-yellow/30 transition-colors">
                      {unit.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-wm-text-muted bg-wm-surface px-3 py-1 rounded-full">
                      <span className="h-2 w-2 rounded-full bg-wm-yellow animate-pulse" />
                      <span>Aberta ao Público</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-wm-black font-display mb-2 group-hover:text-wm-yellow transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-wm-text-muted leading-relaxed">
                      {unit.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-wm-border/60">
                    <div className="flex items-start gap-3 text-sm text-wm-text">
                      <MapPin className="w-5 h-5 text-wm-yellow shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-wm-black block">{unit.address}</span>
                        <span className="text-xs text-wm-text-muted">
                          {unit.neighborhood}, {unit.city} - {unit.state}, CEP: {unit.zip}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-wm-text-muted">
                      <Clock className="w-4 h-4 text-wm-yellow shrink-0" />
                      <span>{COMPANY_INFO.hours.weekdays} | {COMPANY_INFO.hours.saturday}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-wm-text-muted">
                      <Phone className="w-4 h-4 text-wm-yellow shrink-0" />
                      <span>WhatsApp: {displayPhone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-wm-border/60 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${unit.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-300 group/btn"
                  >
                    <Navigation className="w-4 h-4 text-wm-yellow group-hover/btn:scale-110 transition-transform" />
                    <span className="text-white">Como Chegar (Google Maps)</span>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-wm-surface hover:bg-wm-yellow/10 text-wm-black hover:text-wm-yellow text-xs sm:text-sm font-bold transition-all duration-300 border border-wm-border"
                  >
                    <span>Falar com esta unidade</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
