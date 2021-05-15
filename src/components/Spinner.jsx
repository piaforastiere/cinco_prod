import React from 'react'
import { LoaderContainer } from './ui/Spinner';




const Spinner = ({background}) => {
    
    
    return (
        <LoaderContainer bg={background} >
            <div id="loader-wrapper">
                <div id="loader-bigger">
                    <div id="loader"></div>
                </div>
            </div>
        </LoaderContainer>
    )
}

export default Spinner
