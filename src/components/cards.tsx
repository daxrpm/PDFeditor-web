"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  link: string;
}

export function ThreeDCardDemo({
  title,
  description,
  image,
  icon: Icon,
  link,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-zinc-900 dark:border-zinc-800 border-zinc-200 w-full max-w-sm h-auto rounded-2xl p-6 border-2 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-zinc-900 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-zinc-600 text-sm max-w-sm mt-3 dark:text-zinc-400 leading-relaxed"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-6">
          {Icon ? (
            <div className="h-48 w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg group-hover/card:shadow-xl transition-shadow duration-300">
              <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
          ) : image ? (
            <Image
              src={image}
              height="1587"
              width="500"
              className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
              alt={title}
            />
          ) : null}
        </CardItem>
        <div className="flex justify-end items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="group/button flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Usar ahora
            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
