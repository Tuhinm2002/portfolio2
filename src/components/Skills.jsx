"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `For Skills I didn't mentioned anything specific, "I don't want to be language specific" I love to work on any language and any technology for AI and Backend Dev
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
