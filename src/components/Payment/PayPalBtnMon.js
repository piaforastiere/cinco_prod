import React, { useEffect, useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next";

import { singupEmailAndPassAction, updateUserSubscription } from '../../redux/UserDucks';



const PayPalBtn = ({ amount, currency, idPlan, setIdPlan, plan, userName, pass, email, setError }) => {

    
    const user = useSelector(store => store.user.user)
    
    const dispatch = useDispatch()
    
    const { t, i18n } = useTranslation();
    
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
            if (user !== undefined) {
                dispatch(updateUserSubscription(email, plan, payPalId ))
                history.push("/dashboard");
            } else {
                
                dispatch(singupEmailAndPassAction(userName, email, pass, plan, payPalId))
                history.push("/dashboard");
            }
            
        }
        
    }, [approved])

    const onError = (err) => {
        
        console.log("error", err)
        
        
    }
    const onCancel = (err) => {
        
        console.log("Cancel", err)
        
    }
    console.log('user', user);
    
    const onApprove = (data, detail) => {
        
        // 
        setPayPalId(data.subscriptionID)
        // call the backend api to store transaction details
        //console.log("Payapl approved")
                
        console.log(data.subscriptionID)
        setApproved(true)
        
    };
    useEffect(() => {
        console.log(idPlan);
        
    }, [idPlan])

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
