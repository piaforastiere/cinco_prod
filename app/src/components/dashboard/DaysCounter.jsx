import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from 'react-redux';
import CancelSub from './profile/CancelSub';
import { Link } from 'react-router-dom';

const DaysCounter = ({subscriptionDate, setSubPass, subscriptionType}) => {
    
    
    const { payPalLastPay } = useSelector(store => store.user.user)
    const [ daysLeft, setDaysLeft ] = useState(0)
    
    const { t } = useTranslation();

    useEffect(() => {
        
        if (payPalLastPay !== null && payPalLastPay !== undefined) {
            checkDates(payPalLastPay[0])
        } 
        if (subscriptionType === 'limited') {
            
            if (payPalLastPay !== undefined && new Date(payPalLastPay[0]).getTime() > new Date(subscriptionDate).getTime() ) {
                checkDates(payPalLastPay[0])
                
            }else{
                checkDates(subscriptionDate)
            }
        }
    }, [payPalLastPay, subscriptionDate, subscriptionType])
    
    
    

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


    return (
        <div>
            {
                subscriptionType === 'unlimited' ? (
                    <>
                       unlimited {t('expiration_date')} <br/>
                    </>
                ) : (
                    <>
                        { daysLeft} {t('expiration_date')} - 
                            
                                {
                                    subscriptionType === 'limited' && <span> {t('basic')}</span>
                                }
                                {
                                    subscriptionType === 'monthly' && <span> {t('monthly')}</span>
                                }
                                {
                                    subscriptionType === 'annual' && <span> {t('annual')}</span>
                                }
                            <br/>
                        
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
