import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export interface ProjectType {
  id: string;
  image: string;
  type: string;
  name: string;
  description: string;
  days: string;
  show : boolean
}

export default function BoxWork({ project }: { project: ProjectType }) {
    console.log(project)
  return (
    <div>
      <div className="border-primary border-[1.5px] rounded-[10px] overflow-hidden   ">
        <Link href={`/business/${project.id}`} className="">
          <Image alt={project.name} width={100} height={260} unoptimized src={project.image} className="rounded-t-[10px] w-full h-[260px] " />
          <div className="p-4 flex flex-col gap-3 bg-black ">
            <h2 className="text-[25px] font-[700] capitalize leading-3 text-primary">
              {project.type}
            </h2>
            <p className="text-[20px] text-white capitalize">{project.name}</p>
            <p
              className={`text-[13px] line-clamp-3 text-text capitalize text-center  font-outfit`}
            >
              {project.description}
            </p>
          </div>
          <hr className="mx-4" />
          <div className="flex items-center justify-between px-4 py-2 text-[12px] text-white">
            <span>Number of working days</span>
            <span>{project.days} Days</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
