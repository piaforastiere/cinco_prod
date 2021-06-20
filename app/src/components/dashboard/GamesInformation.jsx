import React from 'react'
import { Link } from 'react-router-dom';

import { GamesPlayed, NewButton } from '../ui/Dashboard'
// useDispatch,
import {  useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

// import { useHistory } from "react-router-dom";

const GamesInformation = () => {

    // const dispatch = useDispatch()
    
    const { t } = useTranslation();
    // const history = useHistory();

    const loading = useSelector(store => store.games.loading)
    const games = useSelector(store => store.games.games)
    
    return !loading && (
        
                <GamesPlayed>
                         
                    <div>
                        <h2>{games === undefined ? '0' : games.length}</h2>
                        <p>{t("games_created")}</p>
                    </div>
                    <div className="line"></div>
                    <div>
                        <h2>{games === undefined ? '0' : games.filter(game => game.progress !== 'unactive').length}</h2>
                        <p>{t("games_played")}</p>
                    </div>
                    <div className="line"></div>
                    <div>
                        <h2>{games === undefined ? '0' : games.filter(game => game.progress === 'finished' ).length}</h2>
                        <p>{t("games_finish")}</p>
                    </div>
                    <Link to="/new-game">
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                                {t("create_session")}
                        </NewButton>
                    </Link>
                    
                       
                    
                </GamesPlayed>
                
                
           
    )
}

export default GamesInformation
