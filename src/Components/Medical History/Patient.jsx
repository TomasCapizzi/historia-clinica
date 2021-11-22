import React from "react";
import { Link } from "react-router-dom";

export default function Patient({patient}){

    console.log(patient);

    return(
        <article className='patient'>
            <p>{patient.interrogatory.name}</p>
            <button><Link to={`/patient/${patient.id}`}>See Detail</Link></button>
        </article>
    )
}