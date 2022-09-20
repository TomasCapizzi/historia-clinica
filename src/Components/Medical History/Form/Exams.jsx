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
    <div className='form-exams' ref={examsRef} >
        <label htmlFor="">Vital Signs</label>
        <input type="text" ref={vitalSignsRef} />
        <label htmlFor="">Skin</label>
        <input type="text" ref={skinRef} />
        <label htmlFor="">Head</label>
        <input type="text" ref={headRef} />
        <label htmlFor="">Torax</label>
        <input type="text" ref={toraxRef} />
        <label htmlFor="">Cardiovascular System</label>
        <input type="text" ref={cardiovascularSystemRef} />
        <label htmlFor="">Abdomen</label>
        <input type="text" ref={abdomenRef} />
        <label htmlFor="">Genitals</label>
        <input type="text" ref={genitalsRef} />
        <label htmlFor="">Nervous System</label>
        <input type="text" ref={nervousSystemRef} />                    
    </div>
  )
}

export default Exams