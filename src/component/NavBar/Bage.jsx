import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { dataNavBar } from "../../data/NavBar";

export default function Bage({ humbrger }) {
  const { t } = useTranslation();
  const location = useLocation(); // لمعرفة الهاش الحالي

  return (
    <ul className={`flex justify-between items-center gap-3 lg:gap-4 desktop:gap-6 ${humbrger}`}>
      {dataNavBar.map(item => {

        const isHashLink = item.path.startsWith("#");
        const isActive = isHashLink
          ? location.hash === item.path
          : false; // الروابط العادية ما إلها Active

        return (
          <li key={item.id}>
            <a
              href={item.path}
              className={`
                ${item.style || ""}
                ${isActive ? "text-[#478ABE] font-bold" : ""}
              `}
            >
              {t(item.titleKey)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
