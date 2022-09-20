import React from 'react'

function InterrogatoryOptions({interrogaroyRef, interrogatoryRefs}) {
  return (
    <article ref={interrogaroyRef} className='interrogatory-options'>
        <label htmlFor="">Name</label>
        <input type="text" ref={interrogatoryRefs.nameRef} required/>
        <label htmlFor="">Sex</label>
        <select name="sex" ref={interrogatoryRefs.sexRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label htmlFor="">Age</label>
        <input type="number" ref={interrogatoryRefs.ageRef} required/>
        <article className='form-consult'>
            <label htmlFor="">Reason of consulting</label>
            <textarea name="" ref={interrogatoryRefs.reasonConsultingRef} cols="30" rows="10"></textarea>
            <label htmlFor="">Actual disease</label>
            <input type="text"ref={interrogatoryRefs.actualDiseaseRef} />
        </article>
    </article>
  )
}

export default InterrogatoryOptions