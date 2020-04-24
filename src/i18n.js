import i18n from "i18next";
import translationEN from "./localization/en-us.json";
import { initReactI18next } from "react-i18next";

// the translations
const resourceContent = {
    en: {
        translation: translationEN
    }
};

i18n
    // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
            transSupportBasicHtmlNodes: true
        },
        // 'en' | 'es'
        lng: "en",
        fallbackLng: "en",
        resources: resourceContent,
        keySeparator: true,
        react: {
            transSupportBasicHtmlNodes: true
        }
    });

export default i18n;
