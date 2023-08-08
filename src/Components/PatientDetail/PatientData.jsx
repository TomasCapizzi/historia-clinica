import React from 'react';
import moment from "moment";

function PatientData({patient}) {
  return (
    <ul className='text-cyan-500 pt-3 flex w-full justify-center'>
        <li className='mb-1 ml-1 list-none text-sm sm:text-base'>{'Age: ' + patient[0].interrogatory.age}</li>
        <li className='mb-1 ml-1 list-none text-sm sm:text-base'>{'Sex: ' +  patient[0].interrogatory.sex}</li>
        <li className='mb-1 ml-1 list-none text-sm sm:text-base'>{'Date: '+ moment(patient[0].interrogatory.date.toDate()).format("MMM Do YY")}</li>
    </ul>
  )
}

export default PatientData