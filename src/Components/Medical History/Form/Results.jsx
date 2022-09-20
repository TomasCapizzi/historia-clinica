import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React, {useRef, useState} from 'react';

import Exams from './Exams';

function Results({examRefs}) {

  const [toggleExamsView, setToggleExamsView] = useState(false);
  const examsRef = useRef();

  function toggleExamsClass(){
    examsRef.current.classList.toggle('on');
    setToggleExamsView(!toggleExamsView)
  }
  return (
    <article className='form-results'>                    
        <div className='header'>
            <h5>Physical Exams</h5>
            <span  onClick={toggleExamsClass}>{toggleExamsView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>                
        <Exams examsRef={examsRef}  examRefs={examRefs} />
    </article>
  )
}

export default Results