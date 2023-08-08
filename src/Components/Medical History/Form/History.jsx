import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React, {useRef, useState} from 'react';

import HistoryOptions from './HistoryOptions';

function History({historyRefs}) {

  const [toggleHistoryView, setToggleHistoryView] = useState(false);
  const historyRef = useRef()

  function toggleHistoryClass(){
    historyRef.current.classList.toggle('hidden');
    setToggleHistoryView(!toggleHistoryView)
}

  return (
    <article className='flex flex-wrap w-full flex-col p-4 bg-cyan-500 justify-center items-center'>
      <div  className='flex justify-around w-full items-center flex-row'>
          <h5 className='w-2/4 text-start font-bold text-base sm:text-xl text-white'>Personal History</h5>
          <span className='bg-transparent border-none text-2xl font-bold text-white' onClick={toggleHistoryClass}>{toggleHistoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
      </div>
      <HistoryOptions historyRef={historyRef} historyRefs={historyRefs} />
  </article>
  )
}

export default History