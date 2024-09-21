
import { ThreeDCardDemo } from "@/components/Card";
import { FloatingNavDemo } from "@/components/NavBar";
import { CardHoverEffectDemo } from "@/components/Projects";
import { LinkPreviewDemo } from "@/components/Skills";


export default function Home() {
  return (
   <div className="bg-[#F5F5F5]">
   <FloatingNavDemo></FloatingNavDemo>
   <ThreeDCardDemo></ThreeDCardDemo>
   <CardHoverEffectDemo></CardHoverEffectDemo>
   <LinkPreviewDemo></LinkPreviewDemo>
   </div>
  );
}
