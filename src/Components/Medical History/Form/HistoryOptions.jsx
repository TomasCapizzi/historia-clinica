import React from 'react';

function HistoryOptions({historyRef, historyRefs}) {

  return (
    <article className='hidden flex-wrap items-center w-4/5 mt-3' ref={historyRef} >
      <div className='flex flex-col w-4/5 justify-center'>
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Physiological</label>
        <input type="text" className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' ref={historyRefs.physiologicalRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Pathological</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.pathologicalRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Gynecology and obstetrics</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.gynecologyRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Pathology</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.pathologyRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Abortions</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.abortionsRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Surgical interventions</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.surgicalInterventionsRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Pharmacological treatments</label>
        <input type="text" className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' ref={historyRefs.pharmacologicalTreatRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Intoxications</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text"  ref={historyRefs.intoxicationsRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Hereditary History</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base' type="text" ref={historyRefs.hereditaryRef} />
        <label className='text-white font-medium text-sm xs:text-base' htmlFor="">Habits</label>
        <input className='bg-cyan-100 rounded border-none p-1 xs:p-2 text-sm xs:text-base mb-3' type="text" ref={historyRefs.habitsRef} />
      </div>
    </article>
  )
}

export default HistoryOptions