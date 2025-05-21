import React from "react";
import { motion } from "motion/react";
import desighn03 from "@/assets/Frame 894.png";
import map from "@/assets/kh.png";
import desighn from "@/assets/Frame 840.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurClient() {
  const v = useTranslations('vision')
  return (
    <div className="flex flex-col md:flex-row  items-center gap-[80px] md:px-10 pt-4 pb-10 relative container overflow-hidden ">
      <motion.div className="absolute left-0 top-0 z-[1000]">
        <Image src={desighn03} className="w-[800px] scale-x-[-1]" alt="Map" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-[600px] z-[1000]"
      >
        <h2 className="text-[40px] font-[700] text-primary">{v('title')}</h2>
        <h1 className="text-[30px] font-[700]">
          {v('subtitle')}
        </h1>
        <p className="leading-[25px] py-3 font-outfit text-text   ">
           {v('text')}
        </p>
        <div className="grid grid-cols-3 items-center">
          <div className="font-outfit flex flex-col items-center">
            <h4 className="text-[30px] font-[700]">32K+</h4>
            <span>People Joined</span>
          </div>
          <div className="font-outfit flex flex-col items-center">
            <h4 className="text-[30px] font-[700]">250+</h4>
            <span>Vip Users</span>
          </div>
          <div className="font-outfit flex flex-col items-center">
            <h4 className="text-[30px] font-[700]">87+</h4>
            <span>Big Company</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-[1000]"
      >
        <Image src={map} className="w-[500px] z-[1000]" alt="Group Image"  />
      </motion.div>
      <Image
        src={desighn}
        className="w-[800px] absolute scale-x-[-1] right-[-200px] opacity-[0.6] top-1 z-[100]"
        alt="Map"
      />
      <Image
        src={desighn}
        className="w-[800px] absolute  left-[-200px] opacity-[0.6] top-1 z-[100]"
        alt="Map"
      />
    </div>
  );
}
