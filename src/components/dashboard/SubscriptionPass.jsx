import React from 'react'
import styled from '@emotion/styled'

import { useTranslation } from "react-i18next";

const ContainerFixed = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99999999;

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
            </div>
        </ContainerFixed>
    )
}

export default SubscriptionPass
