import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const DaysCounter = ({subscriptionDate, lastPay, setSubPass, subscriptionType}) => {
    
    const [ daysLeft, setDaysLeft ] = useState(0)
    const { t } = useTranslation();

    const checkDates = (_date) => {
        // var fechaInicio = new Date();
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

        if (lastPay !== null) {
            checkDates(lastPay)
        } 
        if (subscriptionType === 'limited') {
            checkDates(subscriptionDate)
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
                        <Link to="/shop" className="plans-link"> {t('see_plans')} </Link>
                    </>
                )
            } 
        </div>
    )
}

export default DaysCounter
