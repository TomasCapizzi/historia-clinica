import React from 'react';

function HistoryOptions({historyRef, historyRefs}) {

  return (
    <div className='options' ref={historyRef} >
        <label htmlFor="">Physiological</label>
        <input type="text" ref={historyRefs.physiologicalRef} />
        <label htmlFor="">Pathological</label>
        <input type="text" ref={historyRefs.pathologicalRef} />
        <label htmlFor="">Gynecology and obstetrics</label>
        <input type="text" ref={historyRefs.gynecologyRef} />
        <label htmlFor="">Pathology</label>
        <input type="text" ref={historyRefs.pathologyRef} />
        <label htmlFor="">Abortions</label>
        <input type="text" ref={historyRefs.abortionsRef} />
        <label htmlFor="">Surgical interventions</label>
        <input type="text" ref={historyRefs.surgicalInterventionsRef} />
        <label htmlFor="">Pharmacological treatments</label>
        <input type="text" ref={historyRefs.pharmacologicalTreatRef} />
        <label htmlFor="">Intoxications</label>
        <input type="text"  ref={historyRefs.intoxicationsRef} />
        <label htmlFor="">Hereditary History</label>
        <input type="text" ref={historyRefs.hereditaryRef} />
        <label htmlFor="">Habits</label>
        <input type="text" ref={historyRefs.habitsRef} />
    </div>
  )
}

export default HistoryOptions