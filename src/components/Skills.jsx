"use client";;
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    (<div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          I build with {" "}
        <LinkPreview url="https://www.java.com/en/" className="font-bold">
          Java
        </LinkPreview>{" "}
        <LinkPreview url="https://www.python.org/" className="font-bold">
          Python
        </LinkPreview>{" "}
        <LinkPreview url="https://www.javascript.com/" className="font-bold">
          Javascript
        </LinkPreview>{" "}
        and sometimes with{" "}
        <LinkPreview url="https://www.rust-lang.org/" className="font-bold">
          Rust.
        </LinkPreview>{" "}
        I am not language specific
      </p>
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Check out my{" "}
        <LinkPreview
          url="https://github.com/Tuhinm2002"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          GitHub
        </LinkPreview>{" "}
        for more amazing projects and other cool tech stacks  
      </p>
    </div>)
  );
}
