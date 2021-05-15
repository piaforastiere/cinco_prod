import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";

import { ContainerBoard } from '../../ui/game/BoardTheme'
import PopUpTheme from './PopUpTheme'

import close from '../../../assets/img/cerrado.jpg'
import left from '../../../assets/img/open-left.jpg'
import right from '../../../assets/img/open-right.jpg'

import closeES from '../../../assets/img/es-cerrado.jpg'
import leftES from '../../../assets/img/es-open-left.jpg'
import rightES from '../../../assets/img/es-open-right.jpg'

const ThemeForm = () => {

    const { i18n } = useTranslation();
    const playerType = useSelector(store => store.games.gameData.playerType)
    const theme = useSelector(store => store.games.theme)
    

    useEffect(() => {
        
        document.querySelector('.navbar').style.display = "none"
        document.querySelector('.LanguageSelector').style.display = "none"
        if (playerType.length > 0 && theme == null) {
           
            document.querySelector('.left').classList.add('open')

        }
        
        
        
    }, [playerType, theme])
    console.log('theme', theme);
    
    
    const styleClose = {
        backgroundImage: "url("+close+")"
    }
    const styleLeft = {
        backgroundImage: "url("+left+")"
    }
    const styleRight = {
        backgroundImage: "url("+right+")"
    }

    const styleCloseES = {
        backgroundImage: "url("+closeES+")"
    }
    const styleLeftES = {
        backgroundImage: "url("+leftES+")"
    }
    const styleRightES = {
        backgroundImage: "url("+rightES+")"
    }
    
    return (
        <div className="d-flex justify-content-center w-100 h-100">
            
            
            <ContainerBoard id={theme === null ? '' : 'back'}>
                <div className="wrapper">
                    <div className="left" id="left" >
                        <div className="l-front" style={i18n.language === "en" ? styleClose : styleCloseES} ></div>
                        <div className="l-back" style={i18n.language === "en" ? styleLeft : styleLeftES} ></div>
                    </div>
                    <div className="right" style={i18n.language === "en" ? styleRight : styleRightES} ></div>
                </div>
                
            </ContainerBoard>
            
            <PopUpTheme  />  

            
    
        </div>
    )
}

export default ThemeForm
