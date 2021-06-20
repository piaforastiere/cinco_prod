import React, { useState } from 'react'
import { PopupContainer, InputSubmit } from '../../ui/game/BoardTheme'
import { useSelector, useDispatch } from 'react-redux'

import { setThemeAction } from '../../../redux/gamesDukes' 
import { useTranslation } from "react-i18next";


const PopUpTheme = () => {

    const dispatch = useDispatch()

    const playerType = useSelector(store => store.games.gameData.playerType)

    const { t } = useTranslation();

    const [ subject, setSubject ] = useState('')
    const [ error, setError ] = useState(null)

    const handleTheme = (e) => {
        e.preventDefault()

        if (!subject.trim()) {
            setError(t('error_subject'))
            return
        }

        setError(null)
        
        dispatch(setThemeAction(subject))
    }

    return (
        <PopupContainer id="pop">
        <form className="popups-cont s--popup-active" onSubmit={handleTheme} >
        
        <div className="popup s--active">
        
            <div className="popup__content">
            <h3 className="popup__heading"> {t('choose_topic')} </h3>
            <p className="popup__text"> {t('example')} </p>
            { error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}
            {playerType === 'master' ?
            <div>
                <input className="popup__input" type="text" placeholder={t('theme')}  onChange={e => setSubject(e.target.value)}  />
                <InputSubmit type="submit" value={t('ready')}  />
            </div> :
            <p className="popup__text"> {t('wait_to_master')} </p>
            }
            </div>
        </div>
        </form>
        {/* <button type="button" className="btn btn-dark btn-lg rounded-pill mt-5 text-uppercase" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ zIndex: '9999', position: 'relative'}}>
                How to make sure the topic works
        </button>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">How to make sure your topic works</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <p>
            1. Name it: What do you want to take a closer look at? <br/> Can you state it in a short sentence? <br/> When we say short, we mean the length you will remember, and be able to repeat as many times as you like as you make your way through the powers. <br/> Example: "Trust within our team", or “My relationship with personal power” 
            </p>
            <p>
            2. Own it: if the topic, subject or situation don’t have an owner (you), the game won’t work. 
            </p>
            <p>
            3. State it: don’t present it as a question… questions hide the expectation for an answer. <br/> When you state the situation or matter, it’s you who have the power of making questions about it. <br/> Continuing with the example for the subject: Trust within our team, you can ask: What is it that wants to emerge? What is not being said about this? 
            </p>
            <p>
            4. Test it:give yourself the chance of observing this particular situation through the lens of the five powers. 
            </p>
            <p>
            5. Start playing!
            </p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div> */}
        </PopupContainer>
    )
}

export default PopUpTheme
