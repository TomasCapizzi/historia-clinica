import React from 'react'

function Diagnosis({createRecord, diagnosisRef}) {
  return (
    <article className='form-diagnosis'>
        <div>
            <h5 htmlFor="">Final Diagnosis</h5>
            <input type="text" ref={diagnosisRef} required/>
        </div>
        <button className='btn-submit-form' onClick={(e)=> createRecord(e)}>Save</button>
    </article>
  )
}

export default Diagnosis;