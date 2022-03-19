import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ro from "./ro.json";
import hu from "./hu.json";
import en from "./en.json";
import de from "./de.json";
import fr from "./fr.json";

const resources = {
  en: { translation: en },
  hu: { translation: hu },
  ro: { translation: ro },
  de: { translation: de },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "hu", "ro", "de", "fr"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

export default i18n;
