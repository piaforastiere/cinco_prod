import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import EmailCheck from './game/checks/EmailCheck'
import ThemeForm from './game/checks/ThemeForm'
import Boardgame from './game/boardgame/Boardgame'
import Backboard from './game/backboard/Backboard'
import { db, analytics } from '../firebase'

import { IoChevronBackCircleOutline } from "react-icons/io5";
// import {useLocation} from "react-router-dom";
import { useTranslation } from "react-i18next";

import audioStart from '../assets/sounds/zapsplat_fantasy_magic_chime_ping_wand_fairy_godmother_016_38302.mp3'


const Game = () => {
    
    const { t } = useTranslation();

    // const active = useSelector(store => store.games.active)
    const gameData = useSelector(store => store.games.gameData)
    // const theme = useSelector(store => store.games.theme)
    const password = useSelector(store => store.games.password)
    
    const location = useLocation();

    const [ progressDB, setProgressDB ] = useState(null)
    const [ themeDB, setThemeDB ] = useState(null)
    const sessionOver = useSelector(store => store.games.sessionOver)

    var audio = new Audio(audioStart)

    const getProgress = async() => {
        await db.collection('new-games').doc(password)
            .onSnapshot(function(doc) {
                setProgressDB(doc.data().progress)
            });
        }
        
    useEffect(() => {
        if (password !== null) {
            getProgress()
        }
        
    }, [password])

    useEffect(() => {
        
        document.querySelector('.navbar').classList.remove('active')
        
        document.querySelector('.LanguageSelector').classList.remove('active')
        analytics.logEvent('screen_view', { firebase_screen: location.pathname});
    },[])

    const streamTheme = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .onSnapshot(observer);
    };

    useEffect(() => {
        if (password !== null ) {
            const unsubscribe = streamTheme(password, {
                next: querySnapshot => {
                    const updatedTheme = querySnapshot.data().theme;
                        setThemeDB(updatedTheme)
                },
                // error: () => setError('grocery-list-item-get-fail')
            });
            
            return unsubscribe;
        }
    }, [password, setThemeDB]);

    useEffect(() => {
        
        if (gameData !== null) {
            audio.play()
        }
        
    }, [gameData])
    
    console.log('game', gameData);
    
    return !sessionOver ? (
        <div>
            {
                gameData === null && <EmailCheck />
            }
            {
                
                gameData !== null && themeDB === undefined && <ThemeForm />
               
            }
            { gameData !== null && themeDB !== undefined && progressDB !== null && (
                progressDB === 'active' ? <Boardgame themeDB={themeDB} /> : <Backboard themeDB={themeDB} />
            )}
            
        </div>
    ) : (
        <div className="container justify-content-center d-flex align-items-center pt-5">
            <Link to="/dashboard" className="back-icon" style={{position: 'absolute', left: '30px', top: '130px', fontSize: '40px',
                                                                color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                <IoChevronBackCircleOutline /> <span style={{marginLeft: '10px', textTransform: 'uppercase', fontSize: '20px'}}> {t('back_to_dash')} </span>
            </Link>
            <h3> {t('session_over')} </h3>
        </div>
    )
}

export default Game
