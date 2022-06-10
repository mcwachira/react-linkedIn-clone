// Initializing the firebase App
import { initializeApp } from "firebase/app";
//for firebase authentication
import { getAuth } from 'firebase/auth'

//for firebase firestore database
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlNuleDOE6Z8PpeT84hLZ2pwCMsxealac",
    authDomain: "linkedin-react-clone-bbf94.firebaseapp.com",
    projectId: "linkedin-react-clone-bbf94",
    storageBucket: "linkedin-react-clone-bbf94.appspot.com",
    messagingSenderId: "492519722429",
    appId: "1:492519722429:web:69ef9d950057877b8696d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)