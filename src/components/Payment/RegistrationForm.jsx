import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { googleLoginAction, singupEmailAndPassAction } from '../../redux/UserDucks'


import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PayPalBtn from './PayPalBtnMon';

const RegistrationForm = ({idPlan, amount}) => {
    
    const { t } = useTranslation();

    const user = useSelector(store => store.user.user)
    const errorDis = useSelector(store => store.user.error)
    
    
    
    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ pass2, setPass2 ] = useState('')
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



    const processData = e => {
        e.preventDefault();

        

        if (!email.trim()) {
            setError(t('insert_email'));
            return
        }
        const validation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        if (validation) {
            setError(t('correct_email'));
            return
        }

        if (!userName.trim()) {
            setError(t('insert_name'));
            return
        }

        
            if (!pass.trim()) {
                setError(t('mandatory_pass'));
                return
            }
            if (!pass2.trim()) {
                setError(t('confirm_pass'));
                return
            }
            if (pass.length < 6) {
                setError(t('pass_lenght'));
                return
            }
    
            if (pass !== pass2) {
                setError(t('pass_no_match'))
                return
            }

            // dispatch(singupEmailAndPassAction(name, email, pass, plan))
        
        
        setError(null)

        
        
        
    }
    
    

    return (
        <div className="mt-5 text-center ">
           
            
                <h3>{t('create_new_user')}</h3>
              
              <p>
                  {t('join_community')}
              </p>
              
                
             
              <div className="row justify-content-center">
                  
                  <div className="">
                  <form onSubmit={processData}>
                            {
                                errorDis !== null ? (
                                    <div className="alert alert-danger"> {errorDis} </div>
                                ) : null
                            }
                          { error && (
                              <div className="alert alert-danger">
                                  {error}
                              </div>
                          )}

                        {
                            user !== undefined ? (
                                <>
                                    <input 
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder={user.displayName}
                                        onChange={e => setUserName(e.target.value)}
                                        value={userName} /> 
                                    
                                    <input 
                                        type="email"
                                        className="form-control mt-2"
                                        placeholder={user.email}
                                        onChange={e => setEmail(e.target.value) } 
                                        value={email} />
                                </>
                            ) : (
                                <>
                                <input 
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder={t('name')}
                                    onChange={e => setUserName(e.target.value)}
                                    value={userName} /> 
                                
                                <input 
                                    type="email"
                                    className="form-control mt-2"
                                    placeholder="Email: example@example.com"
                                    onChange={e => setEmail(e.target.value) } 
                                    value={email} />
                                <input 
                                    type="password"
                                    className="form-control mt-2"
                                    placeholder={t('password')}
                                    onChange={e => setPass(e.target.value) }
                                    value={pass} 
                                    pattern=".{6,}"
                                    />
                                <input 
                                    type="password"
                                    className="form-control mt-2"
                                    placeholder={t('confirm_pass2')}
                                    onChange={e => setPass2(e.target.value) }
                                    value={pass2}
                                    pattern=".{6,}"
                                    />
                                </>
                            )

                        }
                          

                          <PayPalBtn
                                amount = {amount}
                                currency = "USD"
                                idPlan={idPlan}
                                email={email}
                                plan={plan}
                                pass={pass}
                                userName={userName}
                            />
                        
                        
                        
                      </form>
                  </div>
                 
              </div>
            
        </div>
    )
}

export default RegistrationForm
