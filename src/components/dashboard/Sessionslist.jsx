import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Module, LatestGames, NewButton } from '../ui/Dashboard'
import { useSelector } from 'react-redux';
import Item from './session list/Item';

import { useTranslation } from "react-i18next";

const Sessionslist = () => {
    const games = useSelector(store => store.games.games)
    
    
    const error = useSelector(store => store.games.error)

    const [ gamesShortes, setGamesShorter ] = useState([])
    
 
    const { t } = useTranslation();


    useEffect(() => {
        
        if (games !== undefined) {
            const getUnactives = games.filter(game => game.progress === 'unactive')
            const getActives = games.filter(game => game.progress === 'active')
            const getActionPlan = games.filter(game => game.progress === 'action-plan')
            const getFinished = games.filter(game => game.progress === 'finished')

            setGamesShorter(getUnactives.concat(getActives, getActionPlan, getFinished).slice(0,8))
            
        }
        
    }, [games])

    useEffect(() => {
        if (gamesShortes.length > 0) {
            const trash = document.querySelectorAll('.trash')
            trash.forEach(item => item.style.display = "none")
        }
    }, [gamesShortes])
    
    return gamesShortes.length > 0 && (
        
                <Module>
                    
                    <div className="title-row d-flex justify-content-between align-items-center">
                        <h2 className="text-left">
                            {t('latest_sessions')}
                        </h2>
                        <Link to="/sessions" >
                            <NewButton bg={'#7CA935'} bgshadow={'#96c93d'} shadow={'#547223'} >
                                {t("check_sessions")}
                            </NewButton>
                        </Link>
                    </div>
                    <LatestGames>
                        {
                            games !== undefined && error === null  ? (
                                <table className="tg">
                                    <thead>
                                    <tr className="head" >
                                        <th className="appointement-name text-uppercase">
                                            {t('appoin_identif')}
                                        </th>
                                        <th className="name text-uppercase">
                                            {t('game_pass')}
                                        </th>
                                        <th className="master text-uppercase">
                                            master
                                        </th>
                                        <th className="progress text-uppercase">
                                            {t('progress')}
                                        </th>
                                        <th className="icon"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            gamesShortes.map((game, i) => {
                                                if (game.progress === 'unactive') {
                                                   return <Item game={game} key={i} progress={t('unactive')} />
                                                }
                                            })
                                        }
                                        {   
                                            gamesShortes.map((game, i) => {
                                                if (game.progress === 'active') {
                                                   return <Item game={game} key={i} progress={t('active')} />
                                                }
                                            })
                                        }
                                        {   
                                            gamesShortes.map((game, i) => {
                                                if (game.progress === 'action-plan') {
                                                   return <Item game={game} key={i} progress={t('action-plan')} />
                                                }
                                            })
                                        }
                                        {   
                                            gamesShortes.map((game, i) => {
                                                if (game.progress === 'finished') {
                                                   return <Item game={game} key={i} progress={t('finished')} />
                                                }
                                            })
                                        }
                                    </tbody>
                                </table>
                                
                            ) : (
                                <div className="no-sessions" > {t('no_sessions')} </div>
                            )
                        }
                    </LatestGames>
                    <div className="title-row d-flex justify-content-around align-items-end  mt-3">
                    {/* <Link to="/sessions">
                            <NewButton bg={'#7CA935'} bgshadow={'#96c93d'} shadow={'#547223'} >
                                {t("check_sessions")}
                            </NewButton>
                        </Link> */}
                    {/* <Link to="/new-game">
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                                {t("create_session")}
                        </NewButton>
                    </Link> */}
                    </div>
                </Module>
            
    )
}

export default Sessionslist
