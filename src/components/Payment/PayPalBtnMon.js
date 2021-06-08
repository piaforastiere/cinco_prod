import React, { useEffect, useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next";

import { singupEmailAndPassAction, updateUserSubscription } from '../../redux/UserDucks';

import { analytics } from '../../firebase'

const PayPalBtn = ({ amount, currency, idPlan, plan, userName, pass, email, setError }) => {

    
    const user = useSelector(store => store.user.user)
    
    const dispatch = useDispatch()
    
    const { i18n } = useTranslation();
    
    let history = useHistory();

    const paypalKey = "ASaLtDMhmfcijj7X4V78XDa4RmOBDLqRQUir5QsNE7z6uPOBxLMoPNry-tarSEZirfbkAYudTwXgaQUu"

    const [ approved, setApproved ] = useState(false)
    const [ payPalId, setPayPalId ] = useState(null)

   
    const createSubscription = (data, actions) => {
        
        return actions.subscription.create({
        'plan_id': idPlan,
        });
    };

    
    useEffect(() => {
        if (approved) {
            analytics.logEvent('purchase');
            if (user !== undefined) {
                dispatch(updateUserSubscription(email, plan, payPalId ))
                history.push("/dashboard");
            } else {
                
                dispatch(singupEmailAndPassAction(userName, email, pass, plan, payPalId))
                history.push("/dashboard");
            }
            
        }
        
    }, [approved, user, history, email, plan, payPalId, userName, pass, dispatch])

    const onError = (err) => {
        
        console.log("error", err)
        
        
    }
    const onCancel = (err) => {
        
        console.log("Cancel", err)
        
    }
    
    
    const onApprove = (data, detail) => {
        
        // 
        setPayPalId(data.subscriptionID)
        // call the backend api to store transaction details
        //console.log("Payapl approved")
                
        setApproved(true)
        
    };
    // useEffect(() => {
    //     console.log(idPlan);
        
    // }, [idPlan])

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
                            clientId: paypalKey,
                            vault:true,
                            intent : "subscription"
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
                            clientId: paypalKey,
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
