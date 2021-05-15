import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGamesAction } from '../../redux/gamesDukes'
import Spinner from '../Spinner'

import Item from './games info/Item'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { CardsResume, ContainerResume } from '../ui/Dashboard'
import board from '../../assets/img/back-dash.jpeg'

import { IoChevronBackCircleOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const GetGamesInfo = () => {

    const dispatch = useDispatch()

    const loading = useSelector(store => store.games.loading)
    const games = useSelector(store => store.games.games)
    
    const error = useSelector(store => store.games.error)

    const { t } = useTranslation();

    useEffect(() => {
        
        dispatch(getAllGamesAction())

    },[dispatch])

    return !loading ? (
        <ContainerResume className="container-fluid" style={{backgroundImage: "url("+board+")"}}>
            <div className="col-xl-12 col-sm-12" >
                <Link to="/dashboard" className="back-icon" >
                    <IoChevronBackCircleOutline /> <span> {t('back_to_dash')} </span>
                </Link>
            </div>
            { games !== undefined && error === null ? (
                <div className="">
                <h3 className="text-center border-bottom pb-3 pt-5" style={{color: "#fff"}} >
                        {t('info_of_all_sess')}
                    </h3>
                <CardsResume className="d-flex mt-5" >
                    {
                        games.map(elem => (
                            elem.progress === 'finished' && (
                                <div className="card"  key={elem.password}>
                                    <Item elem={elem} trans={t('finished')} color={'#68CBDB'} />
                                    <div className="card-body">
                                    <Link className="mt-4 fs-6 text-decoration-none fw-bolder text-uppercase" style={{paddingTop: '10px',  color: '#06798F', paddingBottom: '5px', borderBottom: '1px solid #06798F'}} to={`/games-information/${elem.password}`} >
                                        {t('full_resume')} <BsBoxArrowInRight />
                                    </Link>
                                    </div>
                                </div>
                            
                        )))
                    }
                    {/* {
                        games.map(elem => (
                            elem.progress === 'action-plan' && (
                                <div className="card"  key={elem.password} >  
                                    <Item elem={elem} trans={t('action-plan')} color={'#F15951'} />
                                </div>
                            
                        )))
                    }
                    {
                        games.map(elem => (
                            elem.progress === 'active' && (
                                <div className="card"  key={elem.password}> 
                                    <Item elem={elem} trans={t('active')} color={'#7CA935'} />
                                </div>
                            
                        )))
                    }
                    
                    {
                        games.map(elem => (
                            elem.progress === 'unactive' && (
                                <div className="card"  key={elem.password} >
                                    <Item elem={elem} trans={t('unactive')} color={'#7D2F6D'} />
                                </div>
                            
                        )))
                    } */}
                        
                       
                </CardsResume>
                
            </div>
            ) : (
                <div className="mt-5">
                    <h3>{ error }</h3>
                </div>
            )
            }
        </ContainerResume>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(GetGamesInfo)
