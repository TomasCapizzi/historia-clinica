import React from 'react'

function Diagnosis({createRecord, diagnosisRef}) {
  return (
    <article className='flex flex-wrap w-full flex-col mt-2 items-center'>
        <div className='w-full items-center flex flex-wrap flex-col mb-20'>
            <h5 htmlFor="" className='text-lg xs:text-xl font-bold text-center mb-5 text-sky-700' >Final Diagnosis</h5>
            <input className='bg-cyan-100 w-9/12 sm:w-96 p-2 rounded-lg text-sm xs:text-base' type="text" ref={diagnosisRef} required/>
        </div>
        <button className='inline-flex w-40 sm:w-60 h-10 sm:h-14 text-sm xs:text-base border-none rounded-lg cursor-pointer items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-600 after:content-[""] after:w-full after:h-full after:bg-cyan-300 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0 mb-5' onClick={(e)=> createRecord(e)}><span className="flex items-center justify-between z-20 relative transition-all delay-300 text-white">Save</span></button>
    </article>
  )
}

export default Diagnosis;