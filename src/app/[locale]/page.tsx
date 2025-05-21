"use client";
import Hero from "@/components/Hero";
import OurClient from "@/components/OurClient";
import OurServices from "@/components/OurServices";
import SliderProjects from "@/components/SliderProjects";

export default function Home() {
  // const title = t("hero.title");
  // const text = "Fablux Group";
  // const titleService = t("service.title");
  return (
    <div className="">
       <Hero />
       <OurServices />
       <SliderProjects />
       <OurClient />
    </div>
  );
}
