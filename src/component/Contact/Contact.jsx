import React from "react";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import { contactData } from "../../data/contactData";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="px-6 md:px-16 xl:!px-32 flex flex-col items-center justify-center gap-5 border-b border-[#e6e9f2] py-14">

      <Title tit={t(contactData.titContact)} />

      <form className="w-full flex flex-col gap-4 items-center justify-center">

        {contactData.dataInput.map((item) => (
          <input
            key={item.id}
            placeholder={t(item.placeholderKey)}
            className="border border-[#478ABE] px-5 py-2 w-full rounded-2xl"
          />
        ))}

        <textarea
          placeholder={t(contactData.textareaKey)}
          className="border border-[#478ABE] px-5 py-2 w-full rounded-2xl"
        />

        <button className="w-full bg-[#478ABE] rounded-2xl py-2">
          {t(contactData.submitKey)}
        </button>

      </form>
    </div>
  );
}
