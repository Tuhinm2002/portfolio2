"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import img1 from "@/components/Images/me.jpg"
import { FloatingDockDemo } from "./ContactBar";

export function ThreeDCardDemo() {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          Connect with me on my socials
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Be the part of my Engineering journey
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20 h-5">
          <FloatingDockDemo></FloatingDockDemo>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
