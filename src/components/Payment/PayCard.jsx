import React from 'react'
import PayPalBtn from './PayPalBtnMon'
import { AiOutlineHistory, AiOutlineCarryOut } from "react-icons/ai";

const PayCard = ({paypalSubscribeMonthly, paypalOnError, paypalOnApprove}) => {

    return (
        <div>
                    <div>
                        <h1>u$ 9.99</h1>
                        <p>Monthly plan</p>
                    </div>
                    <div>
                        <AiOutlineCarryOut />
                    </div>
                    <div>
                        <ul>
                            <li>Monthly payment</li>
                            <li>single player</li>
                            <li>multiple players</li>
                            <li>multiple players</li>
                            <li>multiple players</li>
                            <li>Anualy: u$ 119,88</li>
                        </ul>
                    </div>
                    <PayPalBtn
                        amount = "9.99"
                        currency = "USD"
                        createSubscription={paypalSubscribeMonthly}
                        onApprove={paypalOnApprove}
                        catchError={paypalOnError}
                        onError={paypalOnError}
                        onCancel={paypalOnError}
                    />
        </div>
    )
}

export default PayCard
