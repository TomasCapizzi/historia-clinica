import React, { useEffect} from "react";
import useFirebaseUsersList from "../Hooks/useFirebaseUsersList";
import Spinner from "./Spinner";

export default function OtherUsers({user}){

    const {getListOfUsers,userList} = useFirebaseUsersList();

    useEffect(()=>{
        getListOfUsers(user);
         // eslint-disable-next-line
    },[])

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