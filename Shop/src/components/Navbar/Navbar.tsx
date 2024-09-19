import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css';
import { useTranslation } from "react-i18next";

export function Navbar() {
    const {t,i18n} = useTranslation()
    const handleLanguageChange = (languange) => {
        localStorage.setItem("language",languange)
        i18n.changeLanguage(languange)
    }
    return (
        <header>
            <ul className="navbar-left">
                <li><a href="/">{t("dashboard")}</a></li>
                <li><a href="/products">{t("products")}</a></li>
                <li><a href="/cart">{t("cart")}</a></li>
                <li><a href="/contact">{t("contact")}</a></li>
                
            </ul>
            <ul className="navbar-right">
                <li><button onClick={() => handleLanguageChange("en")}>EN</button></li>
                <li><button onClick={() => handleLanguageChange("pl")}>PL</button></li>
                <li><SearchBar /></li>
                <li><a className="login" href="/login"><FontAwesomeIcon icon={faRightToBracket} /></a></li>
            </ul>
        </header>
    );
}