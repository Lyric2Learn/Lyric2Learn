import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBakeYeIxVp3rOTSvVjjE5L5pawq1QTreg',
  authDomain: 'lyric2learn.firebaseapp.com',
  projectId: 'lyric2learn',
  storageBucket: 'lyric2learn.appspot.com',
  messagingSenderId: '285330953425',
  appId: '1:285330953425:web:fb610aba35215ddbee21f0',
  measurementId: 'G-4XLB0YY3V8',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(FIREBASE_APP);
