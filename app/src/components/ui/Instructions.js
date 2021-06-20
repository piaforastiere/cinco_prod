import styled from '@emotion/styled';

import backdash from '../../assets/img/back-dash.jpeg'



export const ContainerInstructions = styled.div`
    background: url(${backdash});
    background-size: contain;
    background-repeat: repeat;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100vw;
    padding: 60px 200px;
    min-height: calc(100vh - 70px); 
    color: #fff;

    .back-icon{
        font-size: 40px;
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        
        span{
            font-size: 20px;
            margin-left: 10px;
            text-transform: uppercase;
        }
    }

    .header{
        
        /* background: rgb(104,203,219);
        background: linear-gradient(90deg, rgba(104,203,219,1) 8%, rgba(161,194,5,1) 27%, rgba(255,203,49,1) 51%, rgba(241,89,81,1) 78%, rgba(125,47,106,1) 100%);
         */
        width: 100%;
        display: flex;
        flex-direction: column;
        color:#fff;
        
       
        .img{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;

            img{
                width: 80px;
            }
            h1{
                font-size: 42px;
                font-weight: 300;
            }
        }
        
    }

    .filter{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 40px;
        background: transparent;

        &.active{
            position: fixed;
            top: 0;
            margin-top: 0;
            background: rgba(31, 31, 31, 0.8);
            padding: 15px 174px 0px 200px;
            width: 99%;
            left: 0;
            /* transition: background 1s ease, width 1s ease; */

            p{
                background: rgba(128, 128, 128, 0.8);
            }
            
        }

        div, a{
            width: fit-content;
            text-decoration: none;
            color: inherit;
            cursor: pointer;
            margin: 0;
            padding: 0; 
        }

        p{
            width: fit-content;
            text-transform: uppercase;
            background: rgba(128, 128, 128, 0.3);
            border-radius: 50px;
            padding: 15px 25px;
        }

        
    }

    @media screen and (max-width:1280px){
        padding: 40px 80px;

        
        .filter-row{
            height: 112px;
        }
        .filter{
            p{
                padding: 15px 25px
            }
            &.active{
                padding: 15px 64px 0px 80px;
            }
        }
    }

    @media screen and (max-width: 1024px){
        padding: 40px 10px;
        .back-icon{
            font-size: 30px;
            span{
                font-size: 18px;
            }
        }
        .header{
            .row{
                padding: 0 70px;
            }
            
            .img{
                h1{
                    font-size: 32px;
                }
            }

            .filter-row{
                padding: 0;
                height: 94px;
            }
            .filter{
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 30px;

                p{
                    margin: 10px 5px;
                    padding: 8px 15px;
                }

                &.active{
                    padding: 10px 14px 2px 10px;
                }
            }
        }

        @media screen and (max-width: 768px){
            padding: 30px 30px;
            .header .row{
                padding: 0 30px 0 10px;
            }
            .filter-row{
                display: none;
            }
        }
        
    }
`
export const InstructionContainer = styled.div`
    /* background: rgb(30,163,164);
    background: linear-gradient(0deg, rgba(30,163,164,1) 0%, rgba(26,30,37,1) 100%); */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 40px 0px;

    .spacer{
            width: 100%;
            height: 80px;
            
    }

    h4{
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 20px ;
    }

    p{
        line-height: 1.2;
        margin-left: 20px;
    }

    h5{
        margin: 10px 10px;
    }

    ul{
        padding-left: 60px;
        margin-bottom: 0;
        li{
            margin-bottom: 5px;
            line-height: 1.5;
        }
    }

    @media screen and (max-width: 1024px) {
        .spacer{
            height: 60px;
        }
        padding: 40px 70px;
    }

    @media screen and (max-width: 768px){
        padding: 50px 30px 50px 20px;
    }
    
`