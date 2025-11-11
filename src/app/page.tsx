"use client";

import { ThreeDCardDemo } from "@/components/cards";
import { Combine, Archive, Scissors, Sparkles } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Unir PDF",
      description: "Combina múltiples archivos PDF en un solo documento sin perder calidad",
      icon: Combine,
      link: "/unir",
    },
    {
      title: "Comprimir PDF",
      description: "Reduce el tamaño de tus PDFs manteniendo la calidad visual óptima",
      icon: Archive,
      link: "/comprimir",
    },
    {
      title: "Separar PDF",
      description: "Extrae páginas específicas de tus documentos PDF fácilmente",
      icon: Scissors,
      link: "/separar",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-theme(spacing.32))] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Editor de PDF Open Source</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Edita tus PDFs de forma
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              privada
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Herramientas simples para unir, comprimir y separar tus archivos PDF.
            Sin registros.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 place-items-center">
          {features.map((feature) => (
            <ThreeDCardDemo
              key={feature.link}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
