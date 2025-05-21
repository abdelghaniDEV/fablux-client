import React, { ReactNode } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  borderStyle: boolean;
}

export default function BoxService({
  icon,
  title,
  description,
  borderStyle,
}: Props) {
  const locale = useLocale()
  return (
    <Card
      className={`bg-background z-[1000] rounded-none  border-[1.5px] md:border-t-0 md:border-b-0  border-x-primary ${
        borderStyle
          ? "md:border-t-[1.5px] border-t-primary rounded-t-[10px]"
          : "md:border-b-[1.5px] border-b-primary rounded-b-[10px]"
      } text-white px-5 py-8 flex flex-col items-center justify-center gap-3`}
    >
      <div className="t  bg-[#5F5F5F33] relative p-3 rounded-full w-[80px] h-[80px]">
        {icon}
      </div>
      <h3 className="text-[14px] md:text-[18px] text-center items-center font-[700]">
        {title}
      </h3>
      <p className={`text-[12px] text-center text-text hidden md:block ${locale === "ar" ? "font-arabic" : "font-outfit"}`}>
        {description}
      </p>
      <Button className="flex items-center gap-2 mt-4">
        <span>Learn More</span>
        <ChevronRight />
      </Button>
    </Card>
  );
}
