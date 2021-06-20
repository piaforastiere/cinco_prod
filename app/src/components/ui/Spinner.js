import styled from '@emotion/styled';
import { css } from '@emotion/react'

const dynamicStyle = props =>
  css`
    background: ${props.bg};
  `

export const LoaderContainer = styled.div`
    width: calc(100vw - 50px);
    float: right;
    height: 100vh;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    


/* The Loader */

#loader-wrapper {
  position: fixed;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: calc(100vh - 70px);
  z-index: 10;
  overflow: hidden;
  ${dynamicStyle};
 
}

#loader-bigger{
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 182px;
    height: 182px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #953781;
    animation: spin 2s linear infinite;
    z-index: 11;
    &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #f25951;
        animation: spin-reverse .6s linear infinite;
      }
     
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #67cbdb;
  animation: spin 2s linear infinite;
  z-index: 11;
  
 
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #96c93e;
    animation: spin-reverse .6s linear infinite;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ffcb31;
    animation: spin 1s linear infinite;
  }
}


@keyframes spin {
  0% { 
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% { 
    transform :rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

`;