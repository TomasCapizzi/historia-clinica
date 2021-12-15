import React, {useState, useEffect} from "react";
import { db } from "../Firebase/firebase";
import Spinner from "./Spinner";

export default function OtherUsers({user}){

    const [userList, setUserList] = useState([]); //Obtener lista de usuarios
   // const [handler, setHandler] = useState(false)

    
    function getListOfUsers(){
        const usersList = db.collection('users')
        usersList.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    })
                )
                setUserList(data);  
            }
        )
    }

    // Establecer limite

    useEffect(()=>{
        getListOfUsers();
    })

    return(
        <section className='other-users'>
            <p>Others doctors using this application</p>
            <div>
                {
                    userList.length ?
                        userList.map(item => <img src={item.photoURL} alt="avatar" key={item.uid} className={(item.uid !== user.uid ? 'img-list-users' : 'hide')} /> )
                    :
                        <Spinner/>
                }
            </div>
        </section>
    )
}