import { Link } from "@/i18n/navigation";
import { Clock, Mail, Phone } from "lucide-react";
import React from "react";
import logo from "../assets/Frame 843.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer')
  const h = useTranslations('header')
  const locale = useLocale()
  return (
    <footer>
      <div className=" bg-[#00C4F44D]  mt-10 ">
        <div className={` grid md:grid-cols-3 gap-[22px] py-10 ${locale === "en" && "font-outfit"} container   `}>
          <div className="flex flex-col gap-5 ">
            <Image src={logo} alt="logo" className="w-[200px] text-main-text" />
            <p>{t('description')}</p>
            <div>
              <ul className="flex gap-3">
                <li className="]">
                  <i className="bx bxl-facebook text-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
                </li>
                <li>
                  <i className="bx bxl-instagram text-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
                </li>
                <li>
                  <i className="bx bxl-linkedin text-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-[600]">{t('services.title')}</h3>
            <ul className="flex flex-col gap-2 pt-2 text-[14px]">
              <li className="flex items-center gap-1">
                <i className="bx bx-check text-main-primary text-[30px]"></i>
                <span>{t("services.app")}</span>
              </li>
              <li className="flex items-center gap-1">
                <i className="bx bx-check text-main-primary text-[30px]"></i>
                <span>{t("services.business")}</span>
              </li>
              <li className="flex items-center gap-1">
                <i className="bx bx-check text-main-primary text-[30px]"></i>
                <span>{t("services.video")}</span>
              </li>
              <li className="flex items-center gap-1">
                <i className="bx bx-check text-main-primary text-[30px]"></i>
                <span>{t("services.3d")}</span>
              </li>
              <li className="flex items-center gap-1">
                <i className="bx bx-check text-main-primary text-[30px]"></i>
                <span>{t("services.marketing")}</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-10  md:gap-[80px] ">
            <div>
              <h3 className="text-[26px] font-[600]">{t('pages.title')}</h3>
              <ul className="flex flex-col gap-[14px] pt-2 text-[16px]">
                <li>
                  <Link href={"/"}>{h('home')}</Link>
                </li>
                <li>
                  <Link href={"/"}>{h('about')}</Link>
                </li>
                <li>
                  <Link href={"/"}>{h('services')}</Link>
                </li>
                <li>
                  <Link href={"/"}>{h('business')}</Link>
                </li>
                <li>
                  <Link href={"/"}>{t('pages.vision')}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[26px] font-[600]">{t('contact.title')}</h3>
              <ul className="flex flex-col gap-[14px] pt-2 text-[14px]">
                <li className="flex gap-2 items-center">
                  {/* <i className="bx bx-phone text-main-primary text-[30px]"></i> */}
                  <Phone className="text-main-primary" />
                  <span>(205) 555-01000</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Clock className="text-main-primary" />
                  <span>Mon - Fri : 9 am- 11 pm</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail className="text-main-primary" />
                  <span>Email@Fablux Group.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pb-2">
          <span className="text-[13px] font-[700]">
            Fablux Group © 2022 - All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
