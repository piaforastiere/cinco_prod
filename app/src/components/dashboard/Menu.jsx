import React from 'react'
import { Link } from 'react-router-dom';

// BiRightArrow, 
import { BiCalendarPlus, BiCalendarCheck } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";

import { useTranslation } from "react-i18next";

const Menu = (logout) => {
    
    const { t } = useTranslation();

    return (
        <div className="col-lg-1 menu">
                <ul>
                    {/* <li>
                        <Link to="/game" >
                            <BiRightArrow /> 
                            <p> {t('play')} </p>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/new-game">
                            <BiCalendarPlus /> 
                            <p> {t('new')} <br/> {t('session')}</p>    
                        </Link>
                    </li>
                    <li>
                        <Link to="/instructions" >
                            <AiOutlineStar /> 
                            <p> {t('instructions')} </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sessions">
                            <BiCalendarCheck /> 
                            <p> {t('sessions')} </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/games-information" >
                            <VscOpenPreview /> 
                            <p> {t('resumes')} </p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/profile">
                            <CgProfile />
                            <p> {t('profile')} </p>
                        </Link>
                    </li>
                    <li onClick={() => logout()}>
                        <IoLogOut />
                        <p> {t('logout')} </p>
                    </li>
                </ul>
            </div>
    )
}

export default Menu
