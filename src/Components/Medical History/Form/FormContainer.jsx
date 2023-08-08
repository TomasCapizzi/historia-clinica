import History from './History'
import Interrogatory from './Interrogatory'
import React from 'react'
import Results from './Results'

function FormContainer({interrogatoryRefs, historyRefs, examRefs}) {
  return (
    <div className="flex flex-col w-11/12 xl:w-1024 mb-8">
        <Interrogatory interrogatoryRefs={interrogatoryRefs} />
        <History historyRefs={historyRefs} />
        <Results examRefs={examRefs} />
    </div>
  )
}

export default FormContainer