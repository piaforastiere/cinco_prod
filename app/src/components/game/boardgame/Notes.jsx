import React, { useState, useEffect } from 'react'
import { NoteContainer } from '../../ui/game/Boardgame'
import { useSelector } from 'react-redux';
import { db, database } from '../../../firebase';

import { FiSend } from "react-icons/fi";

import greyChat from '../../../assets/img/grey-chat.png'
import blueChat from '../../../assets/img/blue-chat.png'


import { useTranslation } from "react-i18next";

const Notes = ({noteData}) => {
    
    const { t } = useTranslation();
    const password = useSelector(store => store.games.password)
    const playerName = useSelector(store => store.games.playerName)
  
    const [ note, setNote ] = useState('')
    const data = []
    
    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
          
          handleSubmit(e)
          setNote('')
        }

    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (note.length > 0) {
            
            await database.ref(password+'/notes').push().set({
                "note" : note,
                "player": playerName,
                "timestamp": Date.now()
            });

            
            await db.collection('new-games').doc(password).collection('notes').add({
                "note" : note,
                "player": playerName,
                "timestamp": Date.now()
            })
        }

        setNote('')
        
    }
    
    
    


useEffect(() => {
    const messages = document.getElementById('list');
    
    if (data.length > 0) {
        const lastid = 'note-'+ (noteData.length - 1)
    
        const messagesid = document.getElementById(lastid);  
        messages.scrollTop = messagesid.offsetTop;
    }

    
}, [data, noteData])
    
    

    return (
        <NoteContainer>
            <form onSubmit={handleSubmit} >
                <textarea placeholder={t('note')} onChange={e => setNote(e.target.value)} onKeyPress={handleUserKeyPress} value={note} />
                    <button className="btn rounded-circle d-flex justify-content-center align-items-end" type="submit" ><FiSend /></button>
                </form>
            
            <div className="list" id="list" >
            {
                noteData.length > 0 &&
                noteData.map((item, i) => {
                    if (item.player === playerName) {
                        return <div className="text-break player" key={i} id={`note-${i}`} > 
                                {item.note} 
                                <img src={blueChat} className="chat-tik"  alt="your five powers" />
                               </div>
                       
                    } else {
                       return <div className="text-break " key={i} id={`note-${i}`} > 
                                <span>{item.player}</span> <br/> 
                                {item.note} 
                                <img src={greyChat} className="chat-tik"  alt="your five powers"/>
                              </div>
                    }
                    
                })
            }
            </div>
        </NoteContainer>
    )
}

export default Notes
