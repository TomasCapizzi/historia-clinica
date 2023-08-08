import React from 'react'
import { Link } from "react-router-dom";
import {FaPlus} from 'react-icons/fa';

function HomeButtons() {
  return (
    <div className='flex justify-between md:justify-around flex-col md:flex-row md:flex-wrap md:w-4/5 lg:w-1024 items-center mb-4 md:mb-12 mt-6 lg:mt-12'>
        <Link to='/records-list' className="w-40 md:w-56 no-underline mb-4 md:mb-0" ><button className='inline-flex w-full h-10 md:h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-300 after:content-[""] after:w-full after:h-full after:bg-cyan-700 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><span className="z-20 relative transition-all delay-300 text-white text-sm md:text-base">List of Patients</span></button></Link>
        <Link to='/form' className="w-40 md:w-56 no-underline"><button className='inline-flex w-full h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-600 after:content-[""] after:w-full after:h-full after:bg-cyan-300 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><span className="flex items-center justify-between z-20 relative transition-all delay-300 text-white text-sm md:text-base">Create New Medical Record <FaPlus className="ml-2"/></span></button></Link>
    </div>
  )
}

export default HomeButtons