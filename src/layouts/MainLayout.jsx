import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="font-Outfit w-full max-w-[1920px] m-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
