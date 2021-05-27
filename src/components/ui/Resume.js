import styled from '@emotion/styled';

import bg from  '../../assets/img/back-grey.jpg'
import sorprise from '../../assets/img/sorp.jpg'
import decition from '../../assets/img/dec.jpg'
import emotion from '../../assets/img/emo.jpg'
import action from '../../assets/img/acc.jpg'
import intuition from '../../assets/img/intu.jpg'
import thoughts from '../../assets/img/pensa.jpg'
import words from '../../assets/img/pal.jpg'

export const Background = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    position: absolute;

    .background{
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.6;
        background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 0;
    }

    .content{
        z-index: 100;
        position: relative;
        padding-bottom: 30px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                    background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .row{
        margin-right: 0;
        padding-right: 0;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #d1d2d3;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    
    align-items: center;

    div{
        display: flex;
        flex-direction: row;
        
        

        &:nth-of-type(1){
            width: 60%;
            padding-right: 20px;
        }
        &:nth-of-type(2){
            width: 30%;
        }
        
        
        h2{
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding-top:5px;
        }

        p{
            width: 90%;
            background: #fff;
            padding: 8px;
            font-size: 18px;
        }
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 1;

    #titles{
        border-bottom: 0.5px solid #b7b6b6;
    }
    
    .title{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        
        width: 66%;
        padding: 30px;
        &.notes{
            width: 33%;
            float: right;
            padding-left: 15px;
            
        }
    }
`

export const ButtonResume = styled.button`
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
        appearance: none;
    border: 0;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    overflow: hidden;
    padding: 15px 70px;
    position: relative;
    top: 0;
    -webkit-transition: 150ms;
    transition: 150ms;
    background-color: #FFFFFF;
    border: 1px solid #efefef;
    margin: 0 20px;
    box-shadow: 0 0.5rem 0 #C2C4C9;
    color: #646567;
    text-shadow: 0 -0.1em 0 rgba(225, 227, 228, 0.5);
    border-radius: 1rem;
    margin-bottom: 20px;
    }
    
    &:hover, &:focus {
    outline: none;
    }
    &:active {
    box-shadow: 0 0 0;
    outline: none;
    top: 0.5rem;
    }
`
export const List = styled.ul`
    width: 66%;
    float: left;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    padding-left: 30px;
`
export const Item = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    

    div{ 
        width: 48%;
        line-height: 1.6;
        padding: 10px;
        list-style-type: none;
        

        &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7){
            border-right: 0.5px solid #b7b6b6;
            padding-left: 0;
        }

        .card-number{
            font-weight: bold;
            text-transform: uppercase;
            font-size: 20px;
        }
        .card-question{
            text-transform: uppercase;
            font-size: 15px;
        }

        
    }
`

export const ListNotes = styled.ul`
    
    
    list-style: none;
    padding-right: 30px;

    li{
        padding: 10px;
    }
`

export const ContainerCard = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 10vh;
`

export const CloseButton = styled.div`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    padding-top: 5px;
    color: #fff;
`

export const FinalContainer = styled.div`
    position: fixed;
    top: -60px;
    left: 0;
    height: ${props => `${props.h}px`};
    width: ${props => `${props.w}px`};
    z-index: 9999;
    display: none;

    &.visible{
        display: block;
    }

    &.cards{
        &:hover{
            box-shadow: none;
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

    img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
`
export const Close = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 1;
    color: #fff;
    font-size: 50px;
    display: flex;
    align-items: flex-end;
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

    &#sorprise{
        z-index: 1;
        background-image: url(${sorprise});
    }

    &#decision{
        z-index: 1;
        background-image: url(${decition});
    }

    &#acc{
        z-index: 2;
        background-image: url(${action});
    }

    &#emo{
        z-index: 2;
        background-image: url(${emotion});
    }

    &#intu{
        z-index: 2;
        background-image: url(${intuition});
    }

    &#pensa{
        z-index: 2;
        background-image: url(${thoughts});
    }

    &#pal{
        z-index: 2;
        background-image: url(${words});
    }

    &.final{
        position: absolute;
        top: ${props => `${props.cardX}px`};
        left: ${props => `${props.cardY}px`};
    }
    @media screen and (max-width: 1290px) {
        width: 280px;
        height: 151px;
    }

    @media screen and (max-width: 1024px) {
        width: 250px;
        height: 135px;
    }
    
`