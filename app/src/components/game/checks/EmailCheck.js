import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emailCheckAction } from '../../../redux/gamesDukes'

import { useTranslation } from "react-i18next";

const EmailCheck = () => {
    console.log('normal');
    
    
    const dispatch = useDispatch()
    const errorDis = useSelector(store => store.games.error)
    
    const { t } = useTranslation();

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ error, setError ] = useState(null)
    
  
    const processData = e => {
        e.preventDefault();

        
        
        
        if (!name.trim()) {
            setError(t('insert_name'));
            return
        }

        if (name.length > 10) {
            setError(t('shorter_nickname'));
            return
        }
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
            setError(t('insert_pass'));
            return
        }
        

        setError(null)

        dispatch(emailCheckAction(email, pass, name))
        
       
       
    }

    return (
        <div className="mt-5 text-center">
            <h3 className="center">
                 {t('start_playing')}
              </h3>
              <p>COMPLETA EL FORMULARIO CON TUS DATOS <br /> Y EL CODIGO QUE TE HAN COMPARTIDO</p>
              <p className="text-danger text-uppercase" > {t('mandatory_fields')} </p>
              <div className="row justify-content-center mt-5">
                
                  <div className="col-sm-12 col-md-5 ">
                      <form onSubmit={processData}>
                          {
                              errorDis !== null ? (
                                <div className="alert alert-danger">
                                    {errorDis}
                                </div>
                              ) : null
                          }
                          { error && (
                              <div className="alert alert-danger">
                                  {error}
                              </div>
                          )}
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label"> {t('nickname')} </label>
                            <input 
                            type="text"
                            className="form-control mt-2 rounded-pill"
                            placeholder={t('name')}
                            onChange={e => setName(e.target.value) } 
                            style={{textTransform: 'lowercase'}}
                            value={name} />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className="form-label"> {t('your_email')} </label>
                                <input 
                                type="email"
                                className="form-control mt-2 rounded-pill"
                                placeholder="example@example.com"
                                onChange={e => setEmail(e.target.value) } 
                                value={email} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="pass" className="form-label"> {t('game_pass')} </label>
                                    <input 
                                        type="text"
                                        className="form-control mt-2 rounded-pill"
                                        placeholder={t('password')} 
                                        onChange={e => setPass(e.target.value) }
                                        
                                        value={pass} />
                        </div>
                        
                        <button className="btn btn-dark btn-lg btn-block mt-2 w-100 rounded-pill text-uppercase" type="submit" >
                            {t('start')}
                        </button>
                        
                        
                                
                      </form>
                      <p className="mt-5" >NO TIENES UN CODIGO? NO TE PREOCUPES! <br /> CREA TU CUENTA Y COMIENZA A JUGAR </p>
                  </div>
              </div>
            
        </div>
    )
}

export default EmailCheck
