import { Link } from "react-router-dom";
import React from "react";

export default function PatientSearch({patient}){

    return(
        <>
            <p className='w-full m-0 py-1 text-sky-600 bg-white hover:bg-cyan-200 hover:transition-all hover:ease-out hover:delay-100'><Link to={`/patient/${patient.id}`}>{patient.interrogatory.name}</Link></p>
        </>
    )
}