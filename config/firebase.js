import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {getAuth} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCDusr8cYUQ4PKv-CPLZC506QdQvrj8_OY',
  authDomain: 'expenselog-ca6f2.firebaseapp.com',
  projectId: 'expenselog-ca6f2',
  storageBucket: 'expenselog-ca6f2.appspot.com',
  messagingSenderId: '525762256837',
  appId: '1:525762256837:web:48f76e1fb75eb912f7f5ac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const tripsRef = collection(db,'trips');
export const expensesRef = collection(db,'expenses');

export default app;
