import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next";

import DaysCounter from '../DaysCounter'

import emptyPhoto from '../../../assets/img/empty-photo.png'

import { Profile } from '../../ui/Dashboard';
import ImagePro from './ImagePro';



const ProfileSection = ({subscriptionDate, lastPay, setSubPass, subscriptionType}) => {

    const user = useSelector(store => store.user.user)

    const { t } = useTranslation();

    return (
        <Profile>
                <div  className="img"  >
                                    {
                                        user.photoURL !== null && user.photoURL !== undefined ? (
                                            <img src={user.photoURL} alt=""/>
                                            
                                        ) : (
                                            <img src={emptyPhoto} alt=""/>
                                        )
                                    }
                                    <ImagePro />
                </div>
                <div className="row">
                    <div className="user-name">
                       {t('welcome')}, { user.displayName }!
                    </div>
                    <div className="user-subscription">
                        <DaysCounter subscriptionDate={subscriptionDate} lastPay={lastPay} setSubPass={setSubPass} subscriptionType={subscriptionType} />
                    </div>
                </div>
                </Profile>
    )
}

export default ProfileSection
