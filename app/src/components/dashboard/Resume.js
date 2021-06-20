import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameResume } from '../../redux/resumeDukes';
import Spinner from '../Spinner';
import { Background } from '../ui/Resume';


import Header from './Resume/Header';
import List from './Resume/List';
import Share from './Resume/Share';
import PopUp from './Resume/PopUp';
import Statistics from './Resume/Statistics';
import Players from './Resume/Players';
import FinalPlan from './Resume/FinalPlan';

import { useTranslation } from "react-i18next";

export const Resume = () => {

    let { id } = useParams();
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const { loading } = useSelector(store => store.resume)
    const gameInfo  = useSelector(store => store.resume.gameInfo)
    const errorDB = useSelector(store => store.resume.error)

    const windowDB = useSelector(store => store.resume.window)
    
    const [ close, setClose ] = useState(false)
    const [ popUp, setPopUp ] = useState(false)

    const intViewportWidth = window.innerWidth;
    const intViewportHeight= window.innerHeight;
    
    const positions = useSelector(store => store.resume.positions)
    
    useEffect(() => {

        dispatch(getGameResume(id))
        
        
        
    }, [dispatch, id])
    
    useEffect(() => {

        if (close) {
            document.body.style.overflow = "hidden"
        } else{
            document.body.style.overflow = "scroll"
            
        }
    }, [close])

    
    console.log(positions);
    
    
    return !loading && gameInfo !== null ?  (
        <>
            {
            errorDB === null ? (
                <Background id="toPrint">
                    
                <div className="background" ></div>
                
                    <div className="content">
                    
                        <Header />
                        <div className="row mt-3 d-flex">
                            <Players />
                            <div className="col-lg-3 col-sm-12 mt-3 d-flex justify-content-end">
                                <div style={{ width: '250px', height: '50px'}} >
                                    { 
                                        windowDB !== undefined && windowDB !== null && windowDB.length > 0 && (
                                            <div>
                                               { 
                                                    positions.length > 0 ? (
                                                        <button  type="button" className="btn btn-dark rounded-pill fs-5" style={{ padding : '10px 30px'}} onClick={() => setClose(!close)} >
                                                            <strong> {t('show_final_plan')}</strong>
                                                        </button>
                                                        ) : (
                                                        <button  type="button" className="" style={{ padding : '10px 30px'}} onClick={() => setClose(!close)} >
                                                            <strong> {t('no_show_final_plan')}</strong>
                                                        </button>
                                                    ) 
                                                }
                                            </div>
                                        )
                                        
                                    }
                                </div>
                                
                            </div>
                        </div>
                        
                        <List />
                        <Statistics />
                        
                        <Share popUp={popUp} setPopUp={setPopUp} />
                
                    </div>
                    { popUp && 

                        <PopUp popUp={popUp} setPopUp={setPopUp} />

                    }     
                    {
                        windowDB !== undefined && windowDB !== null && windowDB.length > 0 &&
                        <FinalPlan close={close} setClose={setClose} innerW={intViewportWidth} innerH={intViewportHeight} />
                    }               
                    
        
        </Background>
            ) : (
                <div className="contain">
                    <div className="text-center mt-5">
                        {errorDB}
                    </div>
                </div>
            )
        }
        </>
       
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}
