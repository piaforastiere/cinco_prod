import React, { useState, useEffect } from 'react'

import Spinner from '../../Spinner'
import { BoardContainer, Board } from '../../ui/game/Boardgame'


import { db, database } from '../../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import QuestionList from './QuestionList'
import Resume from './Resume'
import { withRouter, Link } from 'react-router-dom'

import backboard from '../../../assets/img/backboard.jpg'
import backboardES from '../../../assets/img/es-backboard.jpg'
import gameOver from '../../../assets/img/Game-Over.png'
import { changeProgressAction } from '../../../redux/gamesDukes'
import ResumeMaster from './ResumeMaster'
import FinalBoard from './FinalBoard'

import { IoChevronBackCircleOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import InstructionsAP from './instructions/InstructionsAP'

const Backboard = () => {

    const distpatch = useDispatch()

    const { t, i18n } = useTranslation();

    const masterEmail = useSelector(store => store.games.gameData.masterEmail)
    
    const password = useSelector(store => store.games.password)
    const playerType = useSelector(store => store.games.gameData)

    const [ questionList, setQuestionList ] = useState([])
    const [ selectedQuestions, setSelectedQuestions ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ progressDB, setProgressDB ] = useState(null)
    const [ positions, setPositions] = useState([]);
    const [ masterBoard, setMasterBoard ] = useState(null)
    const [ share, setShare ] = useState(false)
    
    console.log(share);
    
    
    let intViewportWidth = window.innerWidth;
    let intViewportHeight= window.innerHeight;

    useEffect(() => {
        document.querySelector('.navbar').style.display = "none"
        document.querySelector('.LanguageSelector').style.display = "none"
    },[])
    
    useEffect(() => {
        if (password !== null) {
            
            const getQuestions = async() => {
                await db.collection('new-games').doc(password)
                .onSnapshot(function(doc) {
                    setProgressDB(doc.data().progress)
                });
            
                
                const data = await db.collection('new-games').doc(password).collection('questions').orderBy('timestamp', 'desc').get()
                const updatedQuestionsItems = data.docs.map(docSnapshot => docSnapshot.data());
                setQuestionList(updatedQuestionsItems);
                
                setLoading(false)
            }
            getQuestions()
            
        }

        
    }, [password, playerType])

    const streamShare = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .onSnapshot(observer);
    };
    
    
    
    useEffect(() => {
      
        const unsubscribeShare = streamShare(password, {
            next: querySnapshot => {
                const updatedShare = querySnapshot.data().share;
                setShare(updatedShare);
           },
            
        });
        return unsubscribeShare;
    }, [password]);
        
    
        const handleAdd = async(_item) => {
           
            const item = {
                "question" : _item.question,
                "class" : _item.class,
                "title" : _item.title,
                "name" : _item.name,
                "id" : _item.id,
                "timestamp": Date.now()
            }
            
                if (playerType.playerType === 'master') {
                    if (selectedQuestions.length < 7) {
                        const select = await db.collection('new-games').doc(password).collection('selected-questions').doc(_item.id).get()
                        
                        if (!select.exists) {
                            db.collection('new-games').doc(password).collection('selected-questions').doc(_item.id).set(item)
                        }
                        
                    }   
                } else {
                    const divCounter = document.querySelector("#"+item.id+" .counter").classList.contains('active')
                    await database.ref(password+'/selected-questions-counter').child(_item.id).get().then(function(snapshot) {
                        if (snapshot.exists()) {
                            if(divCounter){
                                const count = snapshot.val().counter - 1
                                database.ref(password+'/selected-questions-counter').child(_item.id).update({"counter": count});
                            } else {
                                const count = snapshot.val().counter + 1
                                database.ref(password+'/selected-questions-counter').child(_item.id).update({"counter": count});
                            }
                        }
                        else {
                            database.ref(password+'/selected-questions-counter').child(_item.id).set({"counter" : 1, "id" : _item.id});
                        }
                      }).catch(function(error) {
                        console.error(error);
                      });
                      
                      
                    
                }
           
            
            
        }
    
        const handleRemove = async(_id) => {
            await db.collection('new-games').doc(password).collection('selected-questions').doc(_id).delete()
        }
        
        const showBoard = async() => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            
            
            db.collection('new-games').doc(password).collection('positions').doc('window').set({id: 'window', w, h})
            positions.forEach(card => {
                 db.collection('new-games').doc(password).collection('positions').doc(card.id).set(card)
            });
            db.collection('new-games').doc(password).update({ share : true })
            // setShare(true)
            
        }
        
        const finishedSession = async() => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            
            
            db.collection('new-games').doc(password).collection('positions').doc('window').set({id: 'window', w, h})
            positions.forEach(card => {
                 db.collection('new-games').doc(password).collection('positions').doc(card.id).set(card)
            }); 
            distpatch(changeProgressAction('finished'))
        }
    
        const backToList = () => {
            setMasterBoard(null)
            distpatch(changeProgressAction('action-plan'))
            db.collection('new-games').doc(password).update({ share : false })
        }
    
        const bgBoard = {
            backgroundImage: "url("+backboard+")"
        }
        const bgBoardES = {
            backgroundImage: "url("+backboardES+")"
        }

        
        
    
    return !loading ? (
        <div className="d-flex justify-content-center w-100 h-100" >
            <BoardContainer>
                <Board style={i18n.language === "en" ? bgBoard : bgBoardES} id="final-bg">
                    {
                        progressDB !== 'finished' && <InstructionsAP />
                    }
                    
                    {   
                        progressDB === 'finished-plan' && (
                            playerType.playerType !== null && playerType.playerType === 'master' && (
                                    <div className="d-flex justify-content-around position-absolute" style={{ top: '20px', right: '20px',  width: '100%'}}>
                                        <button className="btn btn-outline-light rounded-pill text-uppercase" style={{zIndex: '1000', padding: '10px 30px'}} onClick={() => backToList()} >
                                            {t('back_session')}
                                        </button>
                                        <button className="btn btn-outline-success rounded-pill text-uppercase " style={{zIndex: '1000', padding: '10px 30px'}} onClick={() => showBoard()} >
                                            {t('share_others')}
                                        </button>
                                        <button id="finish-button" className="btn btn-light rounded-pill  text-uppercase" style={{zIndex: '1000', padding: '10px 30px'}} onClick={() => finishedSession()} >
                                            {t('finished_session')}
                                        </button>
                                    </div>
                                )
                              
                        ) 
                        
                    }
                    
                    {
                        progressDB === 'action-plan' &&  (
                            playerType.playerType !== null && playerType.playerType === 'master' && (
                                <button className="btn btn-outline-light rounded-pill btn-outline-light position-absolute " style={{zIndex: '1000'}} onClick={() => distpatch(changeProgressAction('active'))} >
                                    {t('back_play_board')}
                                </button>
                            )
                        )
                    }
                
                

                </Board>
                {
                    progressDB === 'action-plan' && (
                        <QuestionList     questionList={questionList} 
                                          setSelectedQuestions={setSelectedQuestions} 
                                          selectedQuestions={selectedQuestions}
                                          handleRemove={handleRemove} 
                                          handleAdd={handleAdd} 
                                           />
                    )
                }
                
                {
                    progressDB === 'finished-plan' && playerType.playerType !== null && (
                            
                            playerType.playerType === 'master' ? (
                            <ResumeMaster positions={positions} setPositions={setPositions} />
                             ):(
                                !share ? <Resume />
                                    : <FinalBoard setMasterBoard={setMasterBoard} masterBoard={masterBoard} innerW={intViewportWidth} innerH={intViewportHeight} /> 
                                    
                            )
                        
                        ) 
                }
                {
                    progressDB === 'finished' && (
                        <div className="col-xl-12 col-sm-12" >
                            {
                                playerType.playerType === 'master' && (
                                    <Link to="/dashboard" className="back-icon" >
                                        <IoChevronBackCircleOutline /> <span> {t('back_to_dash')} </span>
                                    </Link>
                                )
                            }
                            
                            <div className="alert alert-light game-over" >
                            <img className="m-auto" src={gameOver} alt=""/>
                            <p >
                                {t('more_info')} : 

                            </p>
                            <p style={{ marginTop: '10px'}}>
                            <a  href={"mailto:"+masterEmail}> {masterEmail} </a>
                            </p>
                        </div>
                        </div>
                        
                    )
                }
                
                
            </BoardContainer>
        </div>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(Backboard)
