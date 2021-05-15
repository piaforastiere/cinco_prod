import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase';
import { useParams } from 'react-router-dom';
import { StatisticsContainer } from '../../ui/Statistics';
import { useSelector } from 'react-redux';

import { useTranslation } from "react-i18next";

const Players = () => {

    let { id } = useParams();
    const { t } = useTranslation();

    const gameInfo  = useSelector(store => store.resume.gameInfo)

    const [ players, setPlayers ] = useState([])

    

    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('players')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(id, {
            next: querySnapshot => {
                const updatedPlayersItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setPlayers(updatedPlayersItems);
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [id ]);

    return players !== null && (
        <StatisticsContainer className="col-lg-7 col-sm-12 mt-3 d-flex flex-column">

            <div className="row ">
                <div className="title mb-3" style={{paddingBottom: 0}} >
                    Master: <span style={{paddingLeft: 0, fontSize: '18px', fontWeight: '500'}} >{gameInfo.masterName} </span>
                </div>
            </div>
            
            {
                players.length > 0 && (
                    <div className="row mt-3">
                        <div className="participants-list mb-3" >
                            
                            <p className="title" style={{ background: 'transparent'}}>
                                {t('participants')}: 
                            </p>
                            
                            {
                                players.map((item, i ) => {
                                    return <p key={i} className=""> {item.name} <span>-</span> </p>
                                    
                                }) 
                            }
                        </div>
                    </div>
                )
            }
            
        </StatisticsContainer>
    )
}

export default Players
