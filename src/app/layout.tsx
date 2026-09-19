import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "WM Distribuidora | Doces, Guloseimas e Atacado em Cariacica - ES",
  description:
    "Variedade que move o seu negócio. Distribuição completa de doces, guloseimas, chocolates, itens para festas, açaí e embalagens em Cariacica e para todo o Brasil.",
  keywords: [
    "WM Distribuidora",
    "Distribuidora WM",
    "WM Festa Cariacica",
    "Doces atacado Cariacica",
    "Guloseimas Espírito Santo",
    "Embalagens e descartáveis Cariacica",
    "Fini atacado",
    "Produtos para festas ES",
  ],
  authors: [{ name: "WM Distribuidora" }],
  creator: "WM Distribuidora",
  openGraph: {
    title: "WM Distribuidora | Doces, Guloseimas e Atacado em Cariacica - ES",
    description:
      "A maior variedade em doces, guloseimas, chocolates e artigos para festas no atacado e varejo em Cariacica/ES.",
    url: "https://wmfesta.com.br",
    siteName: "WM Distribuidora",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/brand/logo-wm.png",
        width: 800,
        height: 600,
        alt: "WM Distribuidora - Cariacica / ES",
      },
    ],
  },
  icons: {
    icon: "/images/brand/logo-wm.png",
    apple: "/images/brand/logo-wm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WholesaleStore",
              name: "WM Distribuidora",
              alternateName: "Distribuidora WM",
              url: "https://wmfesta.com.br",
              logo: "https://wmfesta.com.br/wp-content/uploads/2025/03/Design-sem-nome2-e1741979097333.png",
              telephone: "+55-27-99881-5399",
              email: "contato@wmfesta.com.br",
              priceRange: "$$",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Rod. Gov. José Henrique Sette",
                  addressLocality: "Cariacica",
                  addressRegion: "ES",
                  postalCode: "29154-200",
                  addressCountry: "BR",
                  description: "Unidade Santana",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Cinco de Maio, 19 - Cruzeiro do Sul",
                  addressLocality: "Cariacica",
                  addressRegion: "ES",
                  postalCode: "29144-017",
                  addressCountry: "BR",
                  description: "Unidade Cruzeiro do Sul",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${caveat.variable} font-sans bg-[#FAF9F6] text-wm-navy antialiased selection:bg-wm-coral selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
