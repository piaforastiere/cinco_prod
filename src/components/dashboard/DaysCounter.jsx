import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";

import { useSelector } from 'react-redux';
import CancelSub from './profile/CancelSub';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DaysCounter = ({subscriptionDate, setSubPass, subscriptionType}) => {
    
    const user = useSelector(store => store.user.user)
    const lastPay = useSelector(store => store.user.user.payPalLastPay)
    const [ daysLeft, setDaysLeft ] = useState(0)
    const { t } = useTranslation();
    
    
    useEffect(() => {
        
        
        if (user.payPalId !== null && user.payPalId !== undefined) {
            axios({
                url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+user.payPalId,
                method: 'get',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer A21AAL0i19stzXv9OsDIAcc72lySlmaGcyxuFsENX8FMV09HNijxbdZlKTwIl-PGuZ-3i6RAWHZdBMtMSHCx7b3yuP8b_HvfA" },
                data: { "reason": "test -- Not satisfied with the service" }
            }).then(res =>{
                console.log('aca', res)
                
            })
        }
        
        
    }, [user])

    const checkDates = (_date) => {
        
        var subs = new Date(_date)
        
        if (subscriptionType === 'monthly' || subscriptionType === 'limited') {
            var begginingDate = new Date(_date).getTime();
            var fechaFin    = new Date(subs.setDate(subs.getDate()+ 30)).getTime();
            
            var difference= Math.abs(fechaFin - begginingDate);
            const days = difference/(1000 * 3600 * 24)
            
            
            if (days > 31) {
                setSubPass(true)
            } else{
                setDaysLeft(days)
                setSubPass(false) 
            }
        } 
        
        if (subscriptionType === 'annual') {

                
                var aYearFromNow = new Date(_date);
                aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
                
                
                var diff =  Math.floor(( Date.parse(aYearFromNow) - Date.parse(new Date(_date)) ) / 86400000);
                
                setDaysLeft(diff)
            if (diff > 365 ) {
                setSubPass(true)
            } else {
                
                setSubPass(false) 
            } 
        } 
        if (subscriptionType === "unlimited") {
            setDaysLeft("unlimited")
            setSubPass(false) 
            
        }
        
    }

    

    useEffect(() => {
        
        if (lastPay !== null && lastPay !== undefined) {
            checkDates(lastPay[0])
        } 
        if (subscriptionType === 'limited') {
            
            if (lastPay !== undefined && new Date(lastPay[0]).getTime() > new Date(subscriptionDate).getTime() ) {
                checkDates(lastPay[0])
                
            }else{
                checkDates(subscriptionDate)
            }
        }

    }, [subscriptionDate, lastPay, subscriptionType])
    return (
        <div>
            {
                subscriptionType === 'unlimited' ? (
                    <>
                       unlimited {t('expiration_date')} <br/>
                    </>
                ) : (
                    <>
                        { daysLeft} {t('expiration_date')} <br/>
                        
                        { subscriptionType !== "limited" ?
                         <CancelSub /> :
                         <Link to="/shop" className="plans-link"> {t('see_plans')} </Link>
                        }
                    </>
                )
            } 
        </div>
    )
}

export default DaysCounter
