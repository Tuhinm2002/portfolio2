"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function FloatingNavDemo() {




  const navItems = [
    {
      name: "Home",
      link: "https://portfolio-theta-peach-55.vercel.app/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1trNRZKAIogBQCxAsq8hNYBJN4tGA02HF/view?usp=sharing",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "https://www.linkedin.com/in/tuhinm2002",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>)
  );
}
const DummyContent = () => {
  return (
    <BackgroundBeamsWithCollision>
    <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
    </BackgroundBeamsWithCollision>
  );
};
