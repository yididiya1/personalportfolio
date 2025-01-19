import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#2B2B32]">
      <Hero />
      <Projects />
    </div>
     );
}
