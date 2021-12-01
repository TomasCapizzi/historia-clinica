import React,{useState,useEffect} from "react";
import {app} from '../Firebase/firebase';
import {getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import Spinner from "./Spinner";

export default function Login({setUser}){

    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();

    const [handler, setHandler] = useState(false)

    function logIn(){
        signInWithRedirect(auth, providerGoogle)
        setUser(auth.currentUser)
    }

    function wait(){

        setTimeout(() => {
            setHandler(true)
        }, 1200);
    }

    useEffect(()=>{
        wait()
    },[])


    return(
        <section className='login'>

            
            {
                !handler ? <Spinner/> : <button onClick={logIn} >Log in with Google</button>
            }

        </section>
    )
}