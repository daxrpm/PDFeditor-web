"use client";

import { ThreeDCardDemo } from "@/components/cards";
import { Combine, Archive, Scissors } from "lucide-react";

export default function Home() {
  return (
    <div className="m-5">
      <div className="flex flex-wrap justify-between items-center">
        <ThreeDCardDemo
          title="Unir PDF"
          description="Unir dos o mas pdfs sin perder calidad"
          icon={Combine}
          link="/unir"
        />
        <ThreeDCardDemo
          title="Comprimir PDF"
          description="Comprimir PDFs sin perder calidad"
          icon={Archive}
          link="/comprimir"
        />
        <ThreeDCardDemo
          title="Separar PDF"
          description="separar PDFs sin perder calidad"
          icon={Scissors}
          link="/separar"
        />
      </div>
    </div>
  );
}
