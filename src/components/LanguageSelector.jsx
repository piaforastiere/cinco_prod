import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";

import {ContainerSelector} from './ui/LanguageSelector'

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        
        document.getElementById(i18n.language).classList.add('active')
    }, [i18n])

    const changeLanguage = lng => {
        const buttons = document.querySelectorAll('.lang-button')
        buttons.forEach(item => item.classList.remove('active'))
        
        i18n.changeLanguage(lng);
        
        document.getElementById(lng).classList.add('active')
    };


    return (
        <ContainerSelector className="LanguageSelector">
            <p>{t('language')} :</p>
            <button className="lang-button" id="en" onClick={() => changeLanguage("en")}>EN</button>
            <button className="lang-button" id="es" onClick={() => changeLanguage("es")}>ES</button>
        </ContainerSelector>
    );
}

export default LanguageSelector
