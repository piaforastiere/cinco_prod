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

    const cancelSubscription = async() => {
        const { payPalId, paypalToken } = user
        
        await axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+payPalId+'/cancel',
            method: 'post',
            headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json", "Authorization": paypalToken },
            data: { "reason": "test -- Not satisfied with the service" }
        }).then(res => {
                dispatch(updateUserSubscription(user.email, "limited", null ))
                analytics.logEvent('refund');
                history.push('dashboard')
            });
        
    }

   
    return (
        <div onClick={() => cancelSubscription()} className="button-cancel">
            {t('cancel_plan')}
        </div>
    )
}

export default CancelSub
