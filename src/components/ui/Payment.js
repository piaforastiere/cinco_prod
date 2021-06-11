import styled from '@emotion/styled';
import bg from '../../assets/img/back-dash.jpeg'
import freePlan from '../../assets/img/plans/free_plan.png'
import monthPlan from '../../assets/img/plans/month_plan.png'
import annualPlan from '../../assets/img/plans/annual_plan.png'

export const ContainerPayment = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
    height: calc(100vh - 80px);
    padding: 40px;
    position: relative;

    .extra{
        background-color: rgba(33, 33, 33, 0.5);
        position: absolute;
        height: 280px;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 0;
    }

    #cancel_button{
        width: 500px;
        margin: auto;

        p{
            color: #ffffff;
            font-size: 16px;
            text-transform: uppercase;
            text-align: center;
            margin-top: 20px;
        }
        button{
            width: 100%;
            height: 45px;
            font-weight: 500;
            letter-spacing: 2;
        }
    }
    
`

export const Title = styled.div`
    position: relative;
    text-align: center;
    height: 240px;
    color: #ffffff;
    padding-top: 20px;
    h2{
        font-size: 40px;
        margin-bottom: 20px;
    }
    p{
        font-size: 18px;
    }
`

export const PlansContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -60px;
    padding: 0 80px;

`

export const Plan = styled.div`
    cursor: pointer;
    border-radius: 30px;
    width: 32%;
    z-index: 1;
    /* overflow: hidden; */
    background-color: #fff;

    &.block{
        cursor: auto;
    }

    .background{
        height: 200px;
        width: 100%;
        display: flex;
        color: #f2f2f2;
        /* background-color: orange; */
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        position: relative;
        /* padding-top: 25px; */
        &.free{
            background-image: url(${freePlan});
        }
        &.month{
            background-image: url(${monthPlan});
        }
        &.annual{
            background-image: url(${annualPlan});
        }
        .icon{
           font-size: 70px;
           margin-bottom: 10px;
           font-weight: 400;
           position: relative;
           z-index: 2;
           position: relative;
           svg{
               position: relative;
           }
           .span{
                color: #262626;
                position: absolute;
                top: 10px;
                left: 41%;
                opacity: 0.5;
           }
        }
        .name{
            font-size: 40px;
            margin-bottom: 10px;
            font-weight: 600;
            text-shadow: 2px 2px 2px #262626;
            text-transform: uppercase;
        }
        .saved{
            position: absolute;
            top: -20px;
            right: -20px;
            background-color: #953881;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;

            p{
                margin: 0;
                font-weight: 500;
                font-size: 18px;
            }
        }
    }
    .row{
        padding: 30px 40px;
        
    }
    .price{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        p{
            font-size: 28px;
            margin: 0;
            
            svg{
                margin-left: -5px;
            }
            span{
                font-size: 18px;
                position: absolute;
                margin-left: 3px;
            }
        }

        .line{
            height: 60px;
            width: 2px;
            margin-left: 35px;
            margin-right: 10px;
            background-color: #212529;
        }
        .time{
            font-size: 20px;
            text-transform: uppercase;
            width: 50px;
        }
    }

    .description{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        align-items: center;
        ul{
            margin-left: 10px;
            li{
                margin-bottom: 10px;
            }
        }
    }

    &.block{
        &:hover{
            transform: scale(1);
            z-index: 2;
            -webkit-box-shadow: 0px 0px 21px 1px rgba(89,89,89,0.56); 
            box-shadow: 0px 0px 21px 1px rgba(89,89,89,0.56);
        }
    }

    &:hover{
        transform: scale(1.2);
        z-index: 2;
        -webkit-box-shadow: 0px 0px 21px 1px rgba(89,89,89,0.56); 
        box-shadow: 0px 0px 21px 1px rgba(89,89,89,0.56);
    }

`

export const FormContainer = styled.div`
    border-radius: 30px;
    -webkit-box-shadow: 0px 8px 23px 14px rgba(0,0,0,0.86); 
    box-shadow: 0px 8px 23px 14px rgba(0,0,0,0.86);
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
    width: 80%;
    margin: auto;
    margin-top: -80px;
    position: relative;
    

    label{
        margin-bottom: 5px;
    }
    input{
        margin: auto;
        margin-bottom: 20px;
        cursor: auto;

        &:focus {
            outline: none;
            border-color: inherit;
            -webkit-box-shadow: none;
            box-shadow: none;
            
        }
    }
    
    .button{
        width: 400px;
        margin: auto;
        margin-top: 30px;

        
    }

    .no-available{
        width: 90%;
        color: red;
        text-align: center;
        font-size: 18px;
        margin: auto;
    }
`
