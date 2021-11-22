import moment from "moment";
import React,{useState, useEffect} from "react";
import { useParams} from "react-router";
import {db} from '../../Firebase/firebase'
import Spinner from "../Spinner";

export default function PatientDetail(){

    const {id} = useParams();

    const [patient, setPatient] = useState([])
    const [load, setLoad] = useState(false);
 
    function getData(){
        const list = db.collection('records');
        list.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    }
                    )
                )
                setPatient(data.filter(item => item.id === id))
                console.log(data.filter(item => item.id === id))
                setLoad(true);
            }
        )
    }

    // Ver como modificar un item de la colleción. Lo mas factible sería borrando el item y agregarlo nuevamente con la misma data para así sumarle el finalDiagnosis


    useEffect(()=>{
        getData();
    },[])

    return(
        <section className='patient-detail'>
            {
                load ? 
                    <article className='detail-container'>
                        <h3>{patient[0].interrogatory.name}</h3>
                        <ul className='detail-info'>
                            <li>{'Age: ' + patient[0].interrogatory.age}</li>
                            <li>{'Sex: ' +  patient[0].interrogatory.sex}</li>
                            <li>{'Date: '+ moment(patient[0].interrogatory.date.toDate()).format("MMM Do YY")}</li>
                        </ul>
                        <div className='personal-history'>
                        <h4>Personal History</h4>
                            <ul>
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
                            <h4>Physical Exam</h4>
                            <ul>
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
                            <h3>Presunptive Diagnosis</h3>
                            <p>{patient[0].presumptiveDiagnosis}</p>
                            <button>Finish Diagnosis</button>
                        </div>

                    </article>
                :
                    <Spinner/>
            }
        </section>
    )
}