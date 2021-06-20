import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useTranslation } from "react-i18next";
import PayPalBtn from './PayPalBtnMon';
import { Title, FormContainer } from '../ui/Payment';

const RegistrationForm = ({idPlan, amount}) => {
    
    const { t } = useTranslation();

    const user = useSelector(store => store.user.user)
    
    const [ userName, setUserName ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ pass, setPass ] = useState(null)
    const [ pass2, setPass2 ] = useState(null)
    const [ plan, setPlan ] = useState('limited')
    const [ errorName, setErrorName ] = useState(null)
    const [ errorPass, setErrorPass ] = useState(null)
    const [ errorEmail, setErrorEmail ] = useState(null)
    const [ errorPassSec, setErrorPassSec ] = useState(null)
    
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
            setPlan("month")
        }
        if (idPlan === "P-14T669517A898821CMDEPH3I") {
            setPlan("annual")
        }
        if (idPlan === "free") {
            setPlan("limited")
        }
        
    },[idPlan, user, email])

    const checkEmail = () => {
        const validation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        if (!email.trim()) {
            setErrorEmail(t('insert_email'));
            return
        } else if (validation) {
            setErrorEmail(t('correct_email'));
            return
        } else {
            setErrorEmail(null)
        }
    }

    const checkName = () => {
        if (!userName.trim()) {
            setErrorName(t('insert_name'));
            return
        } else {
            setErrorName(null)
        }
    }

    const checkPass = () => {
        if (!pass.trim()) {
            setErrorPass(t('mandatory_pass'));
            return
        } else if (pass.length < 6) {
            setErrorPass(t('pass_lenght'));
            return
        } else {
            setErrorPass(null)
        }
    }

    const checkPassSecond = () => {
            if (!pass2.trim()) {
                setErrorPassSec(t('confirm_pass'));
                return
            } else if (pass !== pass2) {
                setErrorPassSec(t('pass_no_match'))
                return
            } else {
                setErrorPassSec(null)
            }

    }
    
    

    return (
        <>
           
           <Title>
                <h3>{t('create_new_user')}</h3>
              
              <p>
                  {t('join_community')}
              </p>
           </Title>
                
              <FormContainer className="row justify-content-center">
                  
                  <div className="">
                  <form >
                            {
                                errorName !== null ? (
                                    <div className="alert alert-danger"> {errorName} </div>
                                ) : errorEmail !== null ? (
                                    <div className="alert alert-danger"> {errorEmail} </div>
                                ) : errorPass !== null ? (
                                    <div className="alert alert-danger"> {errorPass} </div>
                                ) : errorPassSec !== null ? (
                                    <div className="alert alert-danger"> {errorPassSec} </div>
                                ) : null
                            }
                          

                        
                                <input 
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder={t('name')}
                                    onChange={e => setUserName(e.target.value)}
                                    value={userName} 
                                    onBlur={() => checkName()}/> 
                                
                                <input 
                                    type="email"
                                    className="form-control mt-2"
                                    placeholder="Email: example@example.com"
                                    onChange={e => setEmail(e.target.value) } 
                                    value={email} 
                                    onBlur={() => checkEmail()}/>
                                <input 
                                    type="password"
                                    className="form-control mt-2"
                                    placeholder={t('password')}
                                    onChange={e => setPass(e.target.value) }
                                    value={pass} 
                                    pattern=".{6,}"
                                    onBlur={() => checkPass()}
                                    />
                                <input 
                                    type="password"
                                    className="form-control mt-2"
                                    placeholder={t('confirm_pass2')}
                                    onChange={e => setPass2(e.target.value) }
                                    value={pass2}
                                    pattern=".{6,}"
                                    onBlur={() => checkPassSecond()}
                                    />
                                
                          {
                              userName !== null && email !==null && pass !== null && pass2 !== null && errorEmail === null && errorName === null && errorPass === null && errorPassSec === null && (
                                <div className="button">
                                <PayPalBtn
                                        amount = {amount}
                                        currency = "USD"
                                        idPlan={idPlan}
                                        email={email}
                                        plan={plan}
                                        pass={pass}
                                        userName={userName}
                                    />
                              </div>
                              )
                          }

                      </form>
                  </div>
                 
              </FormContainer>
            
        </>
    )
}

export default RegistrationForm
