import React, { useState, useEffect } from 'react'
// import PayPalBtn from './Payment/PayPalBtnMon';
// import PayPalBtnAn from './Payment/PayPalBtnAn';
import { ContainerPayment, Title } from './ui/Payment';
import Plans from './Payment/Plans';
import { useSelector } from 'react-redux';
import RegistrationForm from './Payment/RegistrationForm';
import UpdateForm from './Payment/UpdateForm';
// import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';

import CancelButton from './Payment/CancelButton';

const Payment = () => {

    const user = useSelector(store => store.user.user)

    const [ idPlan, setIdPlan ] = useState(null)
    const [ amount, setAmout ] = useState(0)
    const [ phase, setPhase ] = useState(0)
    
    
    const { t } = useTranslation();
    
        
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
                                <CancelButton user={user} />
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
            
        </ContainerPayment>
    )
}

export default Payment
