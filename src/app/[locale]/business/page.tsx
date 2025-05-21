"use client";
import React, { useEffect, useState } from "react";
import framer01 from "@/assets/Frame 866.png";
import back from "@/assets/background.png";
import framer02 from "@/assets/Frame 840.png";
import Image from "next/image";
import BoxWork, { ProjectType } from "@/components/BoxWork";
import axios from "axios";
import { useTranslations } from "next-intl";

export default function Business() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const p = useTranslations('portfolio')
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        setProjects(response.data.data);
        console.log("fetch Project Success", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="container flex flex-col gap-5 items-center py-10 ">
        <h1 className="text-[20px] md:text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
          {p('title')}
        </h1>
        <p className="md:px-[300px] md:text-[20px] text-center font-[700]">
           {p('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative container ">
        {projects.map((project: ProjectType) => {
          return <BoxWork key={project.id} project={project} />;
        })}
      </div>
      <div className="">
        <Image
          alt="des"
          src={framer01}
          className="w-[800px]  absolute top-0 right-[-250px] z-[-1] "
        />
        <Image
          alt="des"
          src={framer02}
          className="w-[800px]  absolute top-0 left-[-150px] z-[-1] "
        />
        <Image
          alt="des"
          src={back}
          className="w-full absolute h-[700px] top-[25%] opacity-[0.5] left-[50%] translate-x-[-50%]  z-[-1] "
        />
      </div>
    </div>
  );
}
