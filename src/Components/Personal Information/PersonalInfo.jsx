import React,{useState, useEffect} from "react";
import {GrAddCircle} from 'react-icons/gr';
import ExtraInfo from './ExtraInfo';
import { db } from "../../Firebase/firebase";
import Spinner from "../Spinner";

export default function PersonalInfo({user}){

    const [addInfo, setAddInfo] = useState(false); // Handler para agregar o no la info faltante
    
    const [load,setLoad] = useState(true); //Handler de carga
    const [userData, setUserData] = useState(null)//Data de  usuario activo

    function changeState(){
        setAddInfo(!addInfo)
    }

    async function checkUserExists(){

        const usersList = await db.collection('users')
        usersList.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    })
                )
                setUserData(data.find(item => item.uid === user.uid));
                setLoad(false);         
            }
        )
    }

    useEffect(()=>{
        checkUserExists()
        // eslint-disable-next-line
    },[load])

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
                        : <div>
                            {
                                addInfo ? 
                                    <ExtraInfo  changeState={changeState}  user={user}/>
                                :
                                    <div>
                                        <p>Your user is not complete</p>
                                        <button onClick={changeState}>Finish user<GrAddCircle/></button>
                                    </div>
                        
                            }
                        </div>

                    } </>  :
                        
                    <Spinner />
                    
            }
        </section>
    )
}