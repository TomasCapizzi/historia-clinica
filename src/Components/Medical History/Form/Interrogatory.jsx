import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React,{useRef, useState} from 'react';

import InterrogatoryOptions from './InterrogatoryOptions';

function Interrogatory({interrogatoryRefs}) {

  const [toggleInterrogatoryView, setToggleInterrogaroyView] = useState(false);
  const interrogaroyRef = useRef();

  function toggleInterrogatoryClass(e){
    interrogaroyRef.current.classList.toggle('hidden');
    setToggleInterrogaroyView(!toggleInterrogatoryView);
  }


  return (
    <article className='flex flex-wrap w-full justify-center bg-white'>
        <div className='flex w-full justify-around items-center flex-row p-4'>
            <h5 className='w-2/4 text-start text-sky-700 text-base sm:text-xl font-bold'>Interrogatory</h5>
            <span className='bg-transparent border-none text-2xl font-bold text-sky-700' onClick={toggleInterrogatoryClass}>{toggleInterrogatoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>
        <InterrogatoryOptions interrogaroyRef={interrogaroyRef}  interrogatoryRefs={interrogatoryRefs} />
    </article>
  )
}

export default Interrogatory