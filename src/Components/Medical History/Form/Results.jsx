import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React, {useRef, useState} from 'react';

import Exams from './Exams';

function Results({examRefs}) {

  const [toggleExamsView, setToggleExamsView] = useState(false);
  const examsRef = useRef();

  function toggleExamsClass(){
    examsRef.current.classList.toggle('hidden');
    setToggleExamsView(!toggleExamsView)
  }
  return (
    <article className='flex flex-wrap w-full p-4 flex-col bg-cyan-100 justify-center items-center'>                    
        <div className='flex w-full justify-around items-center flex-row'>
            <h5 className='w-2/4 font-bold text-start text-sky-700 text-base sm:text-xl'>Physical Exams</h5>
            <span className='bg-transparent border-none font-bold text-xl text-sky-700' onClick={toggleExamsClass}>{toggleExamsView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>                
        <Exams examsRef={examsRef}  examRefs={examRefs} />
    </article>
  )
}

export default Results