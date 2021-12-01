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
                <Link to='/records-list'><button className='btn1'><span>List of Patients</span></button></Link>
                <Link to='/form'><button className='btn2'><span>Create New Medical Record <FaPlus/></span></button></Link>
            </div>
            <AppInfo/>
            <OtherUsers user={user}/>
        </section>
    )
}

