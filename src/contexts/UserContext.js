import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app  from "../firebase/firebase.config";
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState(null)




    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{

       const unSubscribe=  onAuthStateChanged(auth, (currentuser)=>{
            console.log('user state indie change', currentuser)
            setUser(currentuser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    
    const authInfo = {user, createUser,signIn, providerLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;