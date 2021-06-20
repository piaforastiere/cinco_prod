import styled from '@emotion/styled';

import sorprise from '../../../assets/img/sorp.jpg'
import decition from '../../../assets/img/dec.jpg'
import emotion from '../../../assets/img/emo.jpg'
import action from '../../../assets/img/acc.jpg'
import intuition from '../../../assets/img/intu.jpg'
import thoughts from '../../../assets/img/pensa.jpg'
import words from '../../../assets/img/pal.jpg'

import sorpriseES from '../../../assets/img/es-sorp.jpg'
import decitionES from '../../../assets/img/es-dec.jpg'
import emotionES from '../../../assets/img/es-emo.jpg'
import actionES from '../../../assets/img/es-acc.jpg'
import intuitionES from '../../../assets/img/es-intu.jpg'
import thoughtsES from '../../../assets/img/es-pensa.jpg'
import wordsES from '../../../assets/img/es-pal.jpg'

export const BoardContainer = styled.div`
    width:100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &.close{
        width: calc(100% - 350px);
    }

    .inst-menu{
        background: #fff;
        padding: 10px;
        position: absolute;
        top: 3px;
        right: 60px;
        height: 36px;
        border-radius: 15px;
        box-shadow: #000;
        z-index: 99999;
        /* &::before{
            content: '';
            position: absolute;
            content: '';
            position: absolute;
            bottom: -1.5px;
            right: -22px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 19.5px 0 19.5px 21px;
            border-color: transparent transparent transparent #000000;
            opacity: 0.5;
            line-height: 0px;
        } */
        &::after{
            content: '';
            position: absolute;
            bottom: 6px;
            right: -13px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 12px 0 12px 18px;
            border-color: transparent transparent transparent #ffffff;
            line-height: 0px;
            _border-color: #000000 #000000 #000000 #ffffff;
            _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');

        }
    }
    .btn-final-end{
        z-index: 100;
        background: #fff;
        padding: 10px 30px;
        position: absolute;
        z-index: 50;
        padding: 10px 30px;
        border-radius: 10px;
        text-align: center;
        text-transform: uppercase;
        top: 30px;
        right: 30px;
        color: #000;
        font-weight: bold;
        font-size: 18px;
    }

    .game-over{
        width: 500px;
        text-align: center;
        margin: auto;
        img{
            width: 100%;
        }
        p{
            font-size: 16px;
            text-transform: uppercase;
            margin-top: 30px;
            font-weight: 500;
            color: #000;
        }
    }

    .back-icon{
        position: absolute;
        left: 30px;
        top: 30px;
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
`


export const Board = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    .btn{
        top: 20px;
        right: 20px;
    }
`

export const AppointmentIdentifired = styled.div`
    position: absolute;
    bottom: 0px;
    left: 40px;
    padding: 8px 20px;
    background: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`
export const PlayersContainer = styled.div`
    position: absolute;
    bottom: ${props => props.bottom ? "25px" : "90%"};
    left: 20px;
    width: 400px;
    height: 50px;
    z-index: 9999;

    &.instructions{
        bottom: auto;
        top: 10px;
        width: 520px;
        
        .mark{
            background: #fff;
            padding: 12px;
            position: absolute;
            top: 3px;
            left: 60px;
            border-radius: 15px;
            box-shadow: #000;
            z-index: 99999;
            opacity: 0;
            transition: opacity 1s ease;

            &.active{
                opacity: 1;
                transition: opacity 0.5s ease;
            }
            &::after{
                content: '';
                position: absolute;
                bottom: 6px;
                left: -13px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 12px 18px 12px 0;
                border-color: transparent #ffffff transparent transparent;
                line-height: 0px;
            }
        }
        

    }

    .button{
        position: absolute;
        width: 50px;
        height: 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

            svg{
                font-size: 40px;
                color: #efefef;
            }
        
            &.dark{
                background: #212629;
                border-radius: 50%;
                svg{
                font-size: 30px;
                color: #efefef;
            }
        }

        
        p{
            font-size: 12px;
            position: absolute;
            top: 6px;
            right: 6px;
            background: red;
            color: #fff;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
`

export const PlayersDisplay = styled.div`
    position: absolute;
    left: 60px;
    bottom: ${props => props.bottom && "0px" };
    top: ${props => props.bottom ? "auto" : "0px" };
    background: #fff;
    padding: 12px;
    border-radius: 10px;
    display: none;
    transition: display 0.5s ease;

    &.intructivo{
        padding: 20px 15px;
    }

    &.active{
        display: block;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: ${props => props.bottom && "11px" };
        top: ${props => props.bottom ? "auto" : "16px" };
        left: -18px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 18px 9px 0;
        border-color: transparent #ffffff transparent transparent;
    }

    ul{
        text-align: left;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        
        li{
            position: relative;
            margin-right: 8px;
            
            &:last-of-type::after{
                display: none;
            }
            &::after{
                content: ',';
                position: absolute;
            }
        }
        &.instructions{
            display: block;
            list-style: circle inside;
            li{
                margin-bottom: 10px;
                line-height: 1.2;
                &:after{
                    display: none;
                }
            }
        }
    }

    .close{
        font-size: 24px;
        color: #fff;
        font-weight: 600;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1px;
        width: 28px;
        height: 28px;
        background: rgba(0,0,0, 0.8);
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: -12px;
        cursor: pointer;

        svg{
            margin-top: -2px;
        }
    }

`

export const InstructionDisplay = styled.div``
export const RightBar = styled.div`
    width: 50px;
    position: absolute;
    right: 0;
    bottom: 0;    
    height: 100%;
    
    z-index: 50;
    background: transparent;
    transition: width 0.5s ease-in-out, background 0.4s ease-in-out;
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    
    &.open{
        width: 350px;
        background: #fff;
        display: block;
    }
`;

export const MenuButton = styled.div`
    background: #272727;
    color: #fff;
    width: 50px;
    height:40px;
    float: left;
    text-align: center;
    font-size: 35px;
    display:flex;
    justify-content:center;
    align-items: center;
    transform: rotate(0deg);
    transition: rotation 1.5s ease-in-out;
    cursor:pointer;

    &.open{
        transform: rotate(180deg);
    }
`;

export const MessageButton = styled.div`
    background: #272727;
    color: #fff;
    width: 50px;
    height:50px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    transform: scaleX(-1);
   
    p{
        font-size: 12px;
        position: absolute;
        top: -5px;
        right: -2px;
        background: red;
        color: #fff;
        border-radius: 15px;
        width: 25px;
        height: 25px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: 500;
        transform: scaleX(-1);
    }
    
`



export const InputTheme = styled.div`
    position: absolute;
    z-index: 50;
    padding: 0 20px;
    margin-top: -30px;
    max-width: 30vh;
    text-align: center;
    text-transform: uppercase;
`

export const Gradient = styled.div`
    top: calc(50vh -  -10px);
    width: calc(100% - 16px);
    position: absolute;
    height: 80px;
    background: rgb(255,255,255);
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,0) 100%);

`
export const ShowQuestionsContainer = styled.div`
margin-top:0px;
height: calc(50vh - 10px);
overflow-y: scroll;
margin-right: 5px;
padding: 0 5px;
padding-top: 10px;
position: relative;


/* width */
::-webkit-scrollbar {
width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
box-shadow: inset 0 0 5px transparent; 
border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: grey; 
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #b30000; 
}


`
export const Question = styled.div`
position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap:wrap;
    margin-bottom: 5px;
    cursor: pointer;

    

    &.remove{
        cursor: ${props => props.playerType === 'master' ? 'pointer' : 'default'};
    }

    .header{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap:no-wrap;
    width: 100%;
    border-bottom: 1px solid #d2d0d069;
    height: 30px;
    height: 30px;
    padding-bottom: 5px;
    p{
        width: calc(100% - 30px);
        margin: 0;
        text-transform: uppercase;
    }
}
.color{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    &:before{
        content:"";
        position: absolute;
        color: #fff;
    }
    &.acc{
        background-color: #96C93D;
    }
    &.pal{
        background-color: #FFCB31;
    }
    &.emo{
        background-color: #F15951;
    }
    &.decision{
        background-color: #404042;
    }
    &.pensa{
        background-color: #953881;
    }
    &.intu{
        background-color: #68CBDB;
    }
    &.sorprise{
        background-color: #404042;
    }
}

&.test{
        cursor: no-drop;
        .header{
            .color{
                border: 3px solid #a29f9f;
                &:after{
                    content: "×";
                    position: absolute;
                    top: 0;
                    left: -3px;
                    font-size: 46px;
                    line-height: 0.35;
                    color: #a29f9f;
                }
            }
            p{
                font-weight: 600;
                color: #a29f9f;
            }
        }
        .question{
            color: #a29f9f;
        }
    }

.counter{
    border-radius: 50%;
    background-color: red;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #fff;
    font-weight: 500;
    display:flex;
    margin-right: 20px;
    opacity: 0;
    &.active{
        opacity: 1;
    }
}
.question{
    display: none;
    padding: 10px 5px;
    
}
&:first-of-type{
    height: auto;
    transition: height 1s ease;
    
    .question{
        display: block;
    }
}
&.active{
    height: auto;
    transition: height 1s ease;
    
    .question{
        display: block;
    }
}
`

export const NoteContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
max-height: 40vh;
margin-right: 5px;

padding: 0px;
display: flex;
flex-direction: column-reverse;

form{
    width: 100%;
    display: flex;
    align-items: center;
    background: #272727;
    padding:  10px 5px;
    textarea{
        width: calc(100% - 40px);
        margin-right: 8px;
        height: 80px;
        display: block;
        border: none;
        padding: 5px;
        outline:none;
        border: 1px solid darkgray;
        border-radius: 5px;
        background: #3b3b3b;
        color: #fff;
    }

    .btn{
        color: darkgray;
        font-size: 28px;
        padding: 0;
        margin-bottom: 5px;
    }
}

.list{
    height: calc(50vh - 10px);
    width: 100%;
    overflow-y: auto;
    margin-right: 15px;
    padding: 0 5px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;

    div{  
        margin: 0;
        margin-bottom: 10px;
        padding: 15px;
        background: #E5E5E9;
        color: #000;
        border-radius: 16px;
        width: fit-content;
        position: relative;
        line-height: 1.2; 
        font-weight: 300;
        
        span{
            font-weight: 400;
            text-transform: uppercase;
        }

        .chat-tik{
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 0;
            left: 3px;
            bottom: -10px;
            position: absolute;
            bottom: -5px;
            z-index: 9999;
            width: 10px;
            height: 10px;
            
        }
        &.player{
            background: #019de8;
            color: #fff;
            margin-left: auto;
            
            .chat-tik{
                left: auto;
                right: 3px;
            }
        }
    }
   
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #272727; 
    }
}
`



export const EndContainer = styled.div`
   width: calc(100% - 50px);
   position: relative;
   padding-right: 0px;
   text-align: right;
   float: right;
   background: #272727;
   height:40px;
`

export const Endgame = styled.button`
border: none;

padding: 0;

&:focus{
   border: none;
}
&:active{
   border: none;
}

.button {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
    height: 100%;
    background: #353535;
    /* button */
 
    .link {
       font-family: "Rubik", sans-serif;
       background-color: transparent;
       font-size: 18px;
       letter-spacing: 2px;
       color: #bfbfbf;
       position: relative;
       transition: all 0.3s ease-in-out;
       cursor: pointer;
       border: 0;
       padding-left: 20px;
       left: 0;
       line-height: auto;
       overflow: hidden;
        margin: 0;
       /*line*/
       &:before {
          content: "";
          background-color: #f38181;
          width: 3px;
          height: 100%;
          position: absolute;
          z-index: 2;
          left: 0px;
          top: 0px;
          border-radius: 50px;
          transition: all 0.3s ease-in-out;
       }
       /*arrow*/
       &:after {
          content: "";
          width: 15px;
          height: 15px;
          display: flex;
          align-items: center;
          background-color: transparent;
          position: absolute;
          border: solid 3px #f38181;
          border-left: 0;
          border-bottom: 0;
          top: calc(50% - 8px);
          border-radius: 2px;
          transform: translateX(-42px) rotate(45deg);
          transition: all 0.3s 0.2s ease-in-out;
       }
    }
 /* bg button */
    &:before {
       content: "";
       background-color: #424242;
       width: 0;
       height: 100%;
       position: absolute;
       right: 0;
       top: 0px;
       border-radius: 3px;
       transition: all 0.4s 0.3s ease-in-out;
       
    }
    &:hover {
       &:before {
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0px;
       }
 
       .link {
          padding-left: 45px;
     
 
          &:before {
             left: 17px;
             top: -1px;
             transform: rotate(90deg);
          }
 
          &:after {
             transform: translate(-33px) rotate(45deg);
          }
       }
    }
 }
`
export const EndPopup = styled.div`
    position: fixed;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ResumeContainer = styled.div`
    position:relative;
    z-index:50;
    background: transparent;
    width: 90%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10vh;

    #outerContainer{
        width: 100%;
    }
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        touch-action: none;
      }
      
`

export const CardContainer = styled.div`
    // position: absolute;
    z-index: 50;
    height: 190px;
    width: 355px;
    display:flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    touch-action: none;
    user-select: none;
    text-align: center;
    font-size: 14px;
    padding: 0px 40px 0 40px;
    align-items: center;

    &:active {
        -webkit-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        -moz-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
      }
    &:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        -moz-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
      }

      &#pensa{
            z-index: 2;
            &.en{background-image: url(${thoughts});}
            &.es{background-image: url(${thoughtsES});}
        }

        &#intu{
            z-index: 2;
            &.en{background-image: url(${intuition});}
            &.es{background-image: url(${intuitionES});}
        }

        &#sorprise{
            z-index: 1;
            &.en{background-image: url(${sorprise});}
            &.es{background-image: url(${sorpriseES});}
        }

        &#decision{
            z-index: 1;
            &.en{background-image: url(${decition});}
            &.es{background-image: url(${decitionES});}
        }

        &#acc{
            z-index: 2;
            &.en{background-image: url(${action});}
            &.es{background-image: url(${actionES});}
        }

        &#emo{
            z-index: 2;
            &.en{background-image: url(${emotion});}
            &.es{background-image: url(${emotionES});}
        }

        &#pal{
            z-index: 2;
            &.en{background-image: url(${words});}
            &.es{background-image: url(${wordsES});}
        }

    &.final{
        position: absolute;
        top: ${props => `${props.cardX}px`};
        left: ${props => `${props.cardY}px`};
    }

    @media screen and (max-width: 1024px) {
        width: 250px;
        height: 135px;
    }
    
`
export const GameOverContainer = styled.div`
    width: 100%;
    height: 98vh;
    background-image: url('https://media1.giphy.com/media/h5XG7vdp3hq1OolYD2/source.gif');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    padding: 0;
`

export const ResumeMasterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   
    
    &.final{
        /* height: 100vh;
        width: 100%; */
        height: ${props => `${props.h}px`};
        width: ${props => `${props.w}px`};

        img{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

`