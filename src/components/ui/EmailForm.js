import styled from '@emotion/styled';




export const ContainerCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 10vh;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    width: 50%;
    margin: auto; 
    position: relative;
    justify-content: center;
    border-radius: 20px;
    padding-top: 40px;

    form{
        padding: 40px;
        padding-top: 20px;

        input{
            text-align: center
        }
    }
    
`
export const Trophy = styled.img`
    display: block;
    margin: 0 auto 40px;
    width: 40%;
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
    font-size: 20px;
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    width: 100%;
    background: #FFF;
    padding: 30px 0;
    text-align: center;
    background: #82aabb;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
 `
 export const Button = styled.button`
    
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
    
    
    color: #646567;
    
    border-radius: 1rem;
    margin-bottom: 10px;
    }
    
    &:hover, &:focus {
    outline: 0;
    }
    &:active {
    outline: 0;
    }

   
`