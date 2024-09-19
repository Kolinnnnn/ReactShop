import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import httpBackend from "i18next-http-backend"

i18n.use(httpBackend).use(initReactI18next).init({
    lng: localStorage.getItem("language")??"en",
    fallbackLng: "en",
    backend: {
        loadPath: "/locales/{{lng}}/translation.json"
    }
})

export default i18n