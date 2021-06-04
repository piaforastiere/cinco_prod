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
    const dispatch = useDispatch()

    console.log('user', user);
    

    const [ subPass, setSubPass] = useState(false)
    const [ lastPay, setLastPay ] = useState(null)
    
    
    

    const loading = useSelector(store => store.games.loading)
    
    const { t } = useTranslation();

    

    useEffect(() => {
        
       if (user !== undefined && user.payPalId !== null) {
          
        const call =  axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+user.payPalId,
            method: 'get',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer A21AAKDQtdWliyBLJ1Gj7Zw84df3rKQX3kcKA4gy_5zN3qrB2oJ1aLoLWmuMz_s2ViFVWgnL9NAxeR5N-LvEHIkhzrT3Nsy0Q" },
            data: { "reason": "test -- Not satisfied with the service" }
        }).then(res => {
                console.log('axios', res.data.billing_info.last_payment.time)
                setLastPay(res.data.billing_info.last_payment.time)
            }).catch(error => {
                console.log(error);
                setLastPay(null)
              });
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
