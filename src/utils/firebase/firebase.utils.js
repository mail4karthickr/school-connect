import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIeol7m5X_8DtOIwEu6OowAXnCRKYwLBM",
    authDomain: "schoolconnect-81a8a.firebaseapp.com",
    projectId: "schoolconnect-81a8a",
    storageBucket: "schoolconnect-81a8a.appspot.com",
    messagingSenderId: "877027650281",
    appId: "1:877027650281:web:4f5b928aa24ed62aff1e78"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export const signOutUser = async () => await signOut(auth);

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; 
    return await signInWithEmailAndPassword(auth, email, password);
}

export const getUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
  ) => {
    const userDocRef = doc(db, 'users', userAuth.user.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    return userSnapshot
}