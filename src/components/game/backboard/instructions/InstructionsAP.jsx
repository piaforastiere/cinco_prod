import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

import { PlayersContainer, PlayersDisplay } from '../../../ui/game/Boardgame';

import { BsX } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const InstructionsAP = () => {

    const [ show, setShow ] = useState(false)

    const { t } = useTranslation();


    const handleClick = () => {
        setShow(!show)
        // document.getElementById('instructive').classList.remove('active')
    }


    return (
        <PlayersContainer className="instructions" style={ !show ? {width: "40px"} : {width: "530px"}}>
            <div className="button">
                <AiOutlineStar onClick={handleClick}/>
            </div>
            
            
            <PlayersDisplay className={ show ? 'active intructivo' : 'intructivo'}>
                <p className="text-uppercase fw-bolder" > {t('how_to_play')} </p>
                <ul className="instructions" >
                        <li className="text-start">
                            
                           {t('action_plan_three')}
                           
                        </li>
                        <br/>
                        <p className="text-start">
                            
                        <strong className="text-uppercase" >
                                {t('action_plan_suggestions')}
                            </strong>
                        </p>
                        <p className="text-start text-uppercase" >
                            
                            {t('action_plan_suggestions_list_title')}
                        </p>
                        <li className="text-start" >
                            
                            {t('action_plan_suggestions_list_one')}
                        </li>
                        <li className="text-start" >
                            
                            {t('action_plan_suggestions_list_two')}
                        </li>
                        <li className="text-start" >
                            
                            {t('action_plan_suggestions_list_three')}
                        </li>
                        <br/>
                        <p className="text-start" >
                            {t('action_plan_suggestions_one')}
                        </p>
                        <p className="text-start" >
                            {t('action_plan_suggestions_two')}
                        </p>
                        <p className="text-start" >
                            {/* {t('action_plan_suggestions_three')} */}
                            {t('action_plan_suggestions_four')}
                        </p>
                </ul>
                <div className="close" onClick={handleClick}><BsX /></div>
            </PlayersDisplay>
        </PlayersContainer>
    )
}

export default InstructionsAP
