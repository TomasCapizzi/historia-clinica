import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React, {useRef, useState} from 'react';

import HistoryOptions from './HistoryOptions';

function History({historyRefs}) {

  const [toggleHistoryView, setToggleHistoryView] = useState(false);
  const historyRef = useRef()

  function toggleHistoryClass(){
    historyRef.current.classList.toggle('on');
    setToggleHistoryView(!toggleHistoryView)
}

  return (
    <article className='form-history'>
      <div  className='header'>
          <h5>Personal History</h5>
          <span onClick={toggleHistoryClass}>{toggleHistoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
      </div>
      <HistoryOptions historyRef={historyRef} historyRefs={historyRefs} />
  </article>
  )
}

export default History