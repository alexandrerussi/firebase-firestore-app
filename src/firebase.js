/* firebase.js */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJo38b_Hc4vHQx1hGm4iUORhwNNlO3xgE",
    authDomain: "fir-firestore-5a738.firebaseapp.com",
    projectId: "fir-firestore-5a738",
    storageBucket: "fir-firestore-5a738.appspot.com",
    messagingSenderId: "21371406370",
    appId: "1:21371406370:web:b928d36e6d915a7f75a27b"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = getFirestore(app);

export default db;
