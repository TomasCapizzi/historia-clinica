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
        <section className='flex w-full min-h-screen justify-center items-center'>            
            {
                !handler ? <Spinner/> : <button onClick={logIn} className='inline-flex w-40 sm:w-60 h-10 md:h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-300 after:content-[""] after:w-full after:h-full after:bg-cyan-700 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0' ><span className="flex items-center justify-between z-20 relative transition-all delay-300 text-white text-sm md:text-base">Log in with Google</span></button>
            }
        </section>
    )
}