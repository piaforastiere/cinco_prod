import React from 'react'
import { ListContainer, Item, ListNotes } from '../../ui/Resume';
import { useSelector } from 'react-redux';

import { useTranslation } from "react-i18next";

const List = () => {

    const { t } = useTranslation();
    
    const questions = useSelector(store => store.resume.questions)
    const notes = useSelector(store => store.resume.notes)
    
    
    return (
        <ListContainer>
                            
                            <div className="row d-flex justify-content-between w-100" style={{ borderBottom: '0.5px solid #b7b6b6' }} id="title" >
                                <div className="col-md-8 col-sm-12" >
                                    <div className="title">
                                        {t('selected_cards')}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="title">
                                     {t('notes')}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row d-flex" >
                                <div className="col-md-8 col-sm-12 ps-5 " style={{ borderRight: '0.5px solid #b7b6b6'}} id="questions" >
                                <Item>
                                    { questions.length > 0 &&
                                        questions.map((item, i) =>(
                                            <div key={i}>
                                                <p className="card-number" > {t('card')} {i+1} - 
                                                 {item.title}
                                                </p>
                                               
                                                <p className="card-question">{item.question} </p>
                                            </div>
                                        ))
                                        }
                                </Item>
                                </div>
                                <div className="col-md-4 col-sm-12" id="notes" style={{ paddingRight: 0}}>
                                    
                                <ListNotes>
                                    {   notes.length > 0 &&
                                    notes.map((item, i) => (
                                        <li className="text-break" key={i}> { item.player && (item.player + " : ")} {item.note} </li>
                                    )) 
                                    }
                                </ListNotes>
                                </div>
                                
                            </div>
                            
                        </ListContainer>
    )
}

export default List
