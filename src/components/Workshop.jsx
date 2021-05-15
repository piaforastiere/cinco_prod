import React, { useEffect } from 'react'
import { WorkshopContainer } from './ui/Workshop'

import workOne from '../assets/img/workshop/work-2.jpg'
import workTwo from '../assets/img/workshop/work-3.jpg'
import workThree from '../assets/img/workshop/work-4.jpg'

const Workshop = () => {

    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"
    },[])

    return (
        <div>
            <WorkshopContainer >
                <div className="first" >
                    <h3>
                    3 online workshops to reflect, design and take action!
                    </h3>
                </div>
                <div className="second" >
                    <div className="imgTwo"></div>
                    <div className="imgOne"></div>
                    
                </div>
                <div className="thrid" >
                    <div className="imgThree"></div>
                    <div className="imgFour"></div>
                    <div className="imgFive"></div>
                    <div className="imgSix"></div>
                </div>
            </WorkshopContainer>
            <WorkshopContainer style={{backgroundImage: "url("+workOne+")"}} ></WorkshopContainer>
            <WorkshopContainer style={{backgroundImage: "url("+workTwo+")"}} ></WorkshopContainer>
            <WorkshopContainer style={{backgroundImage: "url("+workThree+")"}} ></WorkshopContainer>
        </div>
    )
}

export default Workshop
