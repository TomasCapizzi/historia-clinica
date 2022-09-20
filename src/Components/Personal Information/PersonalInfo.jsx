import React,{useEffect, useState} from "react";

import ExtraInfo from './ExtraInfo';
import MissingInfo from "./MissingInfo";
import Spinner from "../Spinner";
import UserInfo from "./UserInfo";
import useFirebaseUsersList from "../../Hooks/useFirebaseUsersList";
import useLoad from "../../Hooks/useLoad";

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
        <section className='personal-info'>
            <div className='info-header'>
                <h3>Your profile</h3>
                <img src={user.photoURL} alt="avatar" />
            </div>
            {
                !load ? <>
                    { userData ? <UserInfo userData={userData} />
                        : <div className="missing-info">
                            {
                                addInfo ? 
                                    <ExtraInfo  changeState={changeState}  user={user}/>
                                :   <MissingInfo changeState={changeState}  /> 
                            }
                        </div>
                    } 
                </>  :  <Spinner />       
            }
        </section>
    )
}