import React from "react";
import { useTranslation } from "react-i18next";
import { About } from "../../data/About";
import Title from "../Title/Title";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div id="about" className="px-6 md:px-16 xl:!px-32 flex flex-col items-center justify-center gap-5 border-b border-[#e6e9f2] py-14 bg-[#FBEBEB]">

      <Title tit={t(About.titleSeckey)} />

      <h3 className="text-2xl">
        {t(About.h3key)}
      </h3>

      <div className="flex items-center justify-between w-full pt-6">
        {About.AboutCard.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#478ABE] flex items-center justify-center">
              <img src={item.path} className="w-14" />
            </div>
            <p>{t(item.titleKey)}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
