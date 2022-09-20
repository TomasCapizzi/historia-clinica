import {GrAddCircle} from 'react-icons/gr';
import React from 'react';

function MissingInfo({changeState}) {
  return (
    <div className="complete-info">
        <p>Your user is not complete</p>
        <button onClick={changeState} className="btn1"><span>Finish user<GrAddCircle/></span></button>
    </div>
  )
}

export default MissingInfo;