import React, { useEffect } from 'react'
import { PayPalButton } from "react-paypal-button-v2";

const PayPalBtnAn = ({amount, currency}) => {
    const paypalKey = "ASaLtDMhmfcijj7X4V78XDa4RmOBDLqRQUir5QsNE7z6uPOBxLMoPNry-tarSEZirfbkAYudTwXgaQUu"

    const createSubscription = (data, actions) => {
        return actions.subscription.create({
        'plan_id': "P-5JF92675B7261882CMCXNPKQ",
        });
    };
    const paypalOnError = (err) => {
        console.log("Error")
    }
    const paypalOnApprove = (data, detail) => {
        // call the backend api to store transaction details
        console.log("Payapl approved")
        console.log(data.subscriptionID)
    };

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '0.01'
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
              });
            }
          }).render('#paypal-button-container');
    }, [])

    return(
        <PayPalButton
            amount={amount}
            currency={currency}
            createSubscription={(data, details) => createSubscription(data, details)}
            onApprove={(data, details) => paypalOnApprove(data, details)}
            onError={(err) => paypalOnError(err)}
            catchError={(err) => paypalOnError(err)}
            onCancel={(err) => paypalOnError(err)}
            options={{
                clientId: paypalKey,
                vault:true
            }}
            style={{
                shape: 'pill',
                color: 'silver',
                layout: 'vertical',
                label: 'paypal'
            }}
        />
    )
}

export default PayPalBtnAn
