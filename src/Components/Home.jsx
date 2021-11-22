import React from "react";
import AppInfo from "./AppInfo";
import OtherUsers from "./OtherUsers";
import PersonalInfo from "./Personal Information/PersonalInfo";
import { Link } from "react-router-dom";
import {FaPlus} from 'react-icons/fa';

export default function Home({user}){


    return(
        <section className='home-container'>
            <PersonalInfo user={user}/>
            <div className='btn-container'>
                <button><Link to='/records-list'>List of Patients</Link></button>
                <button><Link to='/form'>Create New Medical Record <FaPlus/></Link></button>
            </div>
            <AppInfo/>
            <OtherUsers user={user}/>
        </section>
    )
}

