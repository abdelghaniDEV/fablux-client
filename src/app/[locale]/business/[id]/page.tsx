"use client";
import SectionCart from "@/components/SectionCart";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import framer from "@/assets/Frame 866.png";
import framer01 from "@/assets/Frame 840.png";

export interface SectionType {
  id?: string;
  title: string;
  description: string;
  images: string[];
}

interface TypeProject {
  name: string;
  description: string;
  type: string;
  image: string;
  days: string;
  sections: SectionType[];
}

export default function ProjectDetails() {
  const params = useParams();
  const [project, setProject] = useState<TypeProject>();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`
        );
        console.log(response.data);
        setProject(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProject();
  }, [params.id]);
  return (
    <div className="relative overflow-hidden">
      <div>
        <h1 className="text-[20px] md:text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
          {project?.type}
        </h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[25px]">{project?.name}</h3>
            <p className="text-text font-outfit py-3 ">
              {project?.description || ""}
            </p>
          </div>
          <div className="flex items-center justify-between text-[20px] ">
            <h5>Number of working days</h5>
            <span>{project?.days} Days</span>
          </div>
        </div>

        <div>
          {project?.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={260}
              className="rounded-[20px] w-full h-[360px]"
            />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center container">
        {project?.sections.map((section: SectionType) => {
          return (
            <SectionCart
              key={section.id}
              title={section.title}
              description={section.description}
              images={section.images}
            />
          );
        })}
      </div>
      <div className="">
        {/* <Image
          alt="TEST"
          src={framer}
          className="w-[800px] absolute bottom-0 right-[-60px] z-[-1]"
        /> */}
        <Image
          alt="framer"
          src={framer}
          className="w-[800px] absolute top-[30%] left-[-60px] z-[-1]"
        />
        <Image
          alt="framer"
          src={framer01}
          className="w-[800px] opacity-[0.5] absolute top-[20px] left-[-60px] z-[-1]"
        />
      </div>
    </div>
  );
}
