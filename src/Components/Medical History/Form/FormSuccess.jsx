import {IoArrowBack} from 'react-icons/io5';
import { Link } from "react-router-dom";
import React from 'react';

function FormSuccess() {
  return (
    <article className='w-full flex justify-center flex-col items-center'>
        <h5 className='text-lg text-cyan-600'>Medical record stored</h5>
        <button className='bg-cyan-100 p-4 rounded-2xl w-32 border-none'><Link to='/'>Go back <IoArrowBack/> </Link></button>
    </article>
  )
}

export default FormSuccess