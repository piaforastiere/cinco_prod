import styled from '@emotion/styled';

import imgOne from '../../assets/img/workshop/1.jpg'
import imgTwo from '../../assets/img/workshop/4.jpg'

import imgThree from '../../assets/img/workshop/2.jpg'
import imgFour from '../../assets/img/workshop/3.jpg'
import imgFive from '../../assets/img/workshop/5.jpg'
import imgSix from '../../assets/img/workshop/6.jpg'


export const WorkshopContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: calc( 100vh - 68px);
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    div{
        &.first{
        width: 35%;
        background: #ffffff;
        position:relative;
        display: flex;
        align-items: center;
        
        h3{ 
            color: #1E2E87;
            animation-name: text;
            animation-duration: 4s;
            font-size: 60px;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 1.5;
            width: 70%;
            position: absolute;
            left: 50px;
        }
        
        }
        &.second{
            width: 30%;
            background: #e9bd38;
            position: relative;


            .imgOne{
                background-image: url('${imgOne}');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                position: absolute;
                height: 67%;
                top: 0;
                animation-name: one;
                animation-duration: 4s;
            }

            .imgTwo{
                background-image: url('${imgTwo}');
                background-position: bottom left;
                background-repeat: no-repeat;
                background-size: contain;
                width: 70%;
                position: absolute;
                height: 35%;
                bottom: 0;
                animation-name: two;
                animation-duration: 4s;
            }

        }
        &.thrid{
            width: 35%;
            background: #5e9a59;
            display: flex;
            position: relative;
            

            div{
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 50%;
                position: absolute;
                animation-duration: 4s;

                &.imgThree{
                    background-image: url('${imgThree}');
                    height: 35%;
                    left: 0;
                    top: 0;
                    animation-name: three;
                
                }
                &.imgFour{
                    background-image: url('${imgFour}');
                    height: 35%;
                    right: 0;
                    top: 0;
                    animation-name: four-six;
                }
                &.imgFive{
                    background-image: url('${imgFive}');
                    height: 65%;
                    left: 0;
                    bottom: 0;
                    animation-name: five;
                }
                &.imgSix{
                    background-image: url('${imgSix}');
                    height: 33%;
                    right: 0;
                    bottom: 0;
                    animation-name: four-six;
                }
            }
        }
    }

    @keyframes text {
    from {
        opacity: 0.5;
        left: -90%;
    }
    to {
        opacity: 1;
        left: 50px;
    }
    }
    @keyframes one {
    from {
        top: -70%;
    }
    to {
        top: 0
    }
    }
    @keyframes two {
    from {
        bottom: -50%;
    }
    to {
        bottom: 0
    }
    }

    @keyframes three {
    from {
        top: -40%;
    }
    to {
        top: 0
    }
    }

    @keyframes four-six {
    from {
        right: -50%;
    }
    to {
        right: 0
    }
    }
    @keyframes five {
    from {
        bottom: -80%;
    }
    to {
        bottom: 0
    }
    }
`