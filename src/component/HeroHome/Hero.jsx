import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "./../../assets/images/image1.png";
import { dataHero } from "../../data/HeroCard";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div id="home" className="w-full px-6 md:px-16 xl:!px-32 flex justify-between items-center border-b border-[#e6e9f2] text-gray-identity h-[calc(100vh-80px)]">
      <div className="w-3/6">
        <h2 className="text-6xl">{t(dataHero.titlePrimaryKey)}</h2>
        <h2 className="text-6xl pb-6">{t(dataHero.titleSecondaryKey)}</h2>
        <h3 className="text-3xl">{t(dataHero.textHeroKey)}</h3>
      </div>
      <div className="w-2/5">
        <img src={image1} className="w-full" />
      </div>
    </div>
  );
}
