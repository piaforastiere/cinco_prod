import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Login from './components/Login';
import Navbar from './components/Navbar';

import { auth } from './firebase';
import Profile from './components/dashboard/Profile';
import Singup from './components/Singup';
import ResetPass from './components/ResetPass';
import Terms from './components/Terms';
import Dashboard from './components/Dashboard';
import GetGamesInfo from './components/dashboard/GetGamesInfo';
import CreateAppointment from './components/dashboard/CreateAppointment';
import Spinner from './components/Spinner';
import Game from './components/Game';
import GameMaster from './components/GameMaster';
// import Workshop from './components/Workshop';
import Sessions from './components/dashboard/Sessions';
import { Resume } from './components/dashboard/Resume';
import Instructions from './components/Instructions';
// import LanguageSelector from './components/LanguageSelector'
import Home from './components/Home';
import Payment from './components/Payment';


function App() {

  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
          
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
    } 
    fetchUser()
  }, [])

  const PrivateRoute = ({componen, path, ...rest}) => {
      if (localStorage.getItem('user')) {
        
        const userStorage = JSON.parse(localStorage.getItem('user'))

        if (userStorage.uid === firebaseUser.uid) {
          return <Route component={componen} path={path} {...rest} />
        } else {
          return <Redirect to ="/singup" {...rest} />
        }
        
      } else {
        return <Redirect to ="/login" {...rest} />
      }
  }

  return  firebaseUser !== false ? (

      <Router>
        <div className="container-fluid" style={{padding: 0}}>
            {/* <LanguageSelector /> */}
            <Navbar />
          <div >
          <Switch>
            
            <PrivateRoute exact component={Dashboard} path="/dashboard"  />
            <PrivateRoute exact component={Profile} path="/profile"  />
            <PrivateRoute exact component={GetGamesInfo} path="/games-information"  />
            <PrivateRoute exact component={Resume} path="/games-information/:id"  />
            <PrivateRoute exact component={CreateAppointment} path="/new-game"  />
            <PrivateRoute exact component={Sessions} path="/sessions"  />
            <PrivateRoute exact component={GameMaster} path="/game/:password"  />
            
            
            <Route exact component={Instructions} path="/instructions"  />
            <Route exact component={Login} path="/login"  />
            {/* <Route exact component={Workshop} path="/workshops"  /> */}
            <Route exact component={Singup} path="/singup"  />
            <Route exact component={Game} path="/game"  />
            <Route exact component={ResetPass} path="/reset"  />
            <Route exact component={Terms} path="/terms-and-conditions"  />
            <Route exact component={Payment} path="/shop"  />
            <Route exact component={Home} path="/"  />
            
          </Switch>
          </div>
         
        </div>
      </Router>
   
  ) : <Spinner background={'rgba(250, 250, 250, 0.4)'} />
}

export default App;
