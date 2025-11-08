import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ملفات الترجمة
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";
import fr from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector) // يكتشف لغة المستخدم تلقائيًا
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
