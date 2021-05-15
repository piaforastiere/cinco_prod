import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import {ContainerHome} from '../../src/components/ui/Home'
import board from '../../src/assets/img/bg-home.jpg'
import icon from '../../src/assets/img/info_icon.png'

const Home = () => {

    const { t, i18n } = useTranslation();

    const styleBoard = {
        backgroundImage: "url("+board+")"
    }

    useEffect(() => {
        
        document.querySelector('.navbar').classList.add('active')
        
        document.querySelector('.LanguageSelector').classList.add('active')
        
        
        
    },[])


    return (
        <ContainerHome className="container-fluid d-flex justify-content-center align-items-center" lang={i18n.language} style={styleBoard}>
            <div className="content d-flex justify-content-center">
                <h1> {t('lets_play')} </h1>
                
                <Link to="/instructions">
                    <img src={icon} alt="" className="icon"/>
                </Link>
            </div>
        </ContainerHome>
    )
}

export default withRouter(Home)
