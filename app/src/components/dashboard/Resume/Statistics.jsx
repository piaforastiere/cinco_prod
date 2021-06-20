import React, { useEffect, useState } from 'react'
import { StatisticsContainer } from '../../ui/Statistics'
import { db } from '../../../firebase';
import { useParams } from 'react-router-dom';

import { useTranslation } from "react-i18next";

const Statistics = () => {

    let { id } = useParams();

    const { t } = useTranslation();

    const [ questions, setQuestions ] = useState(null)
    const [ intuQuestions, setIntuQues ] = useState(null)
    const [ thouQuestions, setThouQues ] = useState(null)
    const [ sorQuestions, setSorQues ] = useState(null)
    const [ wordsQuestions, setWordsQues ] = useState(null)
    const [ emoQuestions, setEmoQues ] = useState(null)
    const [ accQuestions, setAccQues ] = useState(null)
    const [ decQuestions, setDecQues ] = useState(null)
    
    

    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('questions')
            .orderBy('timestamp', 'desc')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(id, {
            next: querySnapshot => {
                const updatedQuestionsItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setQuestions(updatedQuestionsItems);
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [id ]);

    
    useEffect(() => {

        if (questions !== null) {
            setIntuQues(questions.filter(function(question) {
                return question.class === 'intu';
            }))
            setThouQues(questions.filter(function(question) {
                return question.class === 'pensa';
            }))
            setSorQues(questions.filter(function(question) {
                return question.class === 'sorprise';
            }))
            setWordsQues(questions.filter(function(question) {
                return question.class === 'pal';
            }))
            setEmoQues(questions.filter(function(question) {
                return question.class === 'emo';
            }))
            setAccQues(questions.filter(function(question) {
                return question.class === 'acc';
            }))
            setDecQues(questions.filter(function(question) {
                return question.class === 'decision';
            }))
            
            
            
        }
    }, [questions])

    function percentage(partialValue) {
        return (100 * partialValue.length) / questions.length;
     }
    
    
   
    return intuQuestions !== null && (
        <StatisticsContainer className="row mt-5" >
            
            <div className="title">
                {t('total_cards_selected')}: { questions.length }
            </div>
            
            <div className="title mt-5 mb-3">
                {t('percent_powers')}
            </div>

            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart intuition">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(intuQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(intuQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('intuition')}</p>
            </div>
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart words">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(wordsQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(wordsQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('words')}</p>
            </div>
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart thoughts">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(thouQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(thouQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('thoughts')}</p>
            </div>
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart emotion">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(emoQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(emoQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('emo_feel')}</p>
            </div>
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart action">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(accQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(accQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('action')}</p>
            </div>

            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart sorprise">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(sorQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(sorQuestions).toFixed(1)}% </text>
                </svg>
                <p>{t('surprise')}</p>
            </div>
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart decition">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={percentage(decQuestions)+', 100'}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{percentage(decQuestions).toFixed(1)}%</text>
                </svg>
                <p>{t('decision')}</p>
            </div>
        </StatisticsContainer>
    )
}

export default Statistics
