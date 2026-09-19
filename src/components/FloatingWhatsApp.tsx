"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-wm-navy text-white text-xs font-bold shadow-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Falar com a WM no WhatsApp 👋
      </span>

      {/* Floating Button */}
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Iniciar conversa com a WM Distribuidora no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
