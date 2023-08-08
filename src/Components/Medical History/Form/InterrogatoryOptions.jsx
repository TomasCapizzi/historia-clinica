import React from 'react'

function InterrogatoryOptions({interrogaroyRef, interrogatoryRefs}) {
  return (
    <article ref={interrogaroyRef} className='hidden flex-wrap w-4/5 mt-3'>
      <div className='flex flex-col'>
        <label className='text-sky-700 font-medium xs:mr-2 text-sm xs:text-base' htmlFor="">Name</label>
          <input className='rounded bg-cyan-100 border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={interrogatoryRefs.nameRef} required/>
          <label className='text-sky-700 font-medium mx-2 text-sm xs:text-base' htmlFor="">Sex</label>
          <select name="sex" ref={interrogatoryRefs.sexRef} className='bg-cyan-100 p-1 xs:p-2 border-none rounded'>
              <option className='text-sky-500 text-sm xs:text-base' value="male">Male</option>
              <option className='text-sky-500 text-sm xs:text-base' value="female">Female</option>
          </select>
          <label className='mx-2 text-sky-700 font-medium text-sm xs:text-base' htmlFor="">Age</label>
          <input type="number" className='rounded bg-cyan-100 border-none p-1 xs:p-2 text-sm xs:text-base' ref={interrogatoryRefs.ageRef} required/>
          <article className='flex flex-wrap w-4/5 flex-col mt-1 mb-3'>
              <label className='text-sky-700 font-medium text-sm xs:text-base' htmlFor="">Reason of consulting</label>
              <textarea name="" className='resize-none w-full h-10 border-none bg-cyan-100 rounded text-cyan-700 text-sm xs:text-base' ref={interrogatoryRefs.reasonConsultingRef} cols="30" rows="10"></textarea>
              <label className='text-sky-700 font-medium text-sm xs:text-base' htmlFor="">Actual disease</label>
              <input className='rounded bg-cyan-100 border-none p-1 xs:p-2 text-sm xs:text-base' type="text"ref={interrogatoryRefs.actualDiseaseRef} />
          </article>
      </div>
    </article>
  )
}

export default InterrogatoryOptions