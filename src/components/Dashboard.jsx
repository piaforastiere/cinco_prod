import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Spinner from './Spinner'
import { getAllGamesAction, returnToZeroState } from '../redux/gamesDukes'

import axios from 'axios';

import { ContainerDash, Profile } from './ui/Dashboard'
import emptyPhoto from '../assets/img/empty-photo.png'
import { logOutAction } from '../redux/UserDucks';
import Menu from './dashboard/Menu';
import Sessionslist from './dashboard/Sessionslist';
import GamesInformation from './dashboard/GamesInformation';

import { useTranslation } from "react-i18next";
import SubscriptionPass from './dashboard/SubscriptionPass';
import DaysCounter from './dashboard/DaysCounter';


const Dashboard = (props) => {

    const user = useSelector(store => store.user.user)
    const subscriptionDate = useSelector(store => store.user.user.subscriptionDate)
    const subscriptionType = useSelector(store => store.user.user.subscriptionType)
    const loading = useSelector(store => store.games.loading)
    
    const [ subPass, setSubPass] = useState(false)
    const [ lastPay, setLastPay ] = useState(null)
    
    const dispatch = useDispatch()
    const { t } = useTranslation();

    const getPayPalInfo = () => {
        axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+user.payPalId,
            method: 'get',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer A21AAKMfkdtvVw36U5xEe4zrJEw7Bk4E01u-ePYojgTEupCDuxGAOVU7NITyQyzaHplt00haVAp2WLumabmdCRskt5WCIkMEg" },
            data: { "reason": "test -- Not satisfied with the service" }
        }).then(res => {
                
                var dateResult=res.data.billing_info.last_payment.time.split('T')
                
                setLastPay(dateResult[0])
                
            }).catch(error => {
                console.log(error);
                setLastPay(null)
              });
    }

    useEffect(() => {
        
        
       if (user !== undefined && user.payPalId !== null) {
          
        getPayPalInfo()
              
       }
            
      }, [user])

    useEffect(() => {
        
        dispatch(getAllGamesAction())
        dispatch(returnToZeroState())

    },[dispatch])

    

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
                        <DaysCounter subscriptionDate={subscriptionDate} lastPay={lastPay} setSubPass={setSubPass} subscriptionType={subscriptionType} />
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
