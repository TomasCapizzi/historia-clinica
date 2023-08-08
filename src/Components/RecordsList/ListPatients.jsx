import { Link } from "react-router-dom";
import Patient from '../Medical History/Patient';
import React from 'react';
import Spinner from '../Spinner';

function ListPatients({load, patients}) {
  return (
    <div className='flex flex-col w-4/5 xl:w-1024 items-center mt-4'>
        { load ?
            (patients.length>0) ? patients.map(
                item => <Patient key={item.id} patient={item}/>
            ) : 
            <div className="">
                <p className="text-base md:text-xl font-medium mb-6 text-cyan-600">You haven't add any patients</p>
                <button className='inline-flex w-40 md:w-40 h-10 md:h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-600 after:content-[""] after:w-full after:h-full after:bg-cyan-300 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><Link to='/form'><span className="flex items-center justify-between z-20 relative transition-all delay-300 text-white text-sm md:text-base">Add +</span></Link></button>
            </div>
            : <Spinner/>
        }
    </div>
  )
}

export default ListPatients