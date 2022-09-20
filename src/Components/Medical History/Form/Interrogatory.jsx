import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React,{useRef, useState} from 'react';

import InterrogatoryOptions from './InterrogatoryOptions';

function Interrogatory({interrogatoryRefs}) {

  const [toggleInterrogatoryView, setToggleInterrogaroyView] = useState(false);
  const interrogaroyRef = useRef();

  function toggleInterrogatoryClass(e){
    interrogaroyRef.current.classList.toggle('on');
    setToggleInterrogaroyView(!toggleInterrogatoryView);
  }


  return (
    <article className='form-interrogatory'>
        <div className='header'>
            <h5>Interrogatory</h5>
            <span onClick={toggleInterrogatoryClass}>{toggleInterrogatoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>
        <InterrogatoryOptions interrogaroyRef={interrogaroyRef}  interrogatoryRefs={interrogatoryRefs} />
    </article>
  )
}

export default Interrogatory