import React, {useEffect} from 'react'
import { Question, ShowQuestionsContainer } from '../../ui/game/Boardgame'
import { useDispatch, useSelector } from 'react-redux'
import { changeProgressAction } from '../../../redux/gamesDukes'
import { database, db } from '../../../firebase'

import { useTranslation } from "react-i18next";


const QuestionList = ({setSelectedQuestions, selectedQuestions, questionList, handleAdd, handleRemove}) => {

    const dispatch = useDispatch()

    const playerType = useSelector(store => store.games.gameData)
    const password = useSelector(store => store.games.password)

    const { t } = useTranslation();
    
    const data = []
    
    const changeProgress = () => {

        dispatch(changeProgressAction('finished-plan'))
        
    }

    const votes = (_array) => {
        if (_array.length > 0) {
            _array.forEach( item => {
                const divCount = document.querySelector("#"+item.id+" .counter")
                divCount.innerHTML = item.counter
                if (item.counter > 0) {
                  divCount.classList.add('active')
                } else {
                  divCount.classList.remove('active')  
                }
            } )
        }
    }
    useEffect(() => {
            
        var ref = database.ref(password+"/selected-questions-counter");
        ref.on("child_added",function(snap) {
            var itemVal = snap.val();  
            data.push(itemVal);
            votes(data)
        
        })

        ref.on("child_changed",function(snap) {
            var itemVal = snap.val();   
            data.push(itemVal);
            votes(data)
            
        })
        isSelected()
    },[data, password])

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
                setSelectedQuestions(updatedMasterItems.reverse());
                
        },
        
        });
        isSelected()
        return unsubscribeMasterSelections;
    }, [password, setSelectedQuestions]);

    const isSelected = () => {

        if (playerType.playerType === 'master') {
            document.querySelectorAll("#all-cards .faq-list").forEach(item => {
                item.classList.remove('test')
            });
            
            selectedQuestions.forEach(card => 
                
                document.querySelector('#all-cards #'+card.id).classList.add('test')
            )
        }
        
    }

    return (
        <div className="container" style={{ zIndex: 100}}>
                    <div className="row d-flex justify-content-center mb-5">
                    <div className="alert alert-secondary text-center " role="alert">
                        <h3>
                            {t('action_plan')} <br/> 
                        </h3>
                        <h5>
                            {t('choose_cards')} <br/> {t('amout_cards')}
                        </h5>
                    </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                    <div className="col-lg-5 col-sm-12 bg-light p-3 rounded ">
                        <h4> {t('select_cards')} </h4>
                        <ShowQuestionsContainer id="all-cards">
                            {
                                questionList.length > 0 &&
                                questionList.map((item, i) => {
                                    return <Question className="faq-list w-100 active" key={i} id={item.id} onClick={() => handleAdd(item)}>
                                        <div className="header w-100">
                                            <div className={item.class + " color"}></div>
                                            <p> {item.title }  
                                            </p>
                                            <div className="counter"></div>
                                        </div>
                                        <div className="question">
                                            {item.question}
                                        </div>
                                </Question>
                                })
                            }
                        </ShowQuestionsContainer>
                        
                                           
                    </div>
                    
                    <div className="col-lg-5 col-sm-12 bg-light p-3 rounded ">
                        <h4>{t('selected_cards')}  {selectedQuestions.length} </h4>
                        <ShowQuestionsContainer>
                        {
                            selectedQuestions.length > 0 &&
                            selectedQuestions.map((item, i) => {
                                return <Question className="faq-list w-100 active remove" playerType={playerType.playerType}  key={i} id={i} onClick={() => {playerType.playerType === 'master' && handleRemove(item.id)}}>
                                    <div className="header w-100">
                                            <div className={item.class + " color"}></div>
                                            <p> {item.title }  </p>
                                        </div>
                                        <div className="question">
                                            {item.question}
                                        </div>
                                </Question>
                            } )
                        }
                        </ShowQuestionsContainer>
                    </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                            { playerType.playerType !== null && playerType.playerType === 'master' && 
                            <button className={selectedQuestions.length === 7 ? "btn btn-dark btn-lg btn-block mt-2 rounded-pill w-50 text-uppercase" : "btn btn-light btn-lg btn-block mt-2 rounded-pill w-50 text-uppercase"} 
                                    onClick={() => changeProgress()} 
                                    disabled={selectedQuestions.length === 7 ? false : true}>
                                {t('place_cards')}
                            </button>
                            }
                        
                    </div>
                </div>
    )
}

export default QuestionList
