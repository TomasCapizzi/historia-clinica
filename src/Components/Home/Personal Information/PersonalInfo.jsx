import React,{useEffect, useState} from "react";

import ExtraInfo from './ExtraInfo';
import MissingInfo from "./MissingInfo";
import Spinner from "../../Spinner";
import UserInfo from "./UserInfo";
import useFirebaseUsersList from "../../../Hooks/useFirebaseUsersList";
import useLoad from "../../../Hooks/useLoad";

export default function PersonalInfo({user}){

    const [addInfo, setAddInfo] = useState(false); // Handler para agregar o no la info faltante

    // Custom Hooks //
    const {getListOfUsers, userData} = useFirebaseUsersList();
    const {load, finishLoad} = useLoad();
    ////////////////////////////////////////////////////////////////////

    function changeState(){
        setAddInfo(!addInfo)
    }

    function checkUserExists(){
        getListOfUsers(user, finishLoad);
    }

    useEffect(()=>{
        checkUserExists();    
        // eslint-disable-next-line
    },[])

    return(
        <section className='flex w-full lg:w-1024 flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center'>
                <h3 className="text-center font-semibold text-cyan-500 text-xl lg:text-2xl mb-2 lg:mb-4">Your profile</h3>
                <img src={user.photoURL} alt="avatar" className="rounded-full mb-3 w-24 lg:w-36 h-24 lg:h-36 shadow-md" />
            </div>
            {
                !load ? <>
                    { userData ? <UserInfo userData={userData} />
                        : <>
                            {
                                addInfo ? 
                                    <ExtraInfo  changeState={changeState}  user={user}/>
                                :   <MissingInfo changeState={changeState}/> 
                            }
                        </>
                    } 
                </>  :  <Spinner />       
            }
        </section>
    )
}