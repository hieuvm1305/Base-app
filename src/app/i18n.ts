import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import COMMON_EN from "../i18n/en/common.json";
import COMMON_VI from "../i18n/vi/common.json";
import PRODUCT_EN from "../i18n/en/product.json"
import PRODUCT_VI from "../i18n/vi/product.json"
const resources = {
  fr: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "shutdown": "Welcome to React ",
      "cracking": "bongjua",
    },
  },
  en: {
    common: COMMON_EN,
    product: PRODUCT_EN
  },
  vi: {
    common: COMMON_VI,
    product: PRODUCT_VI
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ns: ["common", "product"], // list of namespace
    defaultNS: "common", // default Namespace
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
