import React, { useEffect } from "react";

import Spinner from "../Spinner";
import useFirebaseUsersList from "../../Hooks/useFirebaseUsersList";

export default function OtherUsers({user}){

    const {getListOfUsers,userList} = useFirebaseUsersList();

    useEffect(()=>{
        getListOfUsers(user);
         // eslint-disable-next-line
    },[])

    return(
        <section className='hidden sm:flex w-full flex-wrap bg-cyan-400 border-r-4 mt-10 items-center'>
            <p className="sm:w-1/4 xl:w-1/6 p-1 text-white font-normal sm:text-sm md:text-base lg:text-lg ml-4">Others doctors using this application</p>
            <div className="flex p-2 items-center justify-centers">
                {
                    userList.length ?
                        userList.map(item => <img src={item.photoURL} alt="avatar" key={item.uid} className={(item.uid !== user.uid ? 'w-10 lg:w-14 h-10 lg:h-14 mt-1 mr-3 rounded-full' : 'hidden')} /> )
                    :
                    <Spinner/>
                }
            </div>
        </section>
    )
}