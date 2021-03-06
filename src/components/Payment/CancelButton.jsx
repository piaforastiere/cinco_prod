import React, { useEffect } from 'react'
import axios from 'axios';

import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import { updateUserSubscription } from '../../redux/UserDucks';
import { analytics } from '../../firebase';



const CancelButton = ({user}) => {

    
    const dispatch = useDispatch()
    let history = useHistory();
    const location = useLocation();

    const { t } = useTranslation();
    
    const cancelSubscription = () => {
        const { payPalId } = user
        
        axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+payPalId+'/cancel',
            method: 'post',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer A21AAK7uU0_p9stN0WnlhrEwJihzHDclLUfdpVtzE_HCnG5fToqmQLsVd_Ae1Y2r6llmqjnIOtpWonj4o6lQ-7pgrNev-E2SQ" },
            data: { "reason": "test -- Not satisfied with the service" }
        }).then(res => {
                dispatch(updateUserSubscription(user.email, "limited", null ))
                analytics.logEvent('refund');
                history.push('dashboard')
            });
    }
    
    useEffect(() => {
         if( user !== undefined ){
            if (user.subscriptionType === 'limited') {
                document.getElementById('cancel_button').style.display = 'none'
            }
        }
        analytics.logEvent('screen_view', { firebase_screen: location.pathname});
    }, [user])

    return (
        <div id="cancel_button" className="mt-5">
            
            <button onClick={() => cancelSubscription()}  type="button" className="btn btn-danger rounded-pill text-uppercase">
                {t('cancel_plan')}
            </button>
            <p>* {t('cancelations_text')} </p>
        </div>
    )
}

export default CancelButton
