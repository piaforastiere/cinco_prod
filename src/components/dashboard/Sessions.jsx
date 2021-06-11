import React, { useState, useEffect } from 'react'
import { Module, LatestGames, ContainerDash } from '../ui/Dashboard'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

import { IoChevronBackCircleOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";

import Unfilter from './session list/Unfilter';
import Filtered from './session list/Filtered';
import { db } from '../../firebase';




const Sessions = () => {

    
    const games = useSelector(store => store.games.games)
    
    const [ filterGames, setFilterGames ] = useState([])
    
    const error = useSelector(store => store.games.error)
    const [ filter, setFilter ] = useState(null)

    const { t } = useTranslation();

    const filterArray = (game) => {
        
        
        if (game.theme !== undefined && game.theme.toLowerCase().includes(filter)) {
            return true
        } else if(game.appointmentSubject !== undefined && game.appointmentSubject.toLowerCase().includes(filter)) {
            return true
        } else if (game.masterName !== undefined && game.masterName.toLowerCase().includes(filter)) {
            return true
        } else {
            return false
        }
    }
   
    useEffect(() => {
        // console.log(filterGames.length);
        
        if(filter !== null){
            const _filter = games.filter(filterArray)
            setFilterGames(_filter);
        } else {
            filterGames.length = 0
        }

    }, [filter, games])
    
    const handleDelete = async(_pass) => {
        
        const gameDB =  await db.collection('new-games').doc(_pass).get()
        
        if (gameDB.exists) {
            await db.collection('new-games').doc(_pass).delete()
            document.getElementById(_pass).style.display = "none"
        } 
        
    }

    return (
        <ContainerDash>
            <div className="col-xl-12 col-sm-12" >
                <Link to="/dashboard" className="back-icon" >
                    <IoChevronBackCircleOutline /> <span> {t('back_to_dash')} </span>
                </Link>
            </div>
            <div className="col-xl-12 col-sm-12 last-games">
                <Module>
                    <div className="row filter">
                        <h2 className="text-left">
                            {t('check_sessions')}
                        </h2>
                        <div>
                            <p>
                               {t('filter_by')}
                            </p>
                            <input type="text" onChange={(e) => setFilter(e.target.value)} name="filter" placeholder={t('search')} />
                        </div>
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
                                        <th className="pass text-uppercase">
                                            {t('game_pass')}
                                        </th>
                                        <th className="name text-uppercase">
                                            {t('theme')}
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
                                    {
                                        filterGames.length > 0 ? 
                                         <Filtered handleDelete={handleDelete} games={filterGames} /> :
                                         <Unfilter handleDelete={handleDelete} games={games} />
                                        
                                    }
                                </table>
                                
                            ) : (
                                <div className="no-sessions" > {t('no_sessions')} </div>
                            )
                        }
                    </LatestGames>
                </Module>
            </div>
        </ContainerDash>
    )
}

export default Sessions
