import { SectionType } from "@/app/[locale]/business/[id]/page";
import Image from "next/image";
import React from "react";


export default function SectionCart({
  title,
  description,
  images,
}: SectionType) {
  return (
    <div className="flex flex-col gap-5 items-center ">
      <h2 className="text-[20px] md:text-[25px] text-primary font-[700]">{title}</h2>
      <p className="text-center md:text-[20px] md:px-[100px] leading-6">
        {description}
      </p>
      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
          {images.map((image, index) => {
            return (
              <div key={index} className="w-full h-[250px] overflow-hidden">
                <Image
                  src={image}
                  unoptimized
                  width={500}
                  height={500} // أي قيمة مناسبة للحفاظ على النسبة
                  alt={title}
                  className="w-full h-full rounded-[10px]"
                />
              </div>
            );
          })}
        </div>
      )}
     
    </div>
  );
}
