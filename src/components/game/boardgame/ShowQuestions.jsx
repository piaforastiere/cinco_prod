import React, { useEffect }  from 'react'
import { ShowQuestionsContainer , Question} from '../../ui/game/Boardgame';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';


const ShowQuestions = ({questions, setQuestions}) => {

    const password = useSelector(store => store.games.password)

    // const user = useSelector(store => store.user.user)

    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('questions')
            .orderBy('timestamp', 'desc')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(password, {
            next: querySnapshot => {
                const updatedQuestionsItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                    setQuestions(updatedQuestionsItems);
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [password, setQuestions]);

    const handleClick = (id) => {
        
        document.getElementById(id).classList.toggle("active");
        
    }

    return (
        
        <ShowQuestionsContainer>
            
            { 
                questions !== null && questions.map((item, i) => {
                    
                    return <Question className="faq-list w-100"  key={i} id={i} onClick={() => handleClick(i)}>

                    <div className="header w-100">
                        <div className={item.class + " color"}></div>
                        <p> { item.title } - {item.name}</p>
                    </div>
                    <div className="question">
                        {item.question}
                    </div>
                    
                </Question>
                    
                })
            }
            
        </ShowQuestionsContainer>
    ) 
}

export default ShowQuestions
