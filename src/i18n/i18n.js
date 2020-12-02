import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import translateEN from "./locales/en-US.json";
import translateDK from "./locales/da-DK.json";

const resources = {
  en_US: { translation: translateEN },
  da_DK: { translation: translateDK },
};

i18n.on('languageChanged', function (lng) {  
  // if the language we switched to is the default language we need to remove the /en from URL
  // if (lng === i18n.options.fallbackLng[0]) {
  //   if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
  //     const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
  //     window.location.replace(newUrl)
  //   }
  // }
  if(!window.location.pathname.includes(lng)){
    const path = window.location.pathname;
    const newUrl = lng + path;
    window.location.replace(newUrl);
  }
});

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)     
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    whitelist: ['en_US', 'da_DK'],
    fallbackLng: ['en_US'],
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
