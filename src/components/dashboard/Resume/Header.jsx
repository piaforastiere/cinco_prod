import React from 'react'

import { HeaderContainer } from '../../ui/Resume';
import { useSelector } from 'react-redux';

import { useTranslation } from "react-i18next";

const Header = () => {

    const { t } = useTranslation();

    const gameInfo  = useSelector(store => store.resume.gameInfo)

    return (
        <HeaderContainer id="information">
                           <div>
                                    <h2 > {t('subject')}:  </h2>
                                    <p> { gameInfo.theme } </p>
                            </div>
                        <div>
                                    <h2> {t('date')}:  </h2>
                        <p> { gameInfo.playedDate } </p>
                        </div>
                        
        </HeaderContainer>
    )
}

export default Header
