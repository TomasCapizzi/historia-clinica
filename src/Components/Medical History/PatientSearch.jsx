import React from "react";
import { Link } from "react-router-dom";

export default function PatientSearch({patient}){

    return(
        <>
            <p className='search-item'><Link to={`/patient/${patient.id}`}>{patient.interrogatory.name}</Link></p>
        </>
    )
}