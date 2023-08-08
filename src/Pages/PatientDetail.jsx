import React,{useEffect, useRef, useState} from "react";

import BackPage from '../Components/BackPage'
import Diagnosis from '../Components/PatientDetail/Diagnosis'
import {FaTrash} from 'react-icons/fa';
import PatientData from '../Components/PatientDetail/PatientData';
import PersonalHistory from '../Components/PatientDetail/PersonalHistory';
import PhysicalExam from '../Components/PatientDetail/PhysicalExam';
import RecordDeleted from '../Components/PatientDetail/RecordDeleted';
import Spinner from "../Components/Spinner";
import useDeleterecord from '../Hooks/useDeleterecord';
import useGetRecord from '../Hooks/useGetRecord';
import { useParams } from "react-router";
import useToggleClass from '../Hooks/useToggleClass';

export default function PatientDetail(){

    const {id} = useParams();

    const [patient, setPatient] = useState([])
    const [load, setLoad] = useState(false);
    const [handleRecord, setHandleRecord] = useState(true);

    const [toggleHistoryView, setToggleHistoryView] = useState(false);
    const [toggleExamsView, setToggleExamsView] = useState(false);

    const historyRef = useRef();
    const examsRef = useRef();

    const {getData} = useGetRecord({setPatient, setLoad});

    const {toggleExamsClass, toggleHistoryClass} = useToggleClass({historyRef, setToggleHistoryView,toggleHistoryView, examsRef, setToggleExamsView,toggleExamsView});

    const {deleteRecord} = useDeleterecord({patient, setHandleRecord})
 
    //Update record
    /*
    function updateRecord(){
        db.collection('records').doc(patient[0].id).update(
            {

            }
        )
    }
    */

    useEffect(()=>{
        getData(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[load])

    return(
        <>        
            {
                handleRecord ? 
                    <section className='flex w-full h-screen justify-center relative'>
                        <BackPage url='/records-list'/>
                        <FaTrash onClick={deleteRecord} className='absolute right-4 top-3 text-lg xs:text-xl text-cyan-700 cursor-pointer'/>
                        {
                            load ? 
                                <section className='flex flex-wrap w-1024 justify-start flex-col items-center'>
                                    <h3 className='w-full text-center text-cyan-500 font-bold text-xl sm:text-2xl'>{patient[0].interrogatory.name}</h3>
                                    <PatientData patient={patient} />
                                    <PersonalHistory toggleHistoryClass={toggleHistoryClass} toggleHistoryView={toggleHistoryView} historyRef={historyRef} patient={patient}/>
                                    <PhysicalExam toggleExamsClass={toggleExamsClass} toggleExamsView={toggleExamsView} patient={patient} examsRef={examsRef}/>
                                    <Diagnosis patient={patient}/>
                                </section>
                            :
                                <Spinner/>
                        } 
                    </section> : 
                    <RecordDeleted/>            
            }
        
        </> 
    )
}