import React, { useState } from 'react'
import { PlayersContainer, PlayersDisplay } from '../../ui/game/Boardgame'

import { BsX } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import Instruction from './Instructions/Instruction';

const Instructions = () => {

    const [ show, setShow ] = useState(false)

    const { t } = useTranslation();

    const handleClick = () => {
        setShow(!show)
        document.getElementById('instructive').classList.remove('active')
    }

    return (
        <PlayersContainer className="instructions">
            <div className="button" >
                <AiOutlineStar onClick={handleClick}/>
            </div>
            
            <Instruction />
            <PlayersDisplay className={ show ? 'active intructivo' : 'intructivo'}>
                <p className="text-uppercase fw-bolder" > {t('how_to_play')} </p>
                <ul className="instructions" >
                        <li className="text-start">
                            
                           {t('instruc_one')}
                        </li>
                        <li className="text-start">
                            
                            {t('how_to_first')}
                        </li>
                        <li className="text-start" >
                            
                            {t('how_to_second')}
                        </li>
                        <li className="text-start" >
                            
                            {t('how_to_third')}
                        </li>
                        <li className="text-start" >
                            
                            {t('how_to_four')}
                        </li>
                        <li className="text-start" >
                            
                            {t('how_to_five')}
                        </li>
                        <li className="text-start" >
                            {t('how_to_six')}
                        </li>
                        <li className="text-start" >
                            {t('how_to_seven')}
                        </li>
                        <li className="text-start" >
                            {t('how_to_eight')}
                        </li>
                </ul>
                <div className="close" onClick={handleClick}><BsX /></div>
            </PlayersDisplay>
        </PlayersContainer>
    )
}

export default Instructions
