import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
