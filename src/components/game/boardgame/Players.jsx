import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { db } from '../../../firebase';
import { PlayersContainer, PlayersDisplay } from '../../ui/game/Boardgame';

import { BsFillPersonFill, BsX } from "react-icons/bs";
import newPlayer from '../../../assets/sounds/zapsplat_multimedia_pop_up_pop_001_63250.mp3'


const Players = () => {

    const password = useSelector(store => store.games.password)

    const [ players, setPlayers ] = useState(null)
    const [ show, setShow ] = useState(false)

    var audio = new Audio(newPlayer)

    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('players')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(password, {
            next: querySnapshot => {
                const updatedPlayers = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setPlayers(updatedPlayers);
                audio.play()
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [password, setPlayers]);
    
    const handleClick = () => {
        setShow(!show)
    }
    

    return players !== null && (
        <PlayersContainer bottom >
            <div className="button dark" onClick={handleClick}>
                    <BsFillPersonFill/>
                <p>{players.length}</p>
            </div>
            <PlayersDisplay bottom className={ show ? 'active' : ''}>
                <ul>
                    {
                        players.map((item, i) => {
                            return <li key={i} >
                                        {item.name} 
                                    </li>
                        })
                    }
                </ul>
                <div className="close" onClick={handleClick}><BsX /></div>
            </PlayersDisplay>
            
        </PlayersContainer>
    )
}

export default Players
