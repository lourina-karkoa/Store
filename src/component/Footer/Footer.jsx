import React from "react";
import { useTranslation } from "react-i18next";
import { dataFooter } from "../../data/FooterData";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-b border-[#e6e9f2] px-6 md:px-16 xl:!px-32 flex flex-col bg-[#FBEBEB] py-6 justify-center items-center text-gray-identity xl:text-lg desktop:text-2xl w-full">
      <div className="flex justify-center items-center gap-1">
        <p>{t(dataFooter.footerOneKey)}</p>
        <p>{t(dataFooter.footerTwoKey)}</p>
      </div>
    </footer>
  );
}
