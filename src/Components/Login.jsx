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

    useEffect(()=>{
        if(!handler){
            setTimeout(() => {
                setHandler(true)
            }, 1200);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <section className='login'>

            
            {
                !handler ? <Spinner/> : <button onClick={logIn} className='btn2' ><span>Log in with Google</span></button>
            }

        </section>
    )
}