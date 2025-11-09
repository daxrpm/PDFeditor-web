"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {Icon ? (
            <div className="h-60 w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 group-hover/card:shadow-xl">
              <Icon className="w-32 h-32 text-white" strokeWidth={1.5} />
            </div>
          ) : image ? (
            <Image
              src={image}
              height="1587"
              width="500"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          ) : null}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Mas información →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Editar ahora
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
