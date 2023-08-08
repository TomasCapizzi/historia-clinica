import React from 'react'

function Exams({examsRef, examRefs}) {
  const {
    vitalSignsRef,
    skinRef,
    headRef,
    toraxRef,
    cardiovascularSystemRef,
    abdomenRef,
    genitalsRef,
    nervousSystemRef
  } = examRefs;

  return (
    <article className='hidden items-center flex-wrap w-4/5 mt-3' ref={examsRef} >
      <div className='flex flex-col w-4/5 justify-center text-sm xs:text-base'>
      <label className='text-sky-700 font-medium' htmlFor="">Vital Signs</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={vitalSignsRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Skin</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={skinRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Head</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={headRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Torax</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={toraxRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Cardiovascular System</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={cardiovascularSystemRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Abdomen</label>
        <input className='w-4/5 p-1 xs:p-2'  type="text" ref={abdomenRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Genitals</label>
        <input className='w-4/5 p-1 xs:p-2' type="text" ref={genitalsRef} />
        <label className='text-sky-700 font-medium' htmlFor="">Nervous System</label>
        <input className='w-4/5 mb-3 p-1 xs:p-2' type="text" ref={nervousSystemRef} />  
      </div>                    
    </article>
  )
}

export default Exams