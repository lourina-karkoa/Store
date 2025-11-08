import { useTranslation } from "react-i18next";

export default function Lang({ lang }) {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={() => i18n.changeLanguage(lang)}
      className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-md bg-[#478ABE]"
    >
      <p className="text-lg font-medium text-white">{lang.toUpperCase()}</p>
    </div>
  );
}
