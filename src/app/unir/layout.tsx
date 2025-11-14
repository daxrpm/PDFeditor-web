import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unir PDF Online - Combinar Archivos PDF",
  description:
    "Unir y combinar múltiples archivos PDF en un solo documento. Herramienta privada y segura para fusionar PDFs sin registro. 100% en tu navegador.",
  keywords: [
    "unir pdf",
    "merge pdf",
    "combinar pdf",
    "fusionar pdf",
    "unir archivos pdf",
    "juntar pdf",
    "merge pdf online",
  ],
  openGraph: {
    title: "Unir PDF Online - Combinar Archivos PDF",
    description:
      "Unir y combinar múltiples archivos PDF en un solo documento. 100% privado y seguro.",
    url: "https://pdf-editor.daxrpm.dev/unir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unir PDF Online - Combinar Archivos PDF",
    description:
      "Unir y combinar múltiples archivos PDF en un solo documento. 100% privado y seguro.",
  },
  alternates: {
    canonical: "/unir",
  },
};

export default function UnirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
