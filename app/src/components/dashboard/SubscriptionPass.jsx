import React from 'react'
import styled from '@emotion/styled'

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const ContainerFixed = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99999999;

    h2{
        margin-bottom: 30px;
    }
    .plans-link{
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #96c93d;
        font-weight: 500;
    }
    .pop-up{
        width: 500px;
        padding: 40px;
        background-color: #fff;
        border-radius: 30px;
        text-align: center;
    }
`

const SubscriptionPass = () => {

    const { t } = useTranslation();

    return (
        <ContainerFixed className="d-flex justify-content-center align-items-center">
            <div className="pop-up">
                <h2>
                    {t('sorry_msg')}
                    
                </h2>
                <Link to="/shop" className="plans-link">
                        {t('check_plans')}
                </Link>
            </div>
        </ContainerFixed>
    )
}

export default SubscriptionPass
