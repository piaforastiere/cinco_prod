import React, { useState } from 'react'

import image from '../../assets/img/mail.png'

import { Card, Footer, ContainerCard, CloseButton, Button, Trophy } from '../ui/EmailForm'

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const SendEmail = ({dataDB, setShow}) => {

    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ porpUp, setPorpUp ] = useState(false)

    const [ error, setError ] = useState(null)

    const { t } = useTranslation();
    
    const handleSubmit = () => {
        
        if (!email.trim()) {
            setError(t('insert_email'));
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError(t('correct_email'));
            return
        }

        if (!subject.trim()) {
            setError(t('insert_subject'));
            return
        }
        
        window.open("mailto:" + email + "?subject=" + subject+ "&body="+ dataDB.masterName + t('body_email')+ "%0D" + t('master_mail') +": " + dataDB.masterEmail+ "%0D"+t('master_name')+": " + dataDB.masterName+ "%0D"+ t('url_link') +": http://play.yourfivepowers.com/game" + "%0D"+t('password')+": " +dataDB.password);
        
    }

    
    
    
    return (
        <div className="ps-4 text-center" >
            
            <p className="fs-5" > {t('session_created')} <br/> {t('session_info')} </p>
            <form className=" mt-4 border-top pt-3" >
                         
                        <div className="mb-3">
                            <p className="mb-2 text-uppercase fs-5" > {t('master_name')} </p>
                            <p className="mt-3  ">
                                {dataDB.masterName}
                            </p>
                            
                        </div>
                          
                        <div className="mb-3  pt-3">
                        <p className="mb-2 text-uppercase fs-5" > {t('master_mail')} </p>
                            <p className="mt-3  ">
                                {dataDB.masterEmail}
                            </p>
                        </div>
                          
                        
                        
                           
                        
                        <div className="mb-3 pt-3">
                        <p className="mb-2 text-uppercase fs-5" > {t('password')} </p>
                            <p className="mt-3  ">
                                {dataDB.password}
                            </p>
                        </div>
                        
                       <h4 className="mt-5 text-uppercase" >
                           {t('share_with_others')}
                       </h4>
                        <div className="row d-flex justify-content-around ">
                        <div className="btn btn-lg btn-success rounded-pill mt-5"
                            style={{width: '250px'}}
                            onClick={() => setPorpUp(!porpUp)} >
                            {t('share')}
                        </div>
                        <div className="btn btn-lg btn-dark rounded-pill mt-5"
                            style={{width: '250px'}}
                            onClick={() => setShow(false)} >
                            {t('create_another_game')}
                        </div>
                        <Link to={`/game/${dataDB.password}`} style={{textDecoration: 'none', textTransform: 'uppercase', color: "#000", width: '250px'}} >
                            <div className="btn btn-lg btn-warning rounded-pill mt-5"
                                style={{width: '250px'}}>
                                {t('play')} 
                            </div>
                        </Link>
                        </div>
                        
                        
                      </form>
            
        { porpUp && 

            <ContainerCard>
                
                 <Card>
                    <CloseButton onClick={() => setPorpUp(!porpUp)} >X</CloseButton>
                        <Trophy src={image} alt=""/>
                        <p className="text-center w-100 mb-4">  </p>
                        { error && (
                                  <div className="alert alert-danger">
                                      {error}
                                  </div>
                              )}
                        <form onSubmit={handleSubmit} className="w-100" >
                            <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> {t('email')} </label>
                                    <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} /> 
                                    
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="subject" className="form-label"> {t('subject')} </label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    onChange={e => setSubject(e.target.value)}
                                    value={subject} /> 
                                    
                            </div>
                            
                        </form>
                        
                        <Footer>
                            <Button  id="send" onClick={() => handleSubmit()}>
                                {t('send')} 
                            </Button>
                        </Footer>
               

            </Card>
            </ContainerCard>
        
        }
       
        </div>
    )
}

export default SendEmail
