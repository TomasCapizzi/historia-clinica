import React,{useState, useEffect} from "react";
import {GrAddCircle} from 'react-icons/gr';
import ExtraInfo from './ExtraInfo';
import Spinner from "../Spinner";
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
                    { userData ? 
                        <div className='user-data'>
                            <div>
                                <p>{userData.displayName}</p>
                                <p>{userData.userBirth}</p>
                            </div>
                            <div>
                                <p className='user-specialty'>{userData.specialty.toUpperCase()}</p>
                                <p>{userData.userCollege}</p>
                            </div>
                        </div>
                        : <div className="missing-info">
                            {
                                addInfo ? 
                                    <ExtraInfo  changeState={changeState}  user={user}/>
                                :
                                    <div className="complete-info">
                                        <p>Your user is not complete</p>
                                        <button onClick={changeState} className="btn1"><span>Finish user<GrAddCircle/></span></button>
                                    </div>
                        
                            }
                        </div>

                    } </>  :
                        
                    <Spinner />
                    
            }
        </section>
    )
}