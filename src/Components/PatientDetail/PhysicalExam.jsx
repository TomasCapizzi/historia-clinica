import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';

import React from 'react'

function PhysicalExam({toggleExamsClass, toggleExamsView, patient, examsRef}) {
  return (
    <div className='bg-cyan-500 w-full p-2'>
        <div className='flex w-full justify-around items-center flex-row'>
            <h4 className='w-5/6 text-white text-lg xs:text-xl font-semibold'>Physical Exam</h4>
            <span className='bg-transparent border-none text-xl font-bold text-white' onClick={toggleExamsClass}>{toggleExamsView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>              
        
        <ul className='w-full pt-3 hidden flex flex-col' ref={examsRef} >
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Abdomen: ' + patient[0].physicalExam.abdomen}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Cardiovascular System: ' + patient[0].physicalExam.cardiovascularSystem}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Genitals: ' + patient[0].physicalExam.genitals}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Head: ' + patient[0].physicalExam.head}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Nervous System: ' + patient[0].physicalExam.nervousSystem}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Skin: ' + patient[0].physicalExam.skin}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Torax: ' + patient[0].physicalExam.torax}</li>
            <li className='mb-1 ml-1 list-none text-white text-sm xs:text-base'>{'Vital Signs: ' + patient[0].physicalExam.vitalSigns}</li>
        </ul>
    </div>
  )
}

export default PhysicalExam