"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { COMPANY_INFO, CATEGORIES } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-wm-black pt-20 pb-12 border-t border-wm-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-wm-border">

          {/* Col 1: Logo & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative h-14 w-44">
              <Image
                src="/images/brand/logo-wm.png"
                alt="WM Distribuidora"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-wm-text-muted leading-relaxed">
              Distribuidora especializada em doces, balas, guloseimas, chocolates, itens para açaí e produtos para festas em Cariacica e para todo o Brasil. Atendimento no atacado e varejo.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-wm-yellow flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atacado e Varejo com Pronta-Entrega</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-wm-black">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="hover:text-wm-yellow transition text-wm-text">Início</Link>
              </li>
              <li>
                <Link href="#categorias" className="hover:text-wm-yellow transition text-wm-text">Categorias</Link>
              </li>
              <li>
                <Link href="#variedade" className="hover:text-wm-yellow transition text-wm-text">Variedade</Link>
              </li>
              <li>
                <Link href="#atacado" className="hover:text-wm-yellow transition text-wm-text">Atacado</Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-wm-yellow transition text-wm-text">Produtos</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-wm-yellow transition text-wm-text">Sobre a WM</Link>
              </li>
              <li>
                <Link href="#unidades" className="hover:text-wm-yellow transition text-wm-text">Unidades</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-wm-black">
              Categorias Principais
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href="#categorias" className="hover:text-wm-yellow transition text-wm-text">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#categorias" className="hover:text-wm-yellow transition text-wm-text">
                  Descartáveis & Embalagens
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Real Contacts & Physical Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-wm-black">
              Atendimento & Contato
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-wm-text-muted">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-wm-yellow hover:text-wm-yellow-dark font-bold transition"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{COMPANY_INFO.whatsappFormatted}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-wm-text-muted shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-wm-border">
                <MapPin className="w-4 h-4 text-wm-yellow shrink-0 mt-0.5" />
                <div>
                  <strong className="text-wm-black block text-xs">Unidade Santana:</strong>
                  <span className="text-[11px]">Rod. Gov. José Henrique Sette - Cariacica/ES</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-wm-yellow shrink-0 mt-0.5" />
                <div>
                  <strong className="text-wm-black block text-xs">Unidade Cruzeiro do Sul:</strong>
                  <span className="text-[11px]">Rua Cinco de Maio, 19 - Cariacica/ES</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-wm-border text-[11px]">
                <Clock className="w-3.5 h-3.5 text-wm-yellow shrink-0" />
                <span>Seg a Sex: 08h-18h | Sáb: 08h-17h</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wm-text-muted">
          <p>
            © {currentYear} {COMPANY_INFO.formalName} — Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            Landing Page Institucional e Comercial • Cariacica, Espírito Santo
          </p>
        </div>

      </div>
    </footer>
  );
}
