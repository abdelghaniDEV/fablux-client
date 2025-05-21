import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

type NavbarProps = {
  openNavbar: boolean;
  setOpenNavbar: (value: boolean) => void;
};

export default function Navbar({ openNavbar, setOpenNavbar }: NavbarProps) {
  const t = useTranslations('header')
  const locale =  useLocale()
  return (
    <nav
      className={`absolute md:static top-[55px]  left-0 md:left-auto w-full md:w-auto py-10 md:py-0 md:h-auto border-t-[1px] md:border-none h-screen bg-text   md:bg-inherit z-[10000] transform transition-transform duration-500 ${
        openNavbar ? "translate-x-0 " : locale === "en" ? "-translate-x-[200vh] md:translate-x-0" : "-translate-x-[-200vh] md:translate-x-0"}
      }`}
    >
      <ul className="flex flex-col text-black gap-5  md:text-white tracking-[-0.5px] md:flex-row pl-5 md:items-center md:gap-[60px] text-[18px] md:text-[18px] font-[600] ">
        <li
          className="border-b-[1px] pb-4 border-black"
          onClick={() => setOpenNavbar(!openNavbar)}
        >
          <Link href={"/"}>{t('home')}</Link>
        </li>
        <li
          className="border-b-[1px] pb-4 border-black"
          onClick={() => setOpenNavbar(!openNavbar)}
        >
          <Link href={"/"}>{t('about')}</Link>
        </li>
        <li
          className="border-b-[1px] pb-4 border-black"
          onClick={() => setOpenNavbar(!openNavbar)}
        >
          <a href="#services" >{t('services')}</a>
        </li>
        <li
          className="border-b-[1px] pb-4 border-black"
          onClick={() => setOpenNavbar(!openNavbar)}
        >
          <Link href={"/business"}>{t('business')}</Link>
        </li>
      </ul>
    </nav>
  );
}
