import { db, database } from '../firebase'

const initialData = {
    loading: false,
    active: false,
    error: null,
    
}

const LOADING = 'LOADING'


export default function cardsReducer(state = initialData, action){
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true}
        
        default:
            return state
    }
}

export const setCardSelected = (question, playerName) => async(dispatch, getState) => {

    const password = getState().games.password
    const newQuestion = {
        question : question.question,
        class : question.class,
        tittle : question.title,
        name : playerName,
        id : question.id,
        display : "yes",
    }
    try {

        await database.ref(password+'/questions').child(question.id).set({
            "question" : question.question,
            "class" : question.class,
            "title" : question.title,
            "name" : playerName,
            "id" : question.id,
            "display" : "yes",
            
        });
       
       
        await db.collection('new-games').doc(password).collection('questions').doc(question.id).set({
            question: newQuestion
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const setCardCloseAction = (cardId) => async(dispatch, getState) => {

    const password = getState().games.password
    try {
        await database.ref(password+'/questions').child(cardId).update({display: 'no'});
       
        await db.collection('new-games').doc(password).collection('questions').doc(cardId).update({
            display: 'no'
        })

    } catch (error) {
        console.log(error);
        
    }
}


