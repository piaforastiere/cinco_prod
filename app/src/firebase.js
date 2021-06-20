import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD7hAh_DFPwLOwOKipcBZfosgxImB6PhlA",
    authDomain: "tareas-e05bd.firebaseapp.com",
    projectId: "tareas-e05bd",
    storageBucket: "tareas-e05bd.appspot.com",
    messagingSenderId: "992221847314",
    appId: "1:992221847314:web:a8203efe8684b413749dcb",
    measurementId: "G-VEQ7KFCTC0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const database = firebase.database()
  const analytics = firebase.analytics()
  // const provider = new firebase.auth.GoogleAuthProvider()
  
  
  

  export { auth, firebase, db, storage, database, analytics}