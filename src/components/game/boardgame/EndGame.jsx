import React, { useState } from 'react'
import { Endgame, EndContainer, EndPopup } from '../../ui/game/Boardgame'
import { useDispatch } from 'react-redux'

import { changeProgressAction } from '../../../redux/gamesDukes'

import { useTranslation } from "react-i18next";

const EndGame = ({questions}) => {

    const dispatch = useDispatch()

    const { t } = useTranslation();

    const [ popup, setPopup ] = useState(false)


    const handleClick = () => {
        console.log('yes');
        
        setPopup(!popup)
        dispatch(changeProgressAction('action-plan'))
    }
    
    
    
    return (
        <EndContainer>
            <Endgame>
                {
                    questions !== null && questions.length > 6 && (
                        <div className="button" onClick={() => setPopup(!popup)}>
                            <p className="link"> {t('action_plan')} </p>
                        </div>
                    )
                }
            </Endgame>

            {
                popup && (
                <EndPopup>
                    <div className="d-flex bg-light text-dark p-5 align-items-center w-50 rounded flex-column">
                        <div className="row w-100">
                        <h4 className="text-center">
                            {t('want_to_continue')}
                        </h4>
                        </div>
                        <div className="mt-4 d-flex justify-content-around row  w-100 flex-row align-items-center">
                            <button onClick={() => setPopup(!popup)} className="btn btn-lg btn-outline-dark rounded-pill col-5">
                                NO
                            </button>
                            <button onClick={() => handleClick()} className="btn btn-lg btn btn-outline-danger rounded-pill col-5">
                                {t('yes')}
                            </button>

                        </div>
                    </div>
                </EndPopup>
                )
            }
        </EndContainer>
    )
}

export default EndGame
