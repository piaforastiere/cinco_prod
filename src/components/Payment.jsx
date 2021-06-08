import React, { useState, useEffect } from 'react'
// import PayPalBtn from './Payment/PayPalBtnMon';
// import PayPalBtnAn from './Payment/PayPalBtnAn';
import { ContainerPayment, Title } from './ui/Payment';
import Plans from './Payment/Plans';
import { useSelector, useDispatch } from 'react-redux';
import RegistrationForm from './Payment/RegistrationForm';
import UpdateForm from './Payment/UpdateForm';
// import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { updateUserSubscription } from '../redux/UserDucks';
import { useHistory } from 'react-router-dom';

const Payment = () => {

    const user = useSelector(store => store.user.user)

    const [ idPlan, setIdPlan ] = useState(null)
    const [ amount, setAmout ] = useState(0)
    const [ phase, setPhase ] = useState(0)
    
    
    const { t } = useTranslation();
    const dispatch = useDispatch()
    let history = useHistory();
    
    
    const cancelSubscription = () => {
        const { payPalId } = user
        console.log();
        
        axios({
            url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+payPalId+'/cancel',
            method: 'post',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer A21AAKMfkdtvVw36U5xEe4zrJEw7Bk4E01u-ePYojgTEupCDuxGAOVU7NITyQyzaHplt00haVAp2WLumabmdCRskt5WCIkMEg" },
            data: { "reason": "test -- Not satisfied with the service" }
        })
            .then(res => {
                dispatch(updateUserSubscription(user.email, "limited", null ))
                history.push('dashboard')
            });
    }
    
    
    
    useEffect(() => {
        if( user !== undefined ){
            if (user.subscriptionType === 'limited') {
                document.getElementById('cancel_button').style.display = 'none'
            }
            
        }
    }, [user])
        
    return (
        <ContainerPayment >
           <div className="extra"></div>
            <div className="container">

            {
                phase === 0 && (
                    <>
                        <Title>
                            <h2>
                                {t('plans_title')}
                            </h2>
                            <p>
                                {t('plans_text')}
                            </p>
                            
                        </Title>
                        <Plans user={user} setIdPlan={setIdPlan} setAmout={setAmout} setPhase={setPhase} />
                        {
                            user !== undefined && (
                                <div id="cancel_button" className="mt-5">
                                    <button onClick={() => cancelSubscription()}  type="button" className="btn btn-danger rounded-pill text-uppercase">
                                    {t('cancel_plan')}
                                    </button>
                                </div>
                            )
                        }
                        
                    </>
                )
            }
            {
                phase === 1 && (
                    <>
                        { user !== undefined ? (<UpdateForm user={user} amount={amount} idPlan={idPlan} setPhase={setPhase} />) : (<RegistrationForm amount={amount} idPlan={idPlan} />)}
                    </>
                )
            }
            
            
            </div>
            
            
            {/* <div>
                <p>Plan anual</p>
                <PayPalBtn
                    amount = "110"
                    currency = "USD"
                    createSubscription={paypalSubscribeAnual}
                    onApprove={paypalOnApprove}
                    catchError={paypalOnError}
                    onError={paypalOnError}
                    onCancel={paypalOnError}
                />
            </div> */}
            
        </ContainerPayment>
    )
}

export default Payment
