import React from "react";
import {app} from '../Firebase/firebase';
import {getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

export default function Login({setUser}){

    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();

    function logIn(){
        signInWithRedirect(auth, providerGoogle)
        setUser(auth.currentUser)
    }
    return(
        <section className='login'>
            <button onClick={logIn} >Log in with Google</button>
        </section>
    )
}