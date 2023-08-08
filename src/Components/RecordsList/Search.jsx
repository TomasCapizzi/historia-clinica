import {BsSearch} from 'react-icons/bs';
import PatientSearch from '../Medical History/PatientSearch';
import React from 'react';

function Search({filterRef, filterPatients, patientsFilter}) {
  return (
    <>
      <div className='flex w-4/5 xl:w-1024 h-8 justify-center mt-3 items-center bg-cyan-100 p-1 rounded-md'>
          <input type="text" ref={filterRef} onChange={filterPatients} className='border-none bg-transparent'/>
          <BsSearch className="text-cyan-700 text-sm lg:text-xl"/>
      </div>
      {
        patientsFilter.length >0 && <div className='flex w-1024 max-h-44 bg-white border-2 border-cyan-300 border-solid rounded flex-wrap overflow-scroll items-center mt-2 mb-6 overflow-x-hidden'>
            {patientsFilter.map(
            item => <PatientSearch key={item.id} patient={item}/>
          
            )}
            </div>
        }
    </>
  )
}

export default Search