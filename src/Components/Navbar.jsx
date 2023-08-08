import {FaBookMedical} from 'react-icons/fa';
import {HiLogout} from 'react-icons/hi'
import { Link } from "react-router-dom";
import React from "react";
import useAuth from "../Hooks/useAuth";

export default function Navbar(){

    const {logOut} = useAuth();

    return(
        <nav className='flex w-full justify-between h-15 bg-cyan-200 py-4 items-center mb-7'>
            <Link to='/'><FaBookMedical className='text-2xl text-white mx-3 cursor-pointer' /></Link>
            <button onClick={logOut} className='bg-transparent border-none' ><HiLogout className='text-2xl text-white mx-3 cursor-pointer'/></button>
        </nav>
    )
}