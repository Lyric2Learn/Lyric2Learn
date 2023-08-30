import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBakeYeIxVp3rOTSvVjjE5L5pawq1QTreg",
    authDomain: "lyric2learn.firebaseapp.com",
    projectId: "lyric2learn",
    storageBucket: "lyric2learn.appspot.com",
    messagingSenderId: "285330953425",
    appId: "1:285330953425:web:fb610aba35215ddbee21f0",
    measurementId: "G-4XLB0YY3V8",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
