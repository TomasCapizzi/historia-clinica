import {useState} from 'react'
import { db } from "../Firebase/firebase";


const useFirebaseUsersList = () => {

    //const {user} = useContext(UserContext);
   // console.log(user);

    const [userList, setUserList] = useState([]); //Obtener lista de usuarios
    const [userData, setUserData] = useState(null);//Data de  usuario activo


    function getListOfUsers(user, finishLoad){
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
                setUserData(data.find(item => item.uid === user.uid));
                finishLoad && finishLoad(false);                
            }
        )
        
    }

    

    return {
        getListOfUsers,
        userList,
        userData
    }
}

export default useFirebaseUsersList;
