import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app  from "../firebase/firebase.config";
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState({displayName: 'anis'})




    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    
    const authInfo = {user, createUser,signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;