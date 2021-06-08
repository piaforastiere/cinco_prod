import React, { useState, useEffect } from 'react'
import { ResumeMasterContainer, CardContainer } from '../../ui/game/Boardgame'

import backboard from '../../../assets/img/backboard.jpg'
import { useTranslation } from "react-i18next";
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';

const FinalBoard = ({masterBoard, setMasterBoard, innerW, innerH}) => {

    
    const { i18n } = useTranslation();
    
    const password = useSelector(store => store.games.password)
    
    const [ window, setWindow ] = useState(null)
    const [ positions, setPositions ] = useState([])
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

     const streamPositionsItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('positions')
            .onSnapshot(observer);
    };

     useEffect(() => {
        const unsubscribePositions = streamPositionsItems(password, {
            next: querySnapshot => {
                const updatedPositionsItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setMasterBoard(updatedPositionsItems);
           },
            
        });
        return unsubscribePositions
     }, [setMasterBoard, password])

     useEffect(() => {
        positions.length = 0
        if (masterBoard !== null && masterBoard.length > 0) {
            masterBoard.forEach(item => {
                if (item.id === "window") {
                    setTotalW(percentage(item.w, innerW ))
                    setTotalH(percentage(item.h, innerH ))
                    setWindow(item)
                } else {
                    
                    positions.push(item)
                }
            })
            document.getElementById('final-bg').style.height = totalH+'px'
    
            document.getElementById('final-bg').style.width = totalW+'px'
        }
        
        
     }, [innerW, window, innerH, masterBoard])


    
    return positions !== null && positions.length > 6 && (
        <ResumeMasterContainer className="final" w={totalW} h={totalH}>
            <img src={backboard} alt="your five powers" />
            {   
                positions.map((card, i) => {
                    return <CardContainer id={card.card.class} 
                                          className={"cards final open "+ i18n.language}
                                          key={i} 
                                          cardY={cardMove(card.y, window.w, innerW )} 
                                          cardX={cardMove(card.x, window.h, innerH )} >
                            {card.card.question}
                           </CardContainer>
                })
            }
            
        </ResumeMasterContainer>
       
    )
}

export default FinalBoard
