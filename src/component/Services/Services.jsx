import React from "react";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import { ServData } from "../../data/Services";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div id="services" className="px-6 md:px-16 xl:!px-32 flex flex-col items-center justify-center gap-5 border-b border-[#e6e9f2] py-14">
      <Title tit={t(ServData.TitleServKey)} />

      <div className="flex items-center justify-between w-full pt-6">
        {ServData.ServicesCard.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center px-8 py-4 rounded-md bg-[#478ABE]"
          >
            <p>{t(item.titleKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
