"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hey There\xa0",
    },
    {
      text: "It's Tuhin\xa0",
    },
    {
      text: "A backend dev\xa0",
    },
    {
      text: "from\xa0",
    },
    {
      text: "India",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The Journey of my career starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>)
  );
}
