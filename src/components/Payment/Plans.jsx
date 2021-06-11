import React, { useEffect } from 'react'

import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { Plan, PlansContainer } from '../ui/Payment'

import { MdAttachMoney } from "react-icons/md";
// import { RiBikeLine, RiEBike2Line, RiCarLine } from "react-icons/ri";
import { analytics } from '../../firebase';



const Plans = ({setIdPlan, setAmout, setPhase, user}) => {

    const { t } = useTranslation();
    let history = useHistory();

    const handleClick = (_price, _idPlan) => {
        setIdPlan(_idPlan)
        setAmout(_price)
        setPhase(1)
        analytics.logEvent('add_to_cart', {currency: "USD", value: _price, items : _idPlan});
    }

    useEffect(() => {
        
        if (user !== undefined) {
            if (user.subscriptionType === 'limited' || user.subscriptionType === 'monthly') {
                document.getElementById('limited').classList.add('block')
                document.getElementById('limited').style.pointerEvents = "none"
                
            }
            if (user.subscriptionType === 'monthly') {
                document.getElementById('monthly').classList.add('block')
                document.getElementById('monthly').style.pointerEvents = "none"
                
            }
            if (user.subscriptionType === 'annual') {
                document.getElementById('limited').classList.add('block')
                document.getElementById('limited').style.pointerEvents = "none"
                document.getElementById('annual').classList.add('block')
                document.getElementById('annual').style.pointerEvents = "none"
                
            }

            
        }
    }, [user])
    
   
    return (
        <PlansContainer>
            
                    <Plan id="limited" onClick={() => {history.push("/singup")}}>
                        <div className="background free">
                            {/* <div className="icon">
                                <RiBikeLine className="span" />
                                <RiBikeLine />
                            </div> */}
                            <div className="name">
                                {t('basic')}
                            </div>
                        </div>
                        <div className="row">
                        <div className="price">
                            <p>u<MdAttachMoney/> 
                                0 <span>00</span> 
                            </p>
                            <div className="line"></div>
                            <p className="time"> 
                                {t('trial')}
                            </p>
                        </div>
                        <div className="description">
                            <ul>
                                <li>{t('one_time')}</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                            </ul>
                        </div>
                        </div>
                    </Plan>
                
            
            
                    <Plan id="monthly" onClick={() => handleClick(9.99, "P-9LX457058K3795810MCXNTEA")}>
                        <div className="background month">
                            {/* <div className="icon">
                                <RiEBike2Line className="span" />
                                <RiEBike2Line />
                            </div> */}
                            <div className="name">
                                {t('monthly')}
                            </div>
                        </div>
                        <div className="row">
                        <div className="price">
                            <p>u<MdAttachMoney/> 9 <span>99</span> </p>
                            <div className="line"></div>
                            <p className="time">
                                {t('per_month')}
                            </p>
                        </div>
                        <div className="description">
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>anual: u$119.80</li>
                            </ul>
                        </div>
                        </div>
                    </Plan>
               
                    <Plan id="annual" onClick={() => handleClick(110, "P-5JF92675B7261882CMCXNPKQ")}>
                        <div className="background annual">
                            {/* <div className="icon">
                                <RiCarLine className="span" />
                                <RiCarLine />
                            </div> */}
                            <div className="name">
                                {t('annual')}
                            </div>
                        </div>
                        <div className="row">
                        <div className="price">
                            <p>u<MdAttachMoney/> 110 <span>00</span> </p>
                            <div className="line"></div>
                            <p className="time"> 
                                {t('per_year')}
                            </p>
                        </div>
                        <div className="description">
                            <ul>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>SAVED : u$19.80</li>
                            </ul>
                        </div>
                        </div>
                    </Plan>
        
          </PlansContainer>  
    )
}

export default Plans
