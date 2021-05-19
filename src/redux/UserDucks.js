import { firebase, auth, db, storage } from '../firebase'

const initialData = {
    loading: false,
    active: false,
    error: null,
    emailVerified: null,
}

const LOADING = 'LOADING'
const USER_ERROR = 'USER_ERROR'
const USER_SUCCESS = 'USER_SUCCESS'
const LOGOUT_SESSION = 'LOGOUT_SESSION'
const CHECK_EMAIL_VERIFY = 'CHECK_EMAIL_VERIFY'


export default function userReducer(state = initialData, action){
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true}
        case USER_ERROR:
            return {  ...state, error: action.payload}
        case USER_SUCCESS:
            return { ...state, loading: false, user: action.payload, active: true}
        case CHECK_EMAIL_VERIFY:
            return {...state, emailVerified: action.payload}
        case LOGOUT_SESSION: 
            return { ...initialData}
        default:
            return state
    }
}

export const singupEmailAndPassAction = (name, email, pass) => async(dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        
        // const log = await res.user.sendEmailVerification().then(function() {

        //     }).catch(function(error) {
                
        //     });
        // const send = await firebase.auth().currentUser.sendEmailVerification({
        //       url: process.env.REACT_APP_HOST_NAME,
        // })
        
        const userDB = await db.collection('users').doc(res.user.email).get()
        
        const userObject = {
            uid: res.user.uid,
            email: res.user.email,
            photoURL: res.user.photoURL,
            displayName: name,
            subscriptionDate: res.user.metadata.creationTime,
            subscriptionType: 'limited',
        }

    
        if(userDB.exists){
            
            dispatch({
                type: USER_SUCCESS,
                payload: userDB.data()
            })
            localStorage.setItem('user', JSON.stringify(userDB.data()))
            
        } else {
            await db.collection('users').doc(res.user.email).set(userObject)

            dispatch({
                type: USER_SUCCESS,
                payload: userObject
            })
            localStorage.setItem('user', JSON.stringify(userObject))
        }
       
        
        
    } catch (error) {
        
        const errorMessage = error.message
        dispatch({
            type: USER_ERROR,
            payload: errorMessage
        })
    }
}


export const loginWithEmailAndPassAction = (email, pass) => async(dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const res = await auth.signInWithEmailAndPassword(email, pass)
        
        // var user = firebase.auth().currentUser;
        
        
        // if (!user.emailVerified) {
        //     // user.sendEmailVerification({
                
        //     //     url: process.env.REACT_APP_HOST_NAME,
        //     // })
            
            
        //     user.sendEmailVerification().then(function() {
        //         dispatch({
        //             type: CHECK_EMAIL_VERIFY,
        //             payload: false
        //         })
        //         }).catch(function(error) {
                    
        //         });
        // } else{
        //     dispatch({
        //         type: CHECK_EMAIL_VERIFY,
        //         payload: true
        //     })
        // }
        
        const userDB = await db.collection('users').doc(res.user.email).get()
        
        const userObject = {
            uid: res.user.uid,
            email: res.user.email,
            // photoURL: res.user.photoURL,
            displayName: res.user.displayName,
            subscriptionDate: res.user.metadata.creationTime,
        }

        if(userDB.exists){
            await db.collection('users').doc(res.user.email).update({subscriptionDate: res.user.metadata.creationTime})
            dispatch({
                type: USER_SUCCESS,
                payload: userDB.data()
            })
            localStorage.setItem('user', JSON.stringify(userDB.data()))
            
            
        } else {
            await db.collection('users').doc(res.user.email).set(userObject)

            dispatch({
                type: USER_SUCCESS,
                payload: userObject
            })
            localStorage.setItem('user', JSON.stringify(userObject))
            
        }
        
    } catch (error) {
        
        const errorMessage = error.message
        dispatch({
            type: USER_ERROR,
            payload: errorMessage
        })
    }
}



export const googleLoginAction = () => async(dispatch) => {

    dispatch({
        type: LOADING
    })
    try {

        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)

        const userObject = {
            uid: res.user.uid,
            email: res.user.email,
            photoURL: res.user.photoURL,
            displayName: res.user.displayName,
            subscriptionDate: res.user.metadata.creationTime,
            subscriptionType: 'limited',
        }
        
        const userDB = await db.collection('users').doc(res.user.email).get()
        
        if(userDB.exists){
            await db.collection('users').doc(res.user.email).update({subscriptionDate: res.user.metadata.creationTime})
           
            dispatch({
                type: USER_SUCCESS,
                payload: userDB.data()
            })
            dispatch({
                type: CHECK_EMAIL_VERIFY,
                payload: true
            })
            localStorage.setItem('user', JSON.stringify(userDB.data()))
            
            
            
        } else {
            
            await db.collection('users').doc(res.user.email).set(userObject)

            dispatch({
                type: USER_SUCCESS,
                payload: userObject
            })
            localStorage.setItem('user', JSON.stringify(userObject))
        }
        
        
    } catch (error) {
        console.log(error);
        const errorMessage = error.message
        dispatch({
            type: USER_ERROR,
            payload: errorMessage
        })
    }
}

// export const facebookLoginAction = () => async(dispatch) => {

//     dispatch({
//         type: LOADING
//     })
//     try {

//         const provider = new firebase.auth.FacebookAuthProvider()
//         const res = await auth.signInWithPopup(provider)

//         const userObject = {
//             uid: res.user.uid,
//             email: res.user.email,
//             photoURL: res.user.photoURL,
//             displayName: res.user.displayName
//         }
        
//         const userDB = await db.collection('users').doc(res.user.email).get()
        
//         if(userDB.exists){
            
//             dispatch({
//                 type: USER_SUCCESS,
//                 payload: userDB.data()
//             })
//             localStorage.setItem('user', JSON.stringify(userDB.data()))
            
//         } else {
            
//             await db.collection('users').doc(res.user.email).set(userObject)

//             dispatch({
//                 type: USER_SUCCESS,
//                 payload: userObject
//             })
//             localStorage.setItem('user', JSON.stringify(userObject))
//         }
        
        
//     } catch (error) {
//         console.log(error);
//         dispatch({
//             type: USER_ERROR
//         })
//     }
// }

export const readActiveUserAction = () => (dispatch) => {

    if (localStorage.getItem('user') ) {
        dispatch({
            type: USER_SUCCESS,
            payload: JSON.parse(localStorage.getItem('user'))
        })
    }
}

export const logOutAction = () => (dispatch) => {
    
    auth.signOut()
    localStorage.removeItem('user')

    dispatch({
        type: LOGOUT_SESSION
    })
}

export const updateUserAction = (updatedName) => async (dispatch, getState ) => {

    dispatch({
        type: LOADING
    })

    const { user } = getState().user
    
    
    try {

        await db.collection('users').doc(user.email).update({
            displayName: updatedName
        })

        const updatedUser = {
            ...user,
            displayName: updatedName
        }

        dispatch({
            type: USER_SUCCESS,
            payload: updatedUser
        })
        
        localStorage.setItem('user', JSON.stringify(updatedUser))
    } catch (error) {
        console.log(error);
        
    }
}

export const editProfilePhotoAction = (newImg) => async(dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    const { user } = getState().user
    
    try {

        const imageRef = await storage.ref().child(user.email).child('profile picture')
        await imageRef.put(newImg)
        const imgURL = await imageRef.getDownloadURL()

        await db.collection('users').doc(user.email).update({
            photoURL: imgURL
        })

        const updatedUser = {
            ...user,
            photoURL: imgURL
        }

        dispatch({
            type: USER_SUCCESS,
            payload: updatedUser
        })

        localStorage.setItem('user', JSON.stringify(updatedUser))
    } catch (error) {
        console.log(error);
        
    }
}

