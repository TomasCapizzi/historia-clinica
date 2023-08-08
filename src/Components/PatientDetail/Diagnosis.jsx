import React from 'react'

function Diagnosis({patient}) {
  return (
    <div className='flex flex-col items-center w-full my-10'>
        <h3 className='font-bold text-base xs:text-lg
        text-sky-600'>Final Diagnosis</h3>
        <p className='text-lg xs:text-xl font-semibold text-cyan-500 mb-4'>{patient[0].finalDiagnosis}</p>
        <button className='inline-flex w-40 sm:w-60 h-10 sm:h-14 border-none rounded-lg cursor-pointer text-sm xs:text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-300 after:content-[""] after:w-full after:h-full after:bg-cyan-700 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><span className='z-20 relative transition-all delay-300 text-white'>Finish Diagnosis</span></button>
    </div>
  )
}

export default Diagnosis