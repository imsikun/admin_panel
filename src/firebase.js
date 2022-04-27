import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDydX0s_DLHEhgYLQkuaIWAsmJEKyKEe3o',
  authDomain: 'reactadmin-a58d4.firebaseapp.com',
  projectId: 'reactadmin-a58d4',
  storageBucket: 'reactadmin-a58d4.appspot.com',
  messagingSenderId: '727433208560',
  appId: '1:727433208560:web:fbe807c574f4d9a7acd835',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
