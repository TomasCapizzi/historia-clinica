import React,{useEffect, useState} from "react";

import Spinner from "../Components/Spinner";
import useAuth from "../Hooks/useAuth";

export default function Login(){

    const {logIn} = useAuth();
    const [handler, setHandler] = useState(false);

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