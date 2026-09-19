"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { CATEGORIES } from "@/data/company";

export default function CategoryShowcase() {
  return (
    <section id="categorias" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-wm-coral/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-wm-amber/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wm-cream border border-wm-sand/50 text-wm-navy mb-6">
            <Sparkles className="w-4 h-4 text-wm-amber" />
            <span className="text-sm font-bold uppercase tracking-wider">Nossas Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wm-navy tracking-tight font-display leading-[1.12]">
            DA BALA À FESTA
          </h2>

          <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
            Colecione em um único lugar o melhor da confeitaria, golfe e buffet para o seu estabelecimento.
          </p>
        </div>

        {/* Category Cards - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Primary Large Card - Guloseimas */}
          <div className="lg:col-span-5 relative group">
            <Link href="#categorias" className="block">
              <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 p-8 border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-wm-magenta text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3 h-3" />
                  Mix Abundante
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-wm-navy mb-2">
                    <span className="text-wm-magenta">Balas</span> &amp; Guloseimas
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Fini, Gomets, Dori &amp; Florestal
                  </p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Gelatina e gomas fofas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Marshmallows sortidos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Tubos de iogurte sortidos</span>
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-white shadow-lg border border-pink-100 overflow-hidden">
                  <Image
                    src="/images/products/fini-amora.jpg"
                    alt="Fini Amora"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Chocolate Card */}
            <div className="relative group">
              <Link href="#categorias" className="block">
                <div className="relative h-full min-h-[160px] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-6 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-wm-amber text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3" />
                    Premium
                  </div>

                  <h3 className="text-xl font-bold text-wm-navy mb-1">
                    Chocolates
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Nutella, Serenata &amp; Baton
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Coberturas para confeitaria</span>
                  </div>

                  {/* Product */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl bg-white shadow-md border border-amber-100 overflow-hidden">
                    <Image
                      src="/images/products/nutella-650g.webp"
                      alt="Nutella"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Chicletes Card */}
            <div className="relative group">
              <Link href="#categorias" className="block">
                <div className="relative h-full min-h-[160px] rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 p-6 border border-cyan-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-wm-cyan text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3" />
                    Diversão
                  </div>

                  <h3 className="text-xl font-bold text-wm-navy mb-1">
                    Chicletes &amp; Pirulitos
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Big Big, Poosh &amp; Diploko
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Sabor e recheio frutas</span>
                  </div>

                  {/* Product */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl bg-white shadow-md border border-cyan-100 overflow-hidden">
                    <Image
                      src="/images/products/poosh-tutti-frutti.webp"
                      alt="Poosh Tutti Frutti"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Embalagens Card */}
            <div className="relative group">
              <Link href="#categorias" className="block">
                <div className="relative h-full min-h-[160px] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-wm-emerald text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3" />
                    Completa
                  </div>

                  <h3 className="text-xl font-bold text-wm-navy mb-1">
                    Festas &amp; Embalagens
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Sacolas kraft, descartáveis
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Kraft coloridas &amp; kits completos</span>
                  </div>

                  {/* Product */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl bg-white shadow-md border border-emerald-100 overflow-hidden">
                    <Image
                      src="/images/products/sacola-papel-laranja.png"
                      alt="Sacola de Papel"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Piracanjuba Card */}
            <div className="relative group">
              <Link href="#categorias" className="block">
                <div className="relative h-full min-h-[160px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3" />
                    Tradicional
                  </div>

                  <h3 className="text-xl font-bold text-wm-navy mb-1">
                    Outras Marcas
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Piracanjuba, Arcor &amp; Garoto
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Chocolates, confeitos &amp; mais</span>
                  </div>

                  {/* Product */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl bg-white shadow-md border border-purple-100 overflow-hidden">
                    <Image
                      src="/images/products/baton-ao-leite.webp"
                      alt="Baton ao Leite"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}