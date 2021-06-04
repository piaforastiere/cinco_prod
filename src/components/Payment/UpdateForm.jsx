import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { googleLoginAction, singupEmailAndPassAction } from '../../redux/UserDucks'


import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PayPalBtn from './PayPalBtnMon';
import { FormContainer, Title } from '../ui/Payment'



const UpdateForm = ({user, idPlan, amount, setPhase}) => {
    
    //CHEQUEAR EL PAYPALID Y LA FECHA DEL ULTIMO PAGO!!
    
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

        if (idPlan === "P-9LX457058K3795810MCXNTEA") {
            setPlan("month")
        }
        if (idPlan === "P-5JF92675B7261882CMCXNPKQ") {
            setPlan("annual")
        }
        if (idPlan === "free") {
            setPlan("limited")
        }
        
    },[])

   

    return (
        <>
                  <Title>
                    <h2>verify data</h2>
              
                    <p>
                        si esta no es la cuenta desloguate
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
                      </form>
                  </div>
                 
              </FormContainer>
            
        </>
    )
}

export default UpdateForm
