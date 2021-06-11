import React, { useState , useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createNewGameAction } from '../../redux/gamesDukes'
import SendEmail from './SendEmail'
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const CreateAppointment = (props) => {

    const dispatch = useDispatch()

    const loading = useSelector(store => store.games.loading)
    
    // const errorDis = useSelector(store => store.games.error)
    const {user} = useSelector(store => store.user)
    const dataDB = useSelector(store => store.games.game)
    
    const { t } = useTranslation();

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ subject, setSubject ] = useState('')
    
    const [ error, setError ] = useState(null)
    const [ show, setShow ] = useState(false)

    
    

    function generatePassword() {
        var length = 8;
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setPass(result);
        // document.getElementById('button-addon1').disabled = true;
     }

    const processData = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError(t('insert_name'));
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
            setError(t('generate_password'));
            return
        }
        
        setError(null)

        
        dispatch(createNewGameAction(email, name, pass, user.email, user.uid, subject ))
        
            setName('')
            setEmail('')
            setPass('')
            setSubject('')
            setShow(true)
    }
   
    
    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        generatePassword()
    }, [])
    
    
    return (
        <div className="mt-5 text-center " >
            <div className="col-xl-12 col-sm-12" >
                <Link to="/dashboard" className="back-icon" >
                    <IoChevronBackCircleOutline /> <span> {t('back_to_dash')} </span>
                </Link>
            </div>
            <h3 className="center">
                {
                    !show ? t('create_new_to_play') : t('congrats')
                }
              </h3>
              
              
              <div className={ !show ? "row d-flex justify-content-center border-top mt-4" : "row d-flex justify-content-center mt-4"}>
                  
                  { !show ? (
                      <div className="col-sm-12 col-md-6 col-lg-6 text-start mt-3">
                      <form onSubmit={processData}>
                            {/* {
                                    errorDis !== null ? (
                                        <div className="alert alert-danger"> {errorDis} </div>
                                    ) : null
                                } */}
                              { error && (
                                  <div className="alert alert-danger">
                                      {error}
                                  </div>
                              )}
    
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> {t('master_name')} ({t('who_is_the_master')}) </label>
                                <input 
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={e => setName(e.target.value)}
                                value={name} /> 
                                
                            </div>
                              
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label"> {t('master_mail')} </label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="example@example.com"
                                    onChange={e => setEmail(e.target.value) } 
                                    value={email} />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="subject" className="form-label"> {t('subject_appointement')} </label>
                                <input 
                                    type="subject"
                                    className="form-control"
                                    name="subject"
                                    onChange={e => setSubject(e.target.value) } 
                                    value={subject} />
                            </div>
                            
                            
                               
                            <div><p> {t('copy_to_play')} </p></div>
                            <div className="input-group mb-3 mt-2">
                            {/* <button className="btn btn-outline-dark" 
                                    type="button" 
                                    id="button-addon1"
                                    onClick={() => generatePassword()}
                                    >
                                     {t('generate_pass')} 
                            </button> */}
                            <input type="text" 
                                   className="form-control" 
                                   placeholder={pass}
                                   
                                   value={pass}  
                                   disabled
                                    />
                            
                            </div>
                            
                            <div id="emailHelp" className="form-text mb-3" style={{ color: 'red'}} > {t('mandatory_fields')} </div>
                            <div className="row d-flex justify-content-center">
                            <button className={loading ? "btn btn-dark btn-lg w-50 rounded-pill disabled" : "btn btn-dark rounded-pill btn-lg w-50"} 
                                    type="submit" 
                                    disabled={!pass.trim() || !email.trim() || !name.trim()} >
                                 {t('create')} 
                            </button>
                            </div>
                            
                            
                          </form>
                      </div>
                  ) : (
                    dataDB !== undefined && (
                        <div className="col-sm-12 col-md-12 col-lg-10 mt-3 text-start">
                            <SendEmail dataDB={dataDB} setShow={setShow} />
                        </div>
                      ) 
                  )}
                  
                  
              </div>
        </div>
    ) 
}

export default withRouter(CreateAppointment)
