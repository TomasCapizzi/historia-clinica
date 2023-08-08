import {IoChevronBackSharp} from 'react-icons/io5';
import { Link } from "react-router-dom";
import React from 'react';

function BackPage({url}) {
  return (
    <Link to={url}><IoChevronBackSharp className='absolute left-4 top-1 xs:top-3 cursor-pointer text-cyan-700 text-xl sm:text-2xl'/></Link>
  )
}

export default BackPage