import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React,{useEffect, useRef, useState} from "react";

import {FaTrash} from 'react-icons/fa';
import {IoChevronBackSharp} from 'react-icons/io5';
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import moment from "moment";
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
            <section className='patient-detail'>    
                <Link to='/records-list'><IoChevronBackSharp className='back-page'/></Link>
                <FaTrash onClick={deleteRecord} className='delete-btn'/>
                
                {
                    load ? 
                        <section className='detail-container'>
                            <h3>{patient[0].interrogatory.name}</h3>
                            <ul className='detail-info'>
                                <li>{'Age: ' + patient[0].interrogatory.age}</li>
                                <li>{'Sex: ' +  patient[0].interrogatory.sex}</li>
                                <li>{'Date: '+ moment(patient[0].interrogatory.date.toDate()).format("MMM Do YY")}</li>
                            </ul>

                            <div className='personal-history'>
                                <div className='header'>
                                    <h4>Personal History</h4>
                                    <span onClick={toggleHistoryClass}>{toggleHistoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
                                </div>
                                <ul ref={historyRef}>
                                    <li>{'Abortions: ' + patient[0].personalHistory.abortions}</li>
                                    <li>{'Gynecology: ' + patient[0].personalHistory.gynecology}</li>
                                    <li>{'Habits: ' + patient[0].personalHistory.habits}</li>
                                    <li>{'Hereditary: ' + patient[0].personalHistory.hereditary}</li>
                                    <li>{'Intoxications: ' + patient[0].personalHistory.intoxications}</li>
                                    <li>{'Pathological: ' + patient[0].personalHistory.pathological}</li>
                                    <li>{'Pathology: ' + patient[0].personalHistory.pathology}</li>
                                    <li>{'PharmacologicalTreat: ' + patient[0].personalHistory.pharmacologicalTreat}</li>
                                    <li>{'Physiological: ' + patient[0].personalHistory.physiological}</li>
                                    <li>{'Surgical Interventions: ' + patient[0].personalHistory.surgicalInterventions}</li>
                                </ul>
                            </div>

                            <div className='physical-exam'>
                                <div className='header'>
                                    <h4>Physical Exam</h4>
                                    <span onClick={toggleExamsClass}>{toggleExamsView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
                                </div>              
                                
                                <ul className='options' ref={examsRef} >
                                    <li>{'Abdomen: ' + patient[0].physicalExam.abdomen}</li>
                                    <li>{'Cardiovascular System: ' + patient[0].physicalExam.cardiovascularSystem}</li>
                                    <li>{'Genitals: ' + patient[0].physicalExam.genitals}</li>
                                    <li>{'Head: ' + patient[0].physicalExam.head}</li>
                                    <li>{'Nervous System: ' + patient[0].physicalExam.nervousSystem}</li>
                                    <li>{'Skin: ' + patient[0].physicalExam.skin}</li>
                                    <li>{'Torax: ' + patient[0].physicalExam.torax}</li>
                                    <li>{'Vital Signs: ' + patient[0].physicalExam.vitalSigns}</li>
                                </ul>
                            </div>

                            <div>
                                <h3>Final Diagnosis</h3>
                                <p>{patient[0].finalDiagnosis}</p>
                                <button className='btn1'><span>Finish Diagnosis</span></button>
                            </div>

                        </section>
                    :
                        <Spinner/>

                } 
            </section>
            
            :

            <div>
                <p>Record Deleted from database</p>
            </div>
            
            }
        
        </> 
    )
}