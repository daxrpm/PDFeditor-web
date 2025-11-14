import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprimir PDF Online - Reducir Tamaño PDF",
  description:
    "Comprimir archivos PDF gratis sin perder calidad. Reduce el tamaño de tus PDFs de forma privada y segura.",
  keywords: [
    "comprimir pdf",
    "compress pdf",
    "reducir pdf",
    "comprimir pdf online gratis",
    "reducir tamaño pdf",
    "optimizar pdf",
    "pdf más pequeño",
  ],
  openGraph: {
    title: "Comprimir PDF Online - Reducir Tamaño PDF",
    description:
      "Comprimir archivos PDF gratis sin perder calidad. 100% privado y seguro.",
    url: "https://pdf-editor.daxrpm.dev/comprimir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprimir PDF Online - Reducir Tamaño PDF",
    description:
      "Comprimir archivos PDF gratis sin perder calidad. 100% privado y seguro.",
  },
  alternates: {
    canonical: "/comprimir",
  },
};

export default function ComprimirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
