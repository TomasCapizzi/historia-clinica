import React,{createContext, useState} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { app } from '../Firebase/firebase';

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    onAuthStateChanged(auth, (fbUser)=>{
      fbUser ? setUser(fbUser) : setUser(null)
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
         {children}   
        </UserContext.Provider>
    )
}

export default UserContextProvider;
