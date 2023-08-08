import { Link } from "react-router-dom";
import React from "react";

export default function Patient({patient}){

    return(
        <article className='flex flex-wrap w-full justify-around mb-4 bg-cyan-400 rounded-md shadow-2xl p-3'>
            <p className="flex flex-wrap w-auto lg:w-9/12 justify-center font-bold text-white text-base lg:text-xl">{patient.interrogatory.name}</p>
            <button className="border-solid border-l-2 bg-transparent border-white"><Link to={`/patient/${patient.id}`} className='text-center ml-3 text-white text-sm lg:text-base'>See Detail</Link></button>
        </article>
    )
}