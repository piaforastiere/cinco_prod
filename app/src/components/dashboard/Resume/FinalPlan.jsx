import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BoardContainer } from '../../ui/game/Boardgame';

import backboard from '../../../assets/img/backboard.jpg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Close, FinalContainer, CardContainer, Board } from '../../ui/Resume';

import { useTranslation } from "react-i18next";

const FinalPlan = ({close, setClose, innerW, innerH}) => {

    const { i18n } = useTranslation();

    const positions = useSelector(store => store.resume.positions)
    const window = useSelector(store => store.resume.window)
    
  
    const [ loading, setLoading ] = useState(true)
    const [ totalH, setTotalH ] = useState(0)
    const [ totalW, setTotalW ] = useState(0)
    
    
    function percentage(partialValue, totalValue) {
        const diff = totalValue / Math.floor(partialValue) 
        const total = Math.floor(partialValue) * diff
        
        return total
     }

     function cardMove (value, partial, inner) {
         const cardMove = (inner * value) / partial 
         return cardMove
     }

     useEffect(() => {

        setTotalW(percentage(Number(window[0].w), Number(innerW) ))
        setTotalH(percentage(Number(window[0].h), Number(innerH) ))
        
        setLoading(false)
       



     }, [innerW, window, innerH])
    
    

    return !loading && totalH !== 0 && totalW !== 0 && (
           <FinalContainer className={ close && 'visible'} id={totalW} w={totalW} h={totalH} >
            <BoardContainer >
                <Close onClick={() => setClose(!close)} > 
                    <IoIosCloseCircleOutline />
                </Close>
                <Board >
                    <img src={backboard} alt="your five powers" />
                    {
                        positions.map( (card, i) => {
                           return <CardContainer id={card.card.class} 
                                                 className={"cards final open "+ i18n.language}  
                                                 key={i} 
                                                 cardY={cardMove(card.y, window[0].w, innerW )} 
                                                 cardX={cardMove(card.x, window[0].h, innerH )} >
                                    {card.card.question}
                                </CardContainer>
                        })
                    }
                </Board>
            </BoardContainer>
        </FinalContainer>
    )
}

export default FinalPlan
