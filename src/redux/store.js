import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import userReducer, { readActiveUserAction } from './UserDucks';
import gamesReducer from './gamesDukes';
import cardsReducer from './cardsDukes';
import resumeDukes from './resumeDukes';

//combine reducers
//esto es lo unico que cambia
const rootReducer = combineReducers({
   
    user: userReducer,
    games: gamesReducer,
    cards: cardsReducer,
    resume: resumeDukes,
})

//esto es para la extension de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    //thunk para trabajar con promesas
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)))
    readActiveUserAction()(store.dispatch)
    return store
}