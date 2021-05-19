import styled from '@emotion/styled';
import { device } from '../ui/breakpoints';

import backdash from '../../assets/img/back-dash.jpeg'

export const ContainerDash = styled.div`
    background: url(${backdash});
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 60px 60px 40px 120px;
    min-height: calc(100vh - 70px); 

    .mail{
        color: #FFAE11;
        margin-left: 5px;
    }
    .spacer{
        width: 60px;

        @media screen and (max-width: 1280px) {
            width: 3%!important;
        }
    }

    .menu{
        border-right: 0.5px solid #fff;
        height: 100%;
        color: #fff;

        ul{
            list-style: none;   
            padding-top: 40px;
            padding-left: 0;
            li{
                text-align: center;
                margin-bottom:40px;
                cursor: pointer;

                a{
                    text-decoration: none;
                    color: inherit;
                }
                svg{
                    font-size: 30px;
                    font-weight: 200;
                    margin-bottom: 5px;
                }
                p{
                    font-size: 12px;
                    font-weight: 200;
                    
                }
            }
        }
    }
    .multiple, .last-games{
        padding: 0 20px;
    }

    .last-games{
        margin-top: 30px;
        @media screen and (max-width: 600px){
            padding: 0 10px;
        }
    }
    
    .back-icon{
        font-size: 40px;
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;

        span{
            font-size: 20px;
            margin-left: 10px;
            text-transform: uppercase;
        }
    }

   @media (max-width: 1280px){
       .multiple{
            .buttons-container{
                width: 40%;
            }
       }
   }
    @media ${device.laptop}{
        flex-direction: row;
        padding: 40px 20px;

        .menu{
            border-right: none;
            border-bottom: 0.5px solid #fff;
            height: 80px;
            width: 100%;
            margin-bottom: 20px;

            ul{
                display: inline;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0 20px ;
            }
        }
    }
    @media screen and (max-width: 600px){
        padding: 0px;
        padding-top: 30px;
        .back-icon{
            margin-top: 10px;
        }

        .menu{
            ul{
                width: 100vw;
            }
        }
        .spacer{
            display: none;
        }
        .multiple{
            width: 100%;
            
        }
    }
`
export const Profile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100px;
    color:#fff;

    .img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
        overflow: hidden;

        
        img{
            width: 100%;
            @media screen and (max-width: 600px){
                width: auto;
                height: 100%;
            }
        }
    }

    .user-name{
        font-size: 42px;
        font-weight: 300;
    }
    .user-subscription{
        font-size: 23px;
        font-weight: 200;
        margin-top: 15px;
        
        div{
            display: flex;
        }
    }
`
export const GamesPlayed = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: rgba(33, 33, 33, 0.4);
    -webkit-box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);
    -moz-box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);
    box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);
    padding: 20px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        &.line{
            width: 0.5px;
            height: 80px;
            background: rgba(250, 250, 250, 0.5);
        }
    }
    
    h2{
        font-weight: 500;
        width: 100%;
        text-align: center;
        font-size: 25px;
        letter-spacing: 1.6px;
    }
    p{
        text-transform: uppercase;
        font-weight: lighter;
        line-height: 1.2;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }

    @media screen and (max-width: 600px){
        flex-direction: column;

        div{
            &.line{
                width: 80% ;
                height: 0.5px;
                margin-bottom: 20px;
            }
        }

        
    }
`

export const Module = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 20px 30px;
    width: 100%;
    color: #fff;
    margin-bottom: 20px;
    padding-bottom: 40px;
    background-color: rgba(33, 33, 33, 0.4);
    -webkit-box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);
    -moz-box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);
    box-shadow: 0px 0px 24px -8px rgba(77,77,77,1);

    .filter{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        
        h2, div{
            padding: 0;
            width: 50%;
        }

        div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            p{
                text-align: left;
                width: auto;
                margin: 0;
            }

            input{
                width: 85%;
                border-radius: 30px;
                height: 40px;
                padding: 10px 20px; 
                &:focus{
                    outline: none;
                }
            }
        }

        @media screen and (max-width: 600px){
            flex-wrap: wrap;
            
            h2, div{
                padding: 0;
                width: 100%;
            }
            div input{
                width: 70%;
                margin-top: 20px;
            }
        }
    }
    .title-row{
        width: 100%;
        margin-bottom: 10px;
    }

    h2{
        font-weight: 500;
        font-size: 25px;
        letter-spacing: 1.6px;
    }

    h3{
        font-weight: 700;
        width: 100%;
        text-align: center;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: 1.6px;
        margin-bottom: 10px;
    }
    p{
        
        font-weight: 600;
        width: 100%;
        text-align: center;
        font-size: 18px;
        line-height: 1.2;
    }

    @media screen and (max-width: 600px){
        padding: 20px 10px;
    }
`

export const NewButton = styled.button`
            -webkit-appearance: none;
               -moz-appearance: none;
                    appearance: none;
            border: 0;
            font-size: 17px;
            text-transform: uppercase;
            margin: 0;
            overflow: hidden;
            padding: 15px 45px;
            position: relative;
            top: 0;
            -webkit-transition: 150ms;
            transition: 150ms;
            background-color: ${props => props.bgshadow};
            border: 1px solid ${props => props.bg};
            // background-image: radial-gradient(ellipse at top right, #C2C4C9, rgba(68, 66, 67, 0) 67%);
            box-shadow: 0 0.5rem 0 ${props => props.bg};
            color: #3a393a;
            text-shadow: 0 -0.1em 0 rgba(196, 199, 200, 0.5);
            border-radius: 1rem;
            margin-bottom: 10px;
            font-weight: 500;
          
            a{
                color: inherit;
                text-decoration: none;
            }
          &:hover, &:focus {
            outline: none;
            background-color: ${props => props.bg};
            box-shadow: 0 0.5rem 0 ${props => props.shadow};
            text-shadow: 0 -0.1em 0 rgba(196, 199, 200, 0.5);
          }
          &:active {
            box-shadow: 0 0 0;
            outline: none;
            top: 0.5rem;
          }
`

export const LatestGames = styled.div`
    margin-top:20px;
    width: 100%;
    table{
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
    
    .tg  {
        border-collapse:collapse;
        border-spacing:0;
        word-break: normal;
    }

    th{
        
        vertical-align: middle;
    }
    tr{ 
        vertical-align: middle;
        height: 50px;
        color: #fff;
        
        td{
            word-break:normal;
            
        }
        .appointement-name{
            
        }
        .pass{
            text-align: center;
            @media screen and (max-width: 600px) {
                display: none;
            }
        }
        .name{
            text-align: center; 
        }
        .master{
           
           text-align: center;
        }
        .progress{
            height: 50px;
            overflow: hidden;
            font-size: inherit;
            background-color: transparent;
            border-radius: 0;
            display: revert;
            text-align: center;

        }
        .icon{
            width: 20px;
            svg{
                
                font-size: 20px;
            }
            a{
                color: inherit;
            }
        }
       
        &:nth-of-type(odd){
            background: rgb(33,33,33);
            background: linear-gradient(90deg, rgb(33 33 33 / 8%) 0%, rgb(61 60 60) 50%, rgb(33 33 33 / 8%) 100%)
        }
        &.head{
            background: transparent;
            background: linear-gradient(90deg, rgba(30,163,164,0) 0%, rgba(88,170,184,0) 50%, rgba(26,30,37,0) 100%);
        }
        
    }
    }

    

`

export const ContainerResume = styled.div`
    width: 100%;
    margin: auto;

    background-position: center;
    background-size: cover;
    padding: 30px 8%;

    a.back-icon{
        position: absolute;
        left: 30px;
        font-size: 40px;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-top: 0px;

        span{
            font-size: 20px;
            margin-left: 10px;
            text-transform: uppercase;
        }
    }
`
export const CardsResume = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .card{
        width: 270px;
        /* margin-right: 30px; */
        margin-bottom: 30px;
        margin-top: 0;

        &-body{
            padding-bottom: 20px;
        }
    }
`