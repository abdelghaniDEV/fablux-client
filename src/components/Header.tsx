"use client";
import React, { useState } from "react";
import { AlignJustify, Globe } from "lucide-react";
// import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/Frame 843.png";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openConatct, setOpenContact] = useState(false);
  const t = useTranslations("header");
  const newLocal =
    "md:border-[1px] md:rounded-full md:w-[40px] md:h-[40px] md:p-2 border-primary cursor-pointer ";

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    router.push(pathname, {locale: newLang});
  };

  return (
    <div className="relative my-4 container">
      <div className="py-2   ">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <AlignJustify
              className={newLocal}
              onClick={() => setOpenNavbar(!openNavbar)}
            />
          </div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-[125px]"
              unoptimized
            />
          </Link>

          <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />

          <div className="flex items-center gap-2 md:gap-5">
            <Button
              onClick={() => setOpenContact(true)}
              className="hidden md:block text-white py-2 px-4 rounded-md"
            >
              {t("contact")}
            </Button>
            <div
              className="flex gap-1 items-center"
              onClick={() => switchLanguage(locale === "ar" ? "en" : "ar")}
            >
              <span className="text-[15px] uppercase">{locale}</span>
              <Globe className=" cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openConatct} onOpenChange={setOpenContact}>
        <DialogTrigger asChild></DialogTrigger>
        <ContactForm />
      </Dialog>
    </div>
  );
}
