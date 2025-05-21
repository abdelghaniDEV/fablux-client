"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectType } from "./BoxWork";
import axios from "axios";
import Image from "next/image";

export default function SliderProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        console.log("Projects Fetchinf Success", response);
        setProjects(response.data.data)
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="container py-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {projects.map((project : ProjectType) => {
            if(project.show === true) {
                return (
                    <SwiperSlide className="grid grid-col-2 gap-6" key={project.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[22px] font-[700] text-primary">Latest Works</h3>
                            <h1 className="text-[25px] font-[700]">{project.name} - {project.type}</h1>
                            <p className="text-text font-outfit">{project.description}</p>
                        </div>
                        <div className="w-full h-[300px] border-[2px] border-primary rounded-[10px]">
                            <Image src={project.image} alt={project.name} width={100} height={250} unoptimized className=" w-full h-[300px] rounded-[10px] " />
                        </div>
                        </div>
    
                    </SwiperSlide>
                )
            }
        })}
        
      </Swiper>
    </div>
  );
}
