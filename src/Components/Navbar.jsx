import React from "react";
import { Link } from "react-router-dom";
import {FaBookMedical} from 'react-icons/fa';
import {HiLogout} from 'react-icons/hi'
import useAuth from "../Hooks/useAuth";

export default function Navbar(){

    const {logOut} = useAuth();

    return(
        <nav className='nav-menu'>
            <Link to='/'><FaBookMedical/></Link>
            <button onClick={logOut}><HiLogout/></button>
        </nav>
    )
}