import {IoArrowBack} from 'react-icons/io5';
import { Link } from "react-router-dom";
import React from 'react';

function FormSuccess() {
  return (
    <article className='form-success'>
        <h5>Medical record stored</h5>
        <button><Link to='/'>Go back <IoArrowBack/> </Link></button>
    </article>
  )
}

export default FormSuccess