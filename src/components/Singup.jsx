import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { googleLoginAction, singupEmailAndPassAction } from '../redux/UserDucks'
import { withRouter } from 'react-router-dom'

import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { analytics } from '../firebase';

const Singup = (props) => {

    const dispatch = useDispatch()
    const { t } = useTranslation();

    const loading = useSelector(store => store.user.loading)
    const active = useSelector(store => store.user.active)
    const errorDis = useSelector(store => store.user.error)
    

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ pass2, setPass2 ] = useState('')
    const [ error, setError ] = useState(null)
    
    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"
        document.querySelector('.navbar').classList.remove('active')
        document.querySelector('.LanguageSelector').classList.remove('active')
        
    },[])
    
    useEffect(() => {
        
        if (active) {
            props.history.push('/')
        }
        
    }, [active, props.history])


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

        if (!name.trim()) {
            setError(t('insert_name'));
            return
        }
        
        setError(null)

        
        dispatch(singupEmailAndPassAction(name, email, pass, "limited", null))
        analytics.logEvent('sign_up');
    }
    return (
        <div className="mt-5 text-center ">
            <h3 className="center">
                {t('create_new_user')}
              </h3>
              <p>
                  {t('join_community')}
              </p>
              <button className="btn"
                                onClick={() => props.history.push('/login')}
                                type="button" >
                            {t('already_have_account')}
                            <span style={{color: 'blue'}} > {t('login_here')}</span>
                </button>
                
             
              <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-5 justify-content-center">
                    <p>{t('also_use')}</p>
                    <div className="row d-flex justify-content-center">
                    <button className="d-flex btn btn-outline-danger btn-lg w-75 justify-content-center"
                            style={{borderColor: 'red'}}
                            onClick={() => dispatch(googleLoginAction())} 
                            disabled={loading}
                            > <div  style={{marginTop: '-2px', width: '20px'}} ><FaGoogle /></div> 
                           oogle
                    </button>
                    {/* <button className="btn btn-danger btn-lg w-75 mt-3"
                            style={{background: '#058CFF', borderColor: '#058CFF'}}
                            onClick={() => dispatch(facebookLoginAction())} 
                            disabled={loading}
                            > Facebook
                    </button> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 border-start">
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

                        
                          <input 
                            type="text"
                            className="form-control mt-2"
                            placeholder={t('name')}
                            onChange={e => setName(e.target.value)}
                            value={name} /> 
                           
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

                        {/* <p className="fw-light text-start mt-3" style={{fontSize: '10px'}} >
                            By submitting this form you agree to our <a href="/terms-and-conditions" > Terms and conditions</a>
                        </p> */}
                        <button className="btn btn-dark btn-lg btn-block mt-2 w-75" type="submit" >
                            {t('join')}
                        </button>
                        
                        
                      </form>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                      
                  </div>
              </div>
            
        </div>
    )
}

export default withRouter(Singup)
