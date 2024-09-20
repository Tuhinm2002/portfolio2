import { HoverEffect } from "@/components/ui/card-hover-effect"
import { CoverDemo } from "./ProjectText";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <CoverDemo></CoverDemo>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "NLP using Computer Vision",
    description:
      "In this project, we harness the power of BERT to analyze text presented in front of a camera. The system predicts the emotion conveyed by the text in real time, combining the capabilities of CV and NLP. Perfect for applications where understanding human emotion quickly is key!",
    link: "https://github.com/Tuhinm2002/BERTVision.git",
  },
  {
    title: "YouTube comments sentiment analysis using BERT model",
    description:
      "This project leverages the power of BERT (Bidirectional Encoder Representations from Transformers) and the YouTube Data API to perform real-time sentiment analysis on YouTube comments. The tool fetches comments from any YouTube video and categorizes them as positive or negative in real-time.",
    link: "https://github.com/Tuhinm2002/bert_youtube_sentiment.git",
  },
  {
    title: "Cars ecommerce web app",
    description:
      "Cars-Commerce is an ecommerce platform for selling cars, built using React for the frontend and Java Spring Boot for the backend. The platform provides an intuitive user interface for browsing, searching, and purchasing cars, while maintaining a robust backend for managing inventory, orders, and user accounts.",
    link: "https://github.com/Tuhinm2002/cars-commerce.git",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website made by using Next js,react js,Aceternity UI",
    link: "https://meta.com",
  },
];
