import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Theme from './Theme'
import Cards from './Cards'

import { BoardContainer, Board, RightBar, MenuButton, Gradient, MessageButton, AppointmentIdentifired } from '../../ui/game/Boardgame'

import board from '../../../assets/img/tableroout.jpg'
import boardES from '../../../assets/img/es-tableroout.jpg'
import { getInitialCardsAction, getInitialNotessAction } from '../../../redux/gamesDukes'
import ShowQuestions from './ShowQuestions'
import EndGame from './EndGame'
import Notes from './Notes'
import Players from './Players'
import Instructions from './Instructions'

import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import { db } from '../../../firebase'


const Boardgame = ({themeDB}) => {

    const dispatch = useDispatch()
    
    const password = useSelector(store => store.games.password)
    const playerType = useSelector(store => store.games.gameData.playerType)
    const notesDB = useSelector(store => store.games.notes)  
    const appointmentSubject = useSelector(store => store.games.appointmentSubject) 
    
    const { t, i18n } = useTranslation();
    
    console.log('notes', notesDB);
    
    const [ openMenu, setOpenMenu ] = useState(false)

    const [ questions, setQuestions ] = useState(null)
    const [ noteData, setNoteData] = useState([]);
    
    const styleBoard = {
        backgroundImage: "url("+board+")"
    }
    const styleBoardES = {
        backgroundImage: "url("+boardES+")"
    }
    
    useEffect(() => {
        document.querySelector('.navbar').style.display = "none"
        document.querySelector('.LanguageSelector').style.display = "none"
    },[])

    useEffect(() => {

        dispatch(getInitialCardsAction())
        dispatch(getInitialNotessAction())
        
    }, [password, dispatch])
    
    console.log('notes', noteData);
    
    const handleMenu = () => {
        setOpenMenu(!openMenu)
        document.querySelector('.inst-menu').style.display = "none"
    }
    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('notes')
            .orderBy('timestamp', 'asc')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(password, {
            next: querySnapshot => {
                const updatedQuestionsItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setNoteData(updatedQuestionsItems.reverse());
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [password, setNoteData]);

    return (
        <div className="d-flex justify-content-center w-100 h-100" >
            
                    <BoardContainer>
                    
                            <Board id={openMenu === true ? 'close' : undefined} style={i18n.language === "en" ? styleBoard : styleBoardES} />
                            
                            <Cards  />
                            <Theme theme={themeDB} />

                            
                            {
                                playerType === 'master' && (
                                    <>
                                        {
                                            appointmentSubject !== null && appointmentSubject !== undefined && appointmentSubject.length > 0 &&
                                            <AppointmentIdentifired>
                                                {t('appoin_identif')}: {appointmentSubject}
                                            </AppointmentIdentifired>
                                        }
                                        <Players />
                                    </>
                                )
                            }
                            
                                <Instructions />
                            
                            <div className="inst-menu" > {t('open_cards_chat')} </div>
                    </BoardContainer>
                    
                    <RightBar className={openMenu === true ? 'open' : undefined} id="right-menu" >
                        
                        { !openMenu ?
                            <>
                            <MenuButton onClick={() => handleMenu()}>&#x21e4;</MenuButton>
                            <MessageButton onClick={() => handleMenu()}>

                                {   
                                    noteData.length > 0 &&
                                    <p> {noteData.length} </p>
                                }
                                
                                <IoChatboxEllipsesOutline />
                            </MessageButton>
                            </>
                            :
                            <div className="d-flex flex-column">
                                <div className="col-sm-12">
                                <MenuButton onClick={() => handleMenu()}>&#x21e5;</MenuButton>
                                {
                                   playerType === 'master' && <EndGame questions={questions} />
                                   
                                }
                                </div>
                                <div className="col-sm-12">
                                <ShowQuestions setQuestions={setQuestions} questions={questions} />
                                
                                <Notes noteData={noteData}  />
                                <Gradient />
                                </div>
                                
                            </div>
                            
                        }
                    </RightBar>


                    </div>
    )
}

export default Boardgame
