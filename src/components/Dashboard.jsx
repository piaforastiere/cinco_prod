import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Spinner from './Spinner'
import { getAllGamesAction, returnToZeroState } from '../redux/gamesDukes'



import { ContainerDash, Profile } from './ui/Dashboard'
import emptyPhoto from '../assets/img/empty-photo.png'
import { logOutAction } from '../redux/UserDucks';
import Menu from './dashboard/Menu';
import Sessionslist from './dashboard/Sessionslist';
import GamesInformation from './dashboard/GamesInformation';

import { useTranslation } from "react-i18next";
import SubscriptionPass from './dashboard/SubscriptionPass';


const Dashboard = (props) => {

    const user = useSelector(store => store.user.user)
    const subscriptionDate = useSelector(store => store.user.user.subscriptionDate)
    const subscriptionType = useSelector(store => store.user.user.subscriptionType)
    const dispatch = useDispatch()

    const [ subPass, setSubPass] = useState(false)
    
    const checkDates = () => {
        const today = new Date()
        const subs = new Date(subscriptionDate)

        var difference= Math.abs(today-subs);
        const days = difference/(1000 * 3600 * 24)
        
        if (days > 31 && subscriptionType === 'limited') {
            setSubPass(true)
        } else {
            setSubPass(false) 
        }
        
        
    }

    const loading = useSelector(store => store.games.loading)
    
    const { t } = useTranslation();

    useEffect(() => {
        
        dispatch(getAllGamesAction())
        dispatch(returnToZeroState())

    },[dispatch])

    useEffect(() => {

        if (subscriptionDate !== undefined && subscriptionDate !== null) {
            checkDates()
        }

    }, [subscriptionDate, checkDates])

    const logout = () => {
        dispatch(logOutAction())

        props.history.push('/login')
    }

    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"
        document.querySelector('.navbar').classList.remove('active')
        document.querySelector('.LanguageSelector').classList.remove('active')
        
    },[])
    
    return !loading ? (
        <ContainerDash >
            {
                subPass && <SubscriptionPass />
            }
            <div className="row">
            <div className="col-12 mb-5 profile">
                <Profile>
                <div  className="img"  >
                                    {
                                        user.photoURL !== null && user.photoURL !== undefined ? (
                                            <img src={user.photoURL} alt=""/>
                                        ) : (
                                            <img src={emptyPhoto} alt=""/>
                                        )
                                    }
                </div>
                <div>
                    <div className="user-name">
                       {t('welcome')}, { user.displayName }!
                    </div>
                    <div className="user-subscription">
                        { user.email}
                    </div>
                </div>
                </Profile>
            </div>
            </div>
            <div className="row">
            <Menu logout={logout} />
            <div className="spacer"></div>
            <div className="col-xl-10 col-xxl-10 col-sm-12 multiple">
                <GamesInformation />
                <Sessionslist />
            </div>
            
            </div>
        </ContainerDash>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(Dashboard)
