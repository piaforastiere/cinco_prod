import React, { useState, useEffect } from 'react'
import { ResumeMasterContainer, CardContainer } from '../../ui/game/Boardgame';

import Draggable from 'react-draggable';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';

const ResumeMaster = ({ positions, setPositions}) => {

    
    const { i18n } = useTranslation();

    const password = useSelector(store => store.games.password)

    const [ selectedQuestions, setSelectedQuestions ] = useState([])
    
    const streamMasterItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('selected-questions')
            .orderBy('timestamp', 'asc')
            .onSnapshot(observer);
    };

    useEffect(() => {
        
        const unsubscribeMasterSelections = streamMasterItems(password, {
            next: querySnapshot => {
                const updatedMasterItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setSelectedQuestions(updatedMasterItems);
                
                
        },
        
        });
        
        return unsubscribeMasterSelections;
    }, [password, setSelectedQuestions]);

    const trackPos = async(data, card) => {
        const objIndex = positions.findIndex((obj => obj.id === card.id));
        
        const element = document.getElementById(card.class)
            
        if (objIndex !== -1) {
            positions[objIndex].x = element.getBoundingClientRect().top
            positions[objIndex].y = element.getBoundingClientRect().left
            positions[objIndex].card = card
        } else {
            
            setPositions([...positions, { x: data.x, y: data.y, id: card.id, card }]);
        }
        
     };

    return (
        <ResumeMasterContainer>
            {
                selectedQuestions.map((card, i) => {
                    return <Draggable onDrag={(e, data) => trackPos(data, card)} key={i} >
                        <CardContainer className={"cards open "+ i18n.language}  id={card.class} style={ card.class === 'decision' || card.class === 'sorprise' ? {zIndex: 1} : {zIndex: 2}} >
                            {card.question}
                        </CardContainer>
                    </Draggable>
                })
            }
            
        </ResumeMasterContainer>
    )
}

export default ResumeMaster
