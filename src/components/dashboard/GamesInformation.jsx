import React from 'react'
import { Link } from 'react-router-dom';

import { GamesPlayed, NewButton } from '../ui/Dashboard'
// useDispatch,
import {  useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { useHistory } from "react-router-dom";

const GamesInformation = () => {

    // const dispatch = useDispatch()
    
    const { t } = useTranslation();
    const history = useHistory();

    const loading = useSelector(store => store.games.loading)
    const games = useSelector(store => store.games.games)

    {/* <Module >
                    <div className="d-flex justify-content-between w-100 mt-4 buttons-container" >
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                            <Link to="/new-game">{t("create_session")}</Link>
                        </NewButton>
                        <NewButton bg={'#ca4b44'} bgshadow={'#f25951'} shadow={'#9b3832'}  >
                           <Link to="/game">{t("play")}</Link>
                        </NewButton>
                    </div>
                </Module> */}
                {/* <Module>
                    <div className="row">
                        <h3 className="mb-4" >{t("how_to_play")}</h3>
                        <p className="text-start" >
                            {t("how_to_first")}
                        </p>
                        <p className="text-start" >
                            {t("how_to_second")}
                        </p>
                        <p className="text-start" >
                            {t("how_to_third")}
                        </p>
                        <p className="text-start" >
                            {t("how_to_four")}
                        </p>
                        <p className="text-start" >
                            {t("how_to_five")}
                        </p>
                    </div>
                </Module> */}
   
    return !loading && (
        
                <GamesPlayed>
                         
                    <div>
                        <h2>{games === undefined ? '0' : games.length}</h2>
                        <p>{t("games_created")}</p>
                    </div>
                    <div className="line"></div>
                    <div>
                        <h2>{games === undefined ? '0' : games.filter(game => game.progress !== 'unactive' ).length}</h2>
                        <p>{t("games_played")}</p>
                    </div>
                    <div className="line"></div>
                    <div>
                        <h2>{games === undefined ? '0' : games.filter(game => game.progress !== 'finished' ).length}</h2>
                        <p>{t("games_finish")}</p>
                    </div>
                    <Link to="/new-game">
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                                {t("create_session")}
                        </NewButton>
                    </Link>
                    
                        {/* <NewButton onClick={() => history.push("/game", { from: "Dashboard" })} bg={'#D4AB27'} bgshadow={'#FFCB31'} shadow={'#aa871e'}  >
                            {t("play")}
                        </NewButton> */}
                    
                </GamesPlayed>
                
                
           
    )
}

export default GamesInformation
