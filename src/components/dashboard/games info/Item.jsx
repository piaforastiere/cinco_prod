import React from 'react'

import { useTranslation } from "react-i18next";

const Item = ({elem, trans, color}) => {
    
    const { t } = useTranslation();

    return (
        <>
            <h5 className="card-header pt-3 pb-3"><span className="fw-bolder"> {t('session')} {elem.password}</span></h5>
            <div className="card-body">
                <p className="card-text"> <span className="fw-bolder text-uppercase"> Progress : <span className="text-uppercase" style={{ color: color}} > {trans} </span></span> </p>
                {
                    elem.playedDate && (
                        <p className="card-text"><span className="fw-bolder text-uppercase"> {t('played_on')} : </span>{elem.playedDate}</p>
                    )
                }
                <p className="card-text"><span className="fw-bolder text-uppercase">Master : </span>{elem.masterName}  </p>
                <p className="card-text">( {elem.masterEmail} )</p>
                            
                <p className="card-text"><span className="fw-bolder text-uppercase"> {t('password')} : </span>{elem.password}</p>
                <p className="card-text "><span className="fw-bolder text-uppercase"> {t('game_created')} :</span> {elem.creationDate}</p>
                            
                <div style={{height: '20px', width: '100%'}} ></div>
            </div>
        </>
    )
}

export default Item
