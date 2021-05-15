import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { CardContainer, FlipCard, FlipCardInner, FlipCardFront, FlipCardBack } from '../../ui/game/Cards';

import { database, db } from '../../../firebase';
import { useTranslation } from "react-i18next";

// import audioFlip from '../../../assets/sounds/flip.mp3'
// var audio = new Audio(audioFlip)
// audio.play()
const Card = ({array, card}) => {

    const { i18n } = useTranslation();

    const playerName = useSelector(store => store.games.playerName)
    const password = useSelector(store => store.games.password)
    const questionsDB = useSelector(store => store.games.questions)

    const dataS = []
    const data = []
    
    
    function cardSet(data){
        
        if (data.length > 0) {
            const results = data.filter(({ value: id1 }) => !dataS.some(({ value: id2 }) => id2 === id1));
            
            
            if (results.length > 0) {
                
                results.forEach(item =>{
                    
                    const sorpValue = document.querySelector("#"+item.class);
                    
                    if (item.display === "no") {
                        document.querySelector("#"+item.class+ " #inner").classList.remove('active')
                        sorpValue.classList.add('close')
                        sorpValue.classList.remove('open')
                    } else {
                        sorpValue.classList.remove('close')
                        sorpValue.classList.add('open')
                        
                        const text = item.question;
                        document.querySelector( "#"+item.class+" .text").innerHTML = text
                        document.querySelector("#"+item.class).setAttribute('data', item.id)
    
                        document.querySelector("#"+item.class+ " #inner").classList.add('active')
                    }
                })
            }
        }
    }
    
    useEffect(() => {
            
        var ref = database.ref(password+"/questions");
        ref.on("child_added",function(snap) {
    
        var itemVal = snap.val();
                
        data.push(itemVal);
        
        
        cardSet(data)
        
        })

        ref.on("child_changed",function(snap) {
    
            var itemVal = snap.val();
                
            data.push(itemVal);
            
            cardSet(data)
            
        })
        
},[questionsDB, password])



    
const handleClick = async(id, _array) => {

    const isClose = document.querySelector("#"+id).classList.contains('close')
    
    
    if (isClose === true) {

        const question = _array[Math.floor(Math.random() * + _array.length)]
        
        const newQuestion = {
            "question" : question.question,
            "class" : question.class,
            "title" : question.title,
            "name" : playerName,
            "id" : question.id,
            "display" : "yes",
            "timestamp": Date.now()
        }
     
        await database.ref(password+'/questions').child(question.id).set(newQuestion);
       
       
        await db.collection('new-games').doc(password).collection('questions').doc(question.id).set(newQuestion)
        

    } else {
        const attr = document.querySelector('#'+id).getAttribute('data')
        
        await database.ref(password+'/questions').child(attr).update({display: 'no'});
   
        await db.collection('new-games').doc(password).collection('questions').doc(attr).update({
            display: 'no'
        })
        
    }

}
    
    

    
    
    return (
        <CardContainer className="cards close"  id={card.id} onClick={() => handleClick(card.id, array)} >
             <FlipCard style={{top: card.styles +')'}}>
                 <FlipCardInner id="inner">
                     <FlipCardFront >
                     <div className={"image-back " + i18n.language} id={card.id}></div>
                     </FlipCardFront>
                     <FlipCardBack>
                     <div className={"image-front " + i18n.language} id={card.id}>
                        <p className="text"></p>
                     </div>
                     </FlipCardBack>
                 </FlipCardInner>
             </FlipCard>
        </CardContainer>
    )
}

export default Card
