import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDJHzZfRgZOwUDNUSey48maeqdC1zX7USo",
    authDomain: "learn-maltimart.firebaseapp.com",
    projectId: "learn-maltimart",
    storageBucket: "learn-maltimart.appspot.com",
    messagingSenderId: "16093387463",
    appId: "1:16093387463:web:ac81e2a37ee7a1cf9e7ce2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const  db = getFirestore(app);
export const storage = getStorage(app);

export default app;