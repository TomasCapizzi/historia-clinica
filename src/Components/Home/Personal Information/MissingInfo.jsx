import {FaPlus} from 'react-icons/fa';
import React from 'react';

function MissingInfo({changeState}) {
  return (
    <div className="flex justify-center flex-col items-center">
        <p className='text-cyan-600 font-medium text-sm xs:text-base sm:text-lg mb-2'>Your user is not complete</p>
        <button onClick={changeState} className='md:my-4 inline-flex w-40 md:w-60 h-10 md:h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-300 after:content-[""] after:w-full after:h-full after:bg-cyan-700 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><span className='flex items-center justify-around w-full z-20 relative transition-all delay-300 text-white text-sm md:text-xl'>Finish user<FaPlus className='text-white'/></span></button>
    </div>
  )
}

export default MissingInfo;