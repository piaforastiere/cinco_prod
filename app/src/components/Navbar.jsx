import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction } from '../redux/UserDucks'

import { useTranslation } from "react-i18next";

import logo from '../assets/img/logo-en.png'
import logoES from '../assets/img/logo-1.png'
import { NavBarContainer } from './ui/Navbar';
import LanguageSelector from './LanguageSelector';
// import { Profile } from './ui/Navbar'

// import emptyPhoto from '../assets/img/empty-photo.png'

const Navbar = (props) => {

    const dispatch = useDispatch()

    // const user = useSelector(store => store.user.user)
    const { t, i18n } = useTranslation();
    
    const logout = () => {
        dispatch(logOutAction())

        props.history.push('/login')
    }
    const active = useSelector(store => store.user.active)

    
    

    return (
        <NavBarContainer className="navbar navbar-dark" >
            <div className="row">
                <Link className="navbar-brand ms-3" to="/">
                    <img src={i18n.language === "en" ? logo : logoES} alt="cinco poderes" width="150"/>
                </Link>
                </div>
                {/* <NavLink className="btn btn-light me-2 rounded-pill mobile" style={{ width: '150px', fontWeight: 500, color: '#fff', backgroundColor: '#F15951', borderColor: '#C94C44'}} to="/game" exact>
                                    {t("play")}
                </NavLink> */}
            <div className="row menu-items">
                <LanguageSelector />
            <div className="d-flex align-items-center" id="nav-list">
            
            {
                active ? (
                    <>  
                        {/* <NavLink className="btn btn-light me-2 rounded-pill" style={{ width: '150px'}} to="/game" exact>
                            Play
                        </NavLink> <NavLink className="btn btn-dark me-2" to="/games-information" exact>
                            Resumes
                        </NavLink>
                        <NavLink className="btn btn-dark me-2" to="/new-game" exact>
                            Create Session
                        </NavLink> 
                        <NavLink className="btn btn-dark me-2" to="/profile" exact>
                           <Profile>
                           Profile
                            <div  className="img"  >
                                {
                                    user.photoURL !== null && user.photoURL !== undefined ? (
                                        <img src={user.photoURL} alt=""/>
                                    ) : (
                                        <img src={emptyPhoto} alt=""/>
                                    )
                                }
                            </div>
                           </Profile> 
                        </NavLink>
                         */}
                        
                        <NavLink className="btn btn-dark me-2 text-uppercase" to="/dashboard" exact>
                            {t("dashboard")}
                        </NavLink>
                        {/* <NavLink className="btn btn-dark me-2" to="/workshops" exact>
                            {t("workshops")}
                        </NavLink> */}
                        <NavLink className="btn btn-dark me-2 text-uppercase" to="/instructions" exact>
                            {t("instructions")}
                        </NavLink>
                        <NavLink className="btn btn-dark me-2 text-uppercase" to="/shop" exact>
                            {t('shop')}
                        </NavLink>
                        <button className="btn btn-dark me-2 text-uppercase"
                                onClick={() => logout()}
                                >
                            {t("logout")}
                        </button>   
                        <NavLink className="btn btn-light me-2 rounded-pill " style={{ width: '150px', fontWeight: 500, color: '#fff', backgroundColor: '#F15951', borderColor: '#C94C44'}} to="/game" exact>
                            {t("play")}
                        </NavLink>
                        
                        
                    </>
                ) : (
                   <>
                   {/* <NavLink className="btn btn-dark me-2 text-uppercase" to="/" exact>
                            Home
                   </NavLink> */}
                   {/* <NavLink className="btn btn-dark me-2 text-uppercase" to="/workshops" exact>
                        {t("workshops")}
                    </NavLink> */}
                    {/* <NavLink className="btn btn-dark me-2 text-uppercase" to="/instructions" exact>
                        {t("instructions")}
                    </NavLink> */}
                    <NavLink className="btn btn-dark me-2 text-uppercase" to="/shop" exact>
                        {t('shop')}
                    </NavLink>
                    
                    <NavLink className="btn btn-dark me-2 text-uppercase" to="/login" exact>
                    {t("singup")}
                    </NavLink>
                    <NavLink className="btn btn-light me-2 rounded-pill text-uppercase" style={{ width: '150px', fontWeight: 500, color: '#fff', backgroundColor: '#F15951', borderColor: '#C94C44'}} to="/singup" exact>
                    Login
                    </NavLink>
                    {/* <NavLink className="btn btn-dark me-2 text-uppercase sing-in"  to="/game" exact>
                            {t("play_code")}
                    </NavLink> */}
                    
                    {/* <NavLink className="btn btn-light me-2 rounded-pill" style={{ width: '150px'}} to="/game" exact>
                        {t("play")}
                    </NavLink> */}
                    
                   </>
                )

            }
           
            
            
        </div>
            </div>
        </NavBarContainer>
    )
}

export default withRouter(Navbar)
