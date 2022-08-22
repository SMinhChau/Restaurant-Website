// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
 apiKey: 'AIzaSyA1J_6VbTTQNRNZuk4Du1tx2dbkkWnW1qc',
 authDomain: 'auth-devres.firebaseapp.com',
 projectId: 'auth-devres',
 storageBucket: 'auth-devres.appspot.com',
 messagingSenderId: '950015590282',
 appId: '1:950015590282:web:03e0bfc14e69f1f1a8d273',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
