import React, { useEffect, useState } from 'react'

import { useTranslation } from "react-i18next";
import PayPalBtn from './PayPalBtnMon';
import { FormContainer, Title } from '../ui/Payment'


const UpdateForm = ({user, idPlan, amount, setPhase}) => {
    
    //CHEQUEAR EL PAYPALID Y LA FECHA DEL ULTIMO PAGO!!
    // console.log(idPlan);
    
    const { t } = useTranslation();

    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ plan, setPlan ] = useState('limited')
    const [ error, setError ] = useState(null)

    
    
    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"
        document.querySelector('.navbar').classList.remove('active')
        document.querySelector('.LanguageSelector').classList.remove('active')
        
        if (user !== undefined) {
            setEmail(user.email)
            setUserName(email)
        }

        if (idPlan === "P-83X8606103159171XMDEPFYQ") {
            setPlan("monthly")
        }
        if (idPlan === "P-14T669517A898821CMDEPH3I") {
            setPlan("annual")
        }
        if (idPlan === "free") {
            setPlan("limited")
        }
        
    },[idPlan, user, email])


    return (
        <>
                  <Title>
                    <h2>{t('verify_data')}</h2>
              
                    <p>
                        {t('verify_data_text')}
                    </p>
                  </Title>
              
                
             
              <FormContainer className="row justify-content-center">
                  
                  <div className="">
                  <form>
                         
                          { error && (
                              <div className="alert alert-danger">
                                  {error}
                              </div>
                          )}

                                    <label htmlFor="name">
                                        {t('name')}
                                    </label>
                                    <input 
                                        type="text"
                                        className="form-control mt-2"
                                        defaultValue={user.displayName} 
                                        name="name"
                                        readOnly
                                        /> 
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email"
                                        className="form-control mt-2"
                                        defaultValue={user.email}
                                        name="email" 
                                        readOnly />
                                    
                                    {
                                        idPlan !== "free" && plan !== user.subscriptionType ? (
                                            <div className="button">
                                                <PayPalBtn
                                                    amount = {amount}
                                                    currency = "USD"
                                                    idPlan={idPlan}
                                                    email={email}
                                                    plan={plan}
                                                    userName={userName}
                                                    setError={setError}
                                                    setPhase={setPhase}
                                                />

                                                
                                            </div>
                                        ) : (
                                            <p className="no-available">
                                                {t('we_are_sorry')} <br/>
                                                {t('try_others')}
                                            </p>
                                        )
                                    }  
                                    
                          
                      </form>
                  </div>
                 
              </FormContainer>
            
        </>
    )
}

export default UpdateForm
