import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18next.use(HttpApi).init(i18nextOptions);
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome in ABF",
        },
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بك في الحوسبة الممتعة",
        },
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue à vous",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    const html = document.documentElement;

    window.document.dir = i18n.dir();
  }, []);

  <>
    <button
      onClick={() => {
        i18n.changeLanguage("ar");
      }}
    >
      ar
    </button>
    <button
      onClick={() => {
        i18n.changeLanguage("en");
      }}
    >
      er
    </button>
    return <h2>{t("Welcome to React")}</h2>;
  </>;
}
