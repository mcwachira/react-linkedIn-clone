import React, { useEffect } from 'react';
import Header from './components/Header/Header.component';
import SideBar from './components/Sidebar/SideBar.component';
import Feed from './components/Feed/Feed.component'
import Widgets from './components/Widgets/Widgets.component';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/user/userSlice';
import Login from './components/Login/Login.component';
import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from './redux/user/userSlice';
import './App.css';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //persisting my  login state using firebase

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(logIn({
          email: user.email,
          uid: user.uid,
          displayName: user.name,

          photoUrl: user.profilePic,
        }))

      } else {
        dispatch(logOut({

        }))
      }
    })



  }, [dispatch])
  return (
    <div className="app">


      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>

      )
      }
    </div>
  )

}

export default App;
