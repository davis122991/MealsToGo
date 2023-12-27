import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDj31CwDEgqT9FjQcyyoBHdSy_YiEaOQOg',
  authDomain: 'mealstogo-bcbf4.firebaseapp.com',
  projectId: 'mealstogo-bcbf4',
  storageBucket: 'mealstogo-bcbf4.appspot.com',
  messagingSenderId: '537977524603',
  appId: '1:537977524603:web:c2bc89fd617a616a24edde',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
