import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';

import React from 'react'

function PersonalHistory({toggleHistoryClass, toggleHistoryView,historyRef, patient}) {
  return (
    <div className='bg-cyan-200 w-full p-2 mt-2 sm:mt-4'>
        <div className='flex w-full justify-around items-center'>
            <h4 className='w-5/6 text-sky-600 text-lg xs:text-xl font-semibold'>Personal History</h4>
            <span onClick={toggleHistoryClass} className='bg-transparent border-none text-xl font-bold text-sky-600'>{toggleHistoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
        </div>
        <ul ref={historyRef} className='w-full pt-3 hidden flex flex-col'>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Abortions: ' + patient[0].personalHistory.abortions}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Gynecology: ' + patient[0].personalHistory.gynecology}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Habits: ' + patient[0].personalHistory.habits}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Hereditary: ' + patient[0].personalHistory.hereditary}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Intoxications: ' + patient[0].personalHistory.intoxications}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Pathological: ' + patient[0].personalHistory.pathological}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Pathology: ' + patient[0].personalHistory.pathology}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'PharmacologicalTreat: ' + patient[0].personalHistory.pharmacologicalTreat}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base'>{'Physiological: ' + patient[0].personalHistory.physiological}</li>
            <li className='mb-1 ml-1 list-none text-sky-600 text-sm xs:text-base pb-2'>{'Surgical Interventions: ' + patient[0].personalHistory.surgicalInterventions}</li>
        </ul>
    </div>
  )
}

export default PersonalHistory