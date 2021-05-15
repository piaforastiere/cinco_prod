import React, { useState } from 'react'

import { Card, Footer, ContainerCard, CloseButton, Button, Trophy } from '../../ui/EmailForm'

import image from '../../../assets/img/mail.png'
import { useSelector } from 'react-redux'

import { useTranslation } from "react-i18next";

const PopUp = ({ popUp, setPopUp}) => {

    const { t } = useTranslation();

    const gameInfo  = useSelector(store => store.resume.gameInfo)
    const questions = useSelector(store => store.resume.questions)
    const notes = useSelector(store => store.resume.notes)

    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ error, setError ] = useState(null)
    
    const handleSubmit = () => {
        
        if (!email.trim()) {
            setError(t('insert_email'));
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError(t('correct_email'));
            return
        }

        if (!subject.trim()) {
            setError(t('insert_subject'));
            return
        }

        setError(null)

        const quesSend = questions.map((element) => {
            return "- " +  element.question 
        }).join('\n')

        const notesSend = notes.map((element) => {
            return "- " +  element.note 
        }).join('\n')

        window.open("mailto:" + email + "?subject=" + t('game_resume') + " - " + gameInfo.playedDate + "&body=Master: " + gameInfo.masterName +"%0D"+ t('theme') + ": " + gameInfo.theme+ "%0D"+ t('played_date') + ": " + gameInfo.playedDate + "%0D%0D" + t('questions') + ":%0D " +  encodeURIComponent(quesSend) + "%0D%0D"+ t('notes') +":%0D " +  encodeURIComponent(notesSend));
        
    }

    return (
        <ContainerCard>
                            
                            <Card>
                                <CloseButton onClick={() => setPopUp(!popUp)} >X</CloseButton>
                                    <Trophy src={image} alt=""/>
                                    <p className="text-center w-100 mb-4"> {t('please_complete_info')} </p>
                                    { error && (
                                            <div className="alert alert-danger">
                                                {error}
                                            </div>
                                        )}
                                    <form onSubmit={handleSubmit} className="w-100" >
                                        <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input 
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email} /> 
                                                
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="subject" className="form-label"> {t('subject')} </label>
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                onChange={e => setSubject(e.target.value)}
                                                value={subject} /> 
                                                
                                        </div>
                                        
                                    </form>
                                    
                                    <Footer>
                                        <Button  id="send" onClick={() => handleSubmit()}>
                                            {t('send')}
                                        </Button>
                                    </Footer>
                        

                        </Card>
                        </ContainerCard>
    )
}

export default PopUp
