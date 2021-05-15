import styled from '@emotion/styled';



export const ContainerHome = styled.div`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;

    .content{
        flex-wrap: wrap;
        flex-direction: column;
        h1{
            font-size: 150px;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 50px;

            @media screen and (max-width: 600px) {
                font-size: 80px;
            }
        }

        a{
            text-decoration: none;
            text-align: center;
        }
        .button{
            background-color: #131313;
            color: #fff;
            text-transform: uppercase;
            font-size: 40px;
            font-weight: 500;
            width: ${props => props.lang === "en" ? '230px' : '280px'};
            padding: 20px 30px;
            border-radius: 30px;
            margin: auto;
            text-align: center;
        }

        .icon{
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: 60px;
            position: absolute;
            bottom: 30px;
        }
    }
`