import React, { useEffect, useState, useRef } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next";

import { singupEmailAndPassAction, updateUserSubscription } from '../../redux/UserDucks';

import { analytics } from '../../firebase'

const PayPalBtn = ({ amount, currency, idPlan, plan, userName, pass, email, setError }) => {

    
    const user = useSelector(store => store.user.user)
    
    const dispatch = useDispatch()
    
    const { i18n, t } = useTranslation();
    
    let history = useHistory();
    

    const [ approved, setApproved ] = useState(false)
    const [ payPalId, setPayPalId ] = useState(null)
    
    useEffect(() => {
        if (approved) {
            
            const data = {
                currency: "USD", 
                value: amount, 
                transaction_id: payPalId
            }
            
            analytics.logEvent('purchase', data );
            
            if (user !== undefined) {
                dispatch(updateUserSubscription(email, plan, payPalId ))
                history.push("/dashboard");
            } else {
                
                dispatch(singupEmailAndPassAction(userName, email, pass, plan, payPalId))
                analytics.logEvent('sign_up');
                history.push("/dashboard");
            }
            alert(t('payment_success'))
        }
        
    }, [approved, user, history, email, plan, payPalId, userName, pass, dispatch])
    
    const createSubscription = (data, actions) => {
        analytics.logEvent('begin_checkout')
        return actions.subscription.create({
        'plan_id': idPlan,
        });
    };

    const onError = (err) => {
        
        console.log("error", err)
        
    }
    const onCancel = (err) => {
        
        console.log("Cancel", err)
        
    }
    
    
    const onApprove = (data, detail) => {
        
        setPayPalId(data.subscriptionID)
        setApproved(true)
        
    };
    
    return(
        <>
            {
                i18n.language === "en" ? (
                    <PayPalButton className="payment-button"
                        amount={amount}
                        currency={currency}
                        createSubscription={(data, details) => createSubscription(data, details)}
                        onApprove={(data, details) => onApprove(data, details)}
                        onError={(err) => onError(err)}
                        catchError={(err) => onError(err)}
                        onCancel={(err) => onCancel(err)}
                        options={{
                            clientId: process.env.REACT_APP_PAYPAL_CLIENT_LIVE,
                            vault:true,
                            intent : "subscription",
                            locale: "en_US"
                        }}
                        style={{
                            size: 'responsive',
                            shape: 'pill',
                            color: 'silver',
                            layout: 'vertical',
                            label: 'paypal'
                        }}
                    />
                ) : (
                    <PayPalButton className="payment-button"
                        amount={amount}
                        currency={currency}
                        createSubscription={(data, details) => createSubscription(data, details)}
                        onApprove={(data, details) => onApprove(data, details)}
                        onError={(err) => onError(err)}
                        catchError={(err) => onError(err)}
                        onCancel={(err) => onCancel(err)}
                        options={{
                            clientId: process.env.REACT_APP_PAYPAL_CLIENT_LIVE,
                            vault:true,
                            intent : "subscription",
                            locale: "es_AG"
                        }}
                        style={{
                            size: 'responsive',
                            shape: 'pill',
                            color: 'silver',
                            layout: 'vertical',
                            label: 'paypal'
                        }}
                    />
                )
            }
        </>
        
    )
}

export default PayPalBtn;
