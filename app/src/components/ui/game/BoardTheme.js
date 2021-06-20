import styled from '@emotion/styled';

export const ContainerBoard = styled.div`
    background: #272727;
    width: 100%;
    height: 100vh;
    position: relative;
    background-size: cover;
    z-index: 100;
    display: block;
    
    &#back{
      opacity: 0;
      z-index: 0;
    }

    .wrapper{
        width: 100%;
        margin: 0 auto;
      }
      
      
      
      .left, .right{
        display: inline-block;
        width: 50%;
        height: 100vh;
        -webkit-perspective: 1000;
        -ms-perspective: 1000;
        perspective: 1000;
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
          transform-style: preserve-3d;
          position: relative;
        box-shadow: 3px 0px 6px #3B2F2F;
      }
      
      .title strong, .title{
        font-size: 1.9em !important;
      }
      
      .left{
        left: 50%;
        z-index: 2;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      
      .right{
        background-size: cover;
        background-position:center, center;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        overflow: hidden;
        
      }
      
      .left:hover, .left.hover{
        cursor: pointer;
      }
      
      .l-front:hover{
        background: #4E4446;
      }
      
      .l-front, .l-back{
        width: 100%;
        height: 100vh;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      
      .l-front, .l-back, .r-front, .r-back {
          position: absolute;
          top: 0;
      }
      
      .l-front { 
        
        background-size: cover;
        background-position:center center;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        
      }
      
      
      
      
      .l-back {
        
        background-size: cover;
        background-position:center center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        
      }
      
      
      .l-front, .l-back {
        transition: all 2s ease-in-out;
        backface-visibility: hidden; 
      }
      
      .l-front {
        
          z-index: 2;
          transform: rotateY(0deg);
        transform-origin: 0 0;
      }
      
      .l-back {
          transform: rotateY(180deg);
        transform-origin: right 0;
        left: -100%;
      }
      
      .open .l-front {
          transform: rotateY(-180deg);
      }
      
      .open .l-back {
          transform: rotateY(0deg);
      }
`

export const PopupContainer = styled.div`
    position: absolute;
    .popups-cont {
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
                justify-content: center;
        -webkit-box-align: center;
                align-items: center;
        z-index: -10;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;


      }

      .popups-cont.s--popup-active {
        z-index: 1000;
        pointer-events: auto;
      }



      .popup {
        z-index: 2;
        position: relative;
        width: 500px;
        height: 350px;

      }

      .popup__content {
        position: relative;
        min-height: 350px;
        padding: 30px;
        background: #fff;
        color: #000;
      
        animation-name: show;
        animation-duration: 3s;
        border-radius: 10px;
        text-align: center;∫
      }
      @keyframes show {
        0%{
            transform: scale(0)
        }
        100%{
            transform: scale(1)
        }
    }

      .popup__heading {
        margin-bottom: 20px;
        font-size: 30px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
      }
      .popup__text {
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
      }


      .popup__input{
          width: 100%;
          height: 50px;
          font-size: 20px;
          text-align: center;
          border: none;
          border-bottom: 1px solid #cacaca;
          display: flex;
          align-items: center;
          justify-content: center;
          &:focus{
              outline: none;
          }
      }
`
export const InputSubmit = styled.input`

    width: 50%;
    height: 50px;
    margin-top: 30px;
    background: transparent;
    outline: none;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: #000;
    border: 2px solid #000;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #000;
        color: #fff;
        letter-spacing: 2px;
      }
`