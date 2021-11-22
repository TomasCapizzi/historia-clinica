import React from "react";
import { Link } from "react-router-dom";
import {app} from "../Firebase/firebase";
import { getAuth, signOut } from "@firebase/auth";
import {FaBookMedical} from 'react-icons/fa';
import {HiLogout} from 'react-icons/hi'

export default function Navbar({user, setUser}){

    
    const auth = getAuth(app)

    function logOut(){
        console.log('log out')
        signOut(auth)
        setUser(null)
    }

    return(
        <nav className='nav-menu'>
            <Link to='/'><FaBookMedical/></Link>
            <button onClick={logOut}><HiLogout/></button>

        </nav>
    )
}