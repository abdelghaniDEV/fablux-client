import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import logoHero from "@/assets/Asset 13 1.png";
import desighn from "@/assets/Frame 840.png";
import { Link } from "@/i18n/navigation";
import { BriefcaseBusiness } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero')
  const text = "Fablux Group";
  return (
    <div className="container overflow-hidden">
        {/* hero */}
        <div className="md:flex   items-center gap-[100px] py-5 md:py-10 relative z-[40]">
          <motion.div className="md:w-[700px] text-center md:text-start z-[10]">
            <h3 className=" text-[30px] md:text-[50px] text-primary font-[700]">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
            <h1 className="text-[30px] md:text-[50px] font-[700] leading-[38px] md:leading-[65px] pb-5">
              {t('title')}
            </h1>
            <p className="text-text">
              {t('text')}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="z-[20] hidden md:block"
          >
            <Image src={logoHero} className="w-[350px]" alt="Logo Hero" />
          </motion.div>
          <div className="absolute right-[30px] z-[-1] ">
            <Image src={desighn} className="z-[-1] w-[500px]" alt="Design" />
          </div>
          <div className="absolute left-[30px] top-[40px] z-[-1] ">
            <Image src={desighn} className="z-[-1] w-[500px]" alt="Design" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center flex-col items-center gap-4 md:pt-4 md:pb-[100px] pb-8  z-[1000]"
        >
          <h1 className=" text-[16px]  px-10 md:text-[28px] z-[100] font-[800] text-center md:leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
           {t('title1')}
          </h1>
          <Button className="z-[100]">
            <Link
              href={"/business"}
              className="text-[20px] flex items-center gap-3"
            >
              <span>{t('button')}</span>
              <BriefcaseBusiness />
            </Link>
          </Button>
        </motion.div>
      </div>
  )
}
