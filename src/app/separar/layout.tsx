import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Separar PDF Online - Extraer Páginas PDF",
  description:
    "Separar y extraer páginas específicas de archivos PDF. Herramienta privada y segura para dividir PDFs. Sin registro, 100% en tu navegador.",
  keywords: [
    "separar pdf",
    "split pdf",
    "dividir pdf",
    "extraer páginas pdf",
    "separar pdf online",
    "cortar pdf",
    "extraer páginas",
  ],
  openGraph: {
    title: "Separar PDF Online - Extraer Páginas PDF",
    description:
      "Separar y extraer páginas específicas de archivos PDF. 100% privado y seguro.",
    url: "https://pdf-editor.daxrpm.dev/separar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Separar PDF Online - Extraer Páginas PDF",
    description:
      "Separar y extraer páginas específicas de archivos PDF. 100% privado y seguro.",
  },
  alternates: {
    canonical: "/separar",
  },
};

export default function SepararLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
