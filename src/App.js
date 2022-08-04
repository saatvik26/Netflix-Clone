import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './Fire';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';
// import {  } from 'firebase/auth';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }
        ))
      } else {
        //logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  console.log(user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/profile' element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>

        )}

      </Router>
    </div>
  );
}

export default App;
