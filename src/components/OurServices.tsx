import Image from "next/image";
import React from "react";
import design02 from "@/assets/Frame 866.png";
import { motion } from "motion/react";
import BoxService from "./BoxService";
import {
  LayoutGrid,
  Box,
  Building2,
  Camera,
  File,
  Medal,
  PanelTop, 

} from "lucide-react";
import { useTranslations } from "next-intl";

export default function OurServices() {
  const t = useTranslations('service')
  const titleService = t('title');
  return (
    <div id="services" className="relative container overflow-hidden">
      <div className="absolute left-[-200px] top-20 z-[100]">
        <Image src={design02} className="w-[800px] scale-x-[-1]" alt="Map" />
      </div>
      <div className="z-[1000]">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-[25px] md:text-[40px] font-[700]  text-primary">
            {titleService.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:px-[200px] text-center text-[14px] md:text-[22px] font-[700]"
          >
            {/* <span className="text-[#00C4F499]">Fablux Group</span>  */}
             {t('description')}
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[13px] my-8 z-[1000]">
        <BoxService
          icon={
            <LayoutGrid className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={true}
          title={t('app.title')}
          description={t('app.description')}
        />
        <BoxService
          icon={
            <PanelTop className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={false}
          title={t('web.title')}
          description={t('web.description')}
        />
        <BoxService
          icon={
            <Medal className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={true}
          title={t('brand.title')}
          description={t('brand.description')}
        />
        <BoxService
          icon={
            <Camera className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={false}
          title={t('photo.title')}
          description={t('photo.description')}
        />
        <BoxService
          icon={
            <Box className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={true}
          title={t('3d.title')}
          description={t('3d.description')}
        />
        <BoxService
          icon={
            <Building2 className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={false}
          title={t('business.title')}
          description={t('business.description')}
        />
        <BoxService
          icon={
            <File className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={true}
          title={t('company.title')}
          description={t('company.description')}
        />
        <BoxService
          icon={
            <Medal className=" text-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
          }
          borderStyle={false}
          title={t('marketing.title')}
          description={t('marketing.description')}
        />
      </div>
    </div>
  );
}
