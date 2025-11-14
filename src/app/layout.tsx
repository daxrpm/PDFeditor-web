import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatomoAnalytics from "@/components/MatomoAnalytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://pdf-editor.daxrpm.dev";

export const metadata: Metadata = {
  title: {
    default: "PDF Editor Online OpenSource - Edita PDFs de Forma Privada",
    template: "%s | PDF Editor - daxrpm",
  },
  description:
    "Editor de PDF open source y privado. Unir, comprimir y separar archivos PDF sin registro. Herramientas 100% privadas que funcionan en tu navegador.",
  keywords: [
    "editor pdf",
    "pdf editor",
    "unir pdf",
    "comprimir pdf",
    "separar pdf",
    "merge pdf",
    "compress pdf",
    "split pdf",
    "editor pdf online",
    "pdf",
    "open source pdf",
    "editor pdf privado",
    "pdf sin registro",
    "herramientas pdf",
    "daxrpm",
  ],
  authors: [{ name: "daxrpm", url: "https://daxrpm.dev" }],
  creator: "daxrpm",
  publisher: "daxrpm",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "PDF Editor Online OpenSource - Edita PDFs de Forma Privada",
    description:
      "Editor de PDF open source y privado. Unir, comprimir y separar archivos PDF sin registro. 100% privado en tu navegador.",
    siteName: "PDF Editor - daxrpm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PDF Editor - Herramientas privadas para editar PDFs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Editor Online OpenSource - Edita PDFs de Forma Privada",
    description:
      "Editor de PDF open source y privado. Unir, comprimir y separar PDFs sin registro.",
    creator: "@daxrpm",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF Editor",
    description:
      "Editor de PDF open source y privado para unir, comprimir y separar archivos PDF",
    url: siteUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "daxrpm",
      url: "https://daxrpm.dev",
    },
    publisher: {
      "@type": "Person",
      name: "daxrpm",
    },
    featureList: [
      "Unir archivos PDF",
      "Comprimir archivos PDF",
      "Separar archivos PDF",
      "100% privado y seguro",
      "Sin registro necesario",
      "Open source",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <MatomoAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
