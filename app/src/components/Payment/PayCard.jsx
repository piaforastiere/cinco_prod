import React, { useState, useEffect } from 'react'
import PayPalBtn from './PayPalBtnMon'
import { AiOutlineHistory, AiOutlineCarryOut } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { getClientToken, pay } from '../CoreFunctions';

import DropIn from 'braintree-web-drop-in-react'

const PayCard = ({paypalSubscribeMonthly, paypalOnError, paypalOnApprove}) => {

    // const {clientToken} = useSelector(store => store.user.user)
    
    // const [ data, setData ] = useState({
    //     loading: false,
    //     success: false,
    //     clientToken: null,
    //     error : null,
    //     instance: {},
    //     address:''
    // })
    
    // const getToken = () => {
        
    //     getClientToken().then(res =>{
    //         if (res.error) {
    //             setData({...data, error: res.error})
    //         } else {
    //             setData({...data, clientToken: res.clientToken})
    //         }
    //    } )
        
    // }
    // useEffect(() => {

    //     getToken()

    // }, [])


    const handlePayment = () => {
        // setData({...data, loading: true})
        // //send the nonce = data.instance.requestPaymentMethod() to server
        // let nonce;
        // let getNonce = data.instance.requestPaymentMethod().then( res => {
        //     console.log(res);
        //     nonce = res.nonce
        //     console.log('send to back', nonce);
        
        // }).catch( error => {
        //     console.log(error);
        //     setData({...data, error: error.message})
        // })
        
    }
    

    return (
      
                <div>
                    <div id="paypal-button" onClick={() => handlePayment()} >SUBSCRIBE</div>
                    {/* {
                        data.error !== null && (
                            <div className="alert alert-danger">
                                {data.error}
                            </div>
                        )
                    } */}
                {/* {
                   data.clientToken !== null && (
                    <div >  
                        <DropIn
                            options={{ authorization: data.clientToken,
                                       paypal: {
                                           flow: "vault"
                                       } }}
                            onInstance={(instance) => (data.instance = instance)}
                        />
                        <div className="btn-success" onClick={() => handlePayment()} >subscribe</div>
                    </ div>
               )} */}
                </div>
    )
}

export default PayCard
