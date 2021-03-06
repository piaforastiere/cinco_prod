import React, { useEffect, useState } from 'react'
import { withRouter, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Spinner from './Spinner'
import { getAllGamesAction, returnToZeroState } from '../redux/gamesDukes'

import { ContainerDash} from './ui/Dashboard'

import { logOutAction, updateStatePayPal } from '../redux/UserDucks';
import Menu from './dashboard/Menu';
import Sessionslist from './dashboard/Sessionslist';
import GamesInformation from './dashboard/GamesInformation';

import SubscriptionPass from './dashboard/SubscriptionPass';

import { analytics } from '../firebase';
import ProfileSection from './dashboard/profile/ProfileSection';

const Dashboard = (props) => {

    const user = useSelector(store => store.user.user)
    const subscriptionDate = useSelector(store => store.user.user.subscriptionDate)
    const subscriptionType = useSelector(store => store.user.user.subscriptionType)
    const loading = useSelector(store => store.games.loading)
    
    const [ subPass, setSubPass] = useState(false)
    
    
    const dispatch = useDispatch()
    const location = useLocation();

    
    useEffect(() => {
        
       if (user !== undefined && user.payPalId !== null && user.payPalId !== undefined) {
        dispatch(updateStatePayPal(user.payPalId))
       }
       
      }, [user, dispatch])

    useEffect(() => {
        
        dispatch(getAllGamesAction())
        dispatch(returnToZeroState())

    },[dispatch])

    const logout = () => {
        dispatch(logOutAction())

        props.history.push('/login')
    }

    useEffect(async() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"
        document.querySelector('.navbar').classList.remove('active')
        document.querySelector('.LanguageSelector').classList.remove('active')
        
        analytics.logEvent('screen_view', { firebase_screen: location.pathname});

    },[])
    
    return !loading ? (
        <ContainerDash >
            
            {
                subPass && <SubscriptionPass />
            }
            <div className="row">
            <div className="col-12 mb-5 profile">
                <ProfileSection subscriptionDate={subscriptionDate} lastPay={user.payPalLastPay} setSubPass={setSubPass} subscriptionType={subscriptionType} />
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
