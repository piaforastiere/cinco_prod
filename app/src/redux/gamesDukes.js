import { db, database } from '../firebase'



const initialData = {
    loading: false,
    active: false,
    error: null,
    gameData: null,
    theme: null, 
    playerName : null,
    password: null,
    questions: [],
    notes: [],
    progress : null,
    sessionOver: false,
    appointmentSubject: null,
}

const LOADING = 'LOADING'
const NEW_GAME_SUCCESS = 'NEW_GAME_SUCCESS'
const GAME_ERROR = 'GAME_ERROR'
const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS'

const INIT_SESSION_SUCCESS = 'INIT_SESSION_SUCCESS'
const SET_THEME_SUCCESS =  'SET_THEME_SUCCESS'
const SET_PLAYER_NAME = 'SET_PLAYER_NAME'
const ALL_QUESTION_SUCCESS = 'ALL_QUESTION_SUCCESS'
const ALL_NOTES_SUCCESS = 'ALL_NOTES_SUCCESS'
const ACTIVE_GAME = 'ACTIVE_GAME'
const FINISH_GAME = 'FINISH_GAME'
const GAME_STATE = 'GAME_STATE'
const SESSION_OVER = 'SESSION_OVER'
const ZERO_STATE = 'ZERO_STATE'


export default function gamesReducer(state = initialData, action){
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true}
        case NEW_GAME_SUCCESS:
            return { ...state, loading: false, game: action.payload, error: null}
        case GET_GAMES_SUCCESS:
            return { ...state, loading: false, games: action.payload, error: null }
        case GAME_ERROR:
            return {  ...state, error: action.payload, loading: false}
        case INIT_SESSION_SUCCESS:
            return { ...state, loading: false, gameData: action.payload, active: true, password : action.payload.password}
        case SET_THEME_SUCCESS:
            return { ...state, theme: action.payload, appointmentSubject: action.payload.appointmentSubject, loading: false}
        case SET_PLAYER_NAME:
            return{ ...state, playerName: action.payload}
        case ACTIVE_GAME:
            return { ...state, gameData: action.payload, progress: action.payload.progress, 
                    password : action.payload.password, playerName: action.payload.playerName, theme: action.payload.theme, loading: false }
        case FINISH_GAME:
            return { ...state, progress: action.payload.progress, loading: false}
        case GAME_STATE:
            return { ...state, progress: action.payload.progress, appointmentSubject: action.payload.appointmentSubject,}
        case ALL_QUESTION_SUCCESS:
            return {...state, questions: action.payload}
            case ALL_NOTES_SUCCESS:
            return {...state, notes: action.payload}
        case SESSION_OVER: 
            return { ...state, sessionOver: true, loading: false}
        case ZERO_STATE:
            return { ...state, gameData: null }
        default:
            return state
    }
}

export const createNewGameAction = (email, name, pass, userEmail, userId, subject) => async(dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    
    
    try {

        const newGame = {
            masterEmail: email,
            masterName: name,
            password: pass,
            subscriptionEmail: userEmail,
            subscriptionID: userId,
            progress: 'unactive',
            creationDate : new Date().toLocaleDateString(),
            appointmentSubject: subject,
            share: false
        }

        
        await db.collection('new-games').doc(pass).set(newGame)
        
        
        dispatch({
            type: NEW_GAME_SUCCESS,
            payload: newGame
        })
        

        const gameDB =  await db.collection('new-games').doc(pass).get()
        
        
        if (gameDB.exists) {
            
            dispatch({
                type: NEW_GAME_SUCCESS,
                payload: gameDB.data()
            })
            
        } else {
            dispatch({
                type: GAME_ERROR,
                payload: 'Ops! There was an error please try again'
            })
        }
        
    } catch (error) {
        
        dispatch({
            type: GAME_ERROR,
            payload: error.message
        })
    }
}

export const returnToZeroState = () => async(dispatch) => {
    
    dispatch({
        type: ZERO_STATE
    })
}

export const getAllGamesAction = () => async(dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    
    const email = getState().user.user.email
    
    
    try {
        const data = []
        
        const gameDB =  await db.collection('new-games').where('subscriptionEmail', '==', email).get()
        gameDB.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                data.push(doc.data())
            });
        
        if (!gameDB.empty) {
            
            dispatch({
                type: GET_GAMES_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GAME_ERROR,
                payload: "Sorry you don't have any sessions created"
            })
        }
        
    } catch (error) {
        dispatch({
            type: GAME_ERROR,
            payload: error.message
        })
    }
}



export const emailCheckAction = (email, password, name) => async(dispatch) => {

    dispatch({
        type: LOADING
    })

    
   
    try {
        
        const gameDB =  await db.collection('new-games').doc(password).get()
        
        dispatch({
            type: SET_PLAYER_NAME,
            payload: name
        })
        
        //hacer un check de las preguntas
        if (gameDB.data().progress === 'finished') {
            
            dispatch({
                type: SESSION_OVER,
                
            })
            
        } else {

                if (gameDB.data().theme !== undefined) {
                    dispatch({
                        type: SET_THEME_SUCCESS,
                        payload: {
                            theme: gameDB.data().theme,
                            appointmentSubject : gameDB.data().appointmentSubject
                        }
                    })
                }
                
                

                if (gameDB.data().progress === 'action-plan' || gameDB.data().progress === 'finished-plan' ){
                    dispatch({
                        type: GAME_STATE,
                        payload: {
                            progress: gameDB.data().progress,
                            appointmentSubject : gameDB.data().appointmentSubject
                        }
                    })
                    
                    
                    
                } else {
                    await db.collection('new-games').doc(password).update({
                        progress: 'active',
                        playedDate: new Date().toLocaleDateString()
                    })
                    
                    dispatch({
                        type: GAME_STATE,
                        payload: {
                            progress: 'active',
                            appointmentSubject : gameDB.data().appointmentSubject
                        }
                    })
                    
                    
                }
                
                if (gameDB.data().masterEmail.toLowerCase() === email.toLowerCase()) {
                    
                    dispatch({
                        type: INIT_SESSION_SUCCESS,
                        payload: {
                            subscriptionEmail: gameDB.data().subscriptionEmail,
                            subscriptionID: gameDB.data().subscriptionID,
                            masterEmail: gameDB.data().masterEmail,
                            playerType: 'master',
                            password: gameDB.data().password,
                            appointmentSubject : gameDB.data().appointmentSubject
                        }
                    })
                }else {

                    const playersDB =  await db.collection('new-games').doc(password).collection('players').doc(email).get()
                    
                    if (!playersDB.exists) {
                        await db.collection('new-games').doc(password).collection('players').doc(email).set({
                            "email": email,
                            "name": name
                        })
                    }
                    
                    dispatch({
                        type: INIT_SESSION_SUCCESS,
                        payload: {
                            subscriptionEmail: gameDB.data().subscriptionEmail,
                            subscriptionID: gameDB.data().subscriptionID,
                            masterEmail: gameDB.data().masterEmail,
                            playerType: 'player',
                            password: gameDB.data().password,
                        }
                    })
                }
                
             
        }


        
    } catch (error) {
        dispatch({
            type: GAME_ERROR,
            payload: error.message
        })
    }
}

export const setThemeAction = (theme) => async (dispatch, getState) => {

    const id = getState().games.password
    
    try {
        await db.collection('new-games').doc(id).update({ theme: theme})
        
        await database.ref(id+'/theme').push().set({
            "theme" : theme
        });
        
        const gameDB =  await db.collection('new-games').doc(id).get()
        
        if (gameDB.data().theme.length < 0 || gameDB.data().theme === undefined) {
            await database.ref(id+'/theme').set({
                theme: theme
            })
    
            dispatch({
                type: SET_THEME_SUCCESS,
                payload: theme
            })
            

        } else {
            dispatch({
                type: SET_THEME_SUCCESS,
                payload: gameDB.data().theme
            })
            
        }
        
        
        
    } catch (error) {
        console.log(error);
        
        dispatch({
            type: GAME_ERROR,
            payload: "Ops! Something went wrong, please reload the page and try again"
        })
    }
}

export const getInitialCardsAction = () => async(dispatch, getState) => {

    const password = getState().games.password
    try {

        await database.ref(password+'/questions').once("value", snapshot => {
            dispatch({
                type: ALL_QUESTION_SUCCESS,
                payload : snapshot.val()
            })
         });
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getInitialNotessAction = () => async(dispatch, getState) => {

    const password = getState().games.password
    try {

        await database.ref(password+'/notes').once("value", snapshot => {
            
            dispatch({
                type: ALL_NOTES_SUCCESS,
                payload : snapshot.val()
            })
         });
        
    } catch (error) {
        console.log(error);
        
    }
}

export const finishGameAction = (progress) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: FINISH_GAME,
            payload: {
                progress: progress,
                loading: false
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const changeProgressAction = (progress) => async(dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    const password = getState().games.password

    try {

        await db.collection('new-games').doc(password).update({
            progress: progress,
        })

        dispatch({
            type: FINISH_GAME,
            payload: {
                progress: progress,
                loading: false
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

