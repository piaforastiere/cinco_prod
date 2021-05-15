import React, { useEffect, useState } from 'react'
import { ResumeContainer, CardContainer } from '../../ui/game/Boardgame';

import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';

import Draggable from 'react-draggable';

const Resume = () => {

  
  
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

  const { i18n } = useTranslation();

    useEffect(() => {
        var dragItem = document.querySelectorAll(".cards");
        var container = document.querySelector("#container");
    
        dragItem.forEach(item => {
          
          
            var active = false;
            var currentX;
            var currentY;
            var initialX;
            var initialY;
            var xOffset = 0;
            var yOffset = 0;
        
            container.addEventListener("touchstart", dragStart, false);
            container.addEventListener("touchend", dragEnd, false);
            container.addEventListener("touchmove", drag, false);
        
            container.addEventListener("mousedown", dragStart, false);
            container.addEventListener("mouseup", dragEnd, false);
            container.addEventListener("mousemove", drag, false);
    
        function dragStart(e) {
          if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
          } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            
          }
    
          if (e.target === item) {
            active = true;
          }
        }
    
        function dragEnd(e) {
          initialX = currentX;
          initialY = currentY;
          
          active = false;
          
          
        }
    
        function drag(e) {
          if (active) {
          
            e.preventDefault();
          
            if (e.type === "touchmove") {
              currentX = e.touches[0].clientX - initialX;
              currentY = e.touches[0].clientY - initialY;
            } else {
              currentX = e.clientX - initialX;
              currentY = e.clientY - initialY;
            }
    
            xOffset = currentX;
            yOffset = currentY;
    
            setTranslate(currentX, currentY, item);
          }
        }
    
        function setTranslate(xPos, yPos, el) {
          el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }
        })
       },[])

       
    return (
        <ResumeContainer>
            <div id="outerContainer">
            <div id="container">
            {
                selectedQuestions.map((card, i) => {
                    
                  return <Draggable key={i} >
                            <CardContainer className={"cards open "+ i18n.language}  id={card.class} >
                                {card.question}
                            </CardContainer>
                        </Draggable>
                        // <CardContainer className={"cards open "+ i18n.language}  id={card.class} key={i} style={ card.class === 'decision' || card.class === 'sorprise' ? {zIndex: 1} : {zIndex: 2}} >
                        // {card.question}
                        // </CardContainer>
                        
                })
            }
            </div>
        </div>
        
        </ResumeContainer>
    )
}

export default Resume
