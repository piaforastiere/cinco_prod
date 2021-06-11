import React from 'react'

import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import { updateUserSubscription } from '../../../redux/UserDucks';
import { analytics } from '../../../firebase';

const CancelSub = () => {

    const user = useSelector(store => store.user.user)

    const dispatch = useDispatch()
    let history = useHistory();
    
    const { t } = useTranslation();

    const cancelSubscription = () => {
        const { payPalId } = user
        
        axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+payPalId+'/cancel',
            method: 'post',
            headers: { "Content-Type": "application/json", "Authorization": "Basic ASaLtDMhmfcijj7X4V78XDa4RmOBDLqRQUir5QsNE7z6uPOBxLMoPNry-tarSEZirfbkAYudTwXgaQUu:EN0hHZVg8Vfq2g0hAKTdNyzUAY0o1e2it9-JYT8JO9Y5H9SsqXde0v3_RyinLeNJDR4-Bd8sAySUwNPE" },
            data: { "reason": "test -- Not satisfied with the service" }
        }).then(res => {
                dispatch(updateUserSubscription(user.email, "limited", null ))
                analytics.logEvent('refund');
            });
    }

   
    return (
        <div onClick={() => cancelSubscription()} className="button-cancel">
            {t('cancel_plan')}
        </div>
    )
}

export default CancelSub
