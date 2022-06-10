import React, { useState } from 'react'
import { auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import './Login.styles.css'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/user/userSlice'
const Login = () => {


    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");



    const dispatch = useDispatch();
    const register = async (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please enter your name ')
        } else {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {
                displayName: name,
                photoUrl: profilePic,
            }).then(() => {

                //used to store data in our redux and make the state accessible to other components
                dispatch(
                    logIn({
                        email: user.email,
                        uid: user.uid,
                        displayName: name,

                        photoUrl: profilePic,
                    })
                )
            }).catch((error) => {
                const errorCode = error.code;
                 console.log(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
            })
        }

    }
    const login = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
            dispatch(
                logIn({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                })
            )
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log('error', errorMessage)
        })
    }
    return (
        <div className='login'>

            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="" />


            <form>
                <input type="text" placeholder='Full Name (required if registering)' onChange={(e) => (setName(e.target.value))} value={name} />
                <input type="text" placeholder='Profile pic (optional)' onChange={(e) => (setProfilePic(e.target.value))} value={profilePic} />
                <input type="email" placeholder='Email' onChange={(e) => (setEmail(e.target.value))} value={email} />
                <input type="password" placeholder='Password' onChange={(e) => (setPassword(e.target.value))} value={password} />

                <button type='submit' onClick={login}>
                    Sign In
                </button>


            </form>
            <p>
                Not a member? <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login