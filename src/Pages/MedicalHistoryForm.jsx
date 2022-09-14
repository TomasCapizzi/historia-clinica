import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import React,{useEffect, useState} from "react";
import { app, db } from "../Firebase/firebase";

import {IoArrowBack} from 'react-icons/io5';
import {IoChevronBackSharp} from 'react-icons/io5';
import { Link } from "react-router-dom";
import { getAuth } from "@firebase/auth";

export default function MedicalHistoryForm(){   

    //const {user} = useContext(UserContext);

    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const [recordHandler, setRecordHandler] = useState(true);    
    
    const [toggleHistoryView, setToggleHistoryView] = useState(false);
    const [toggleExamsView, setToggleExamsView] = useState(false);
    const [toggleInterrogatoryView, setToggleInterrogaroyView] = useState(false);
    
    const history = document.getElementById('history');
    const exams = document.getElementById('exams');
    const int = document.getElementById('interrogatory');

    function createRecord(e){
        e.preventDefault();

        const recordData = {
            uid: user.uid,
            interrogatory: {  
            name: document.getElementById('name').value,
            date: new Date(),
            sex: document.getElementById('sex').value,
            age: document.getElementById('age').value,
            reasonGonsulting: document.getElementById('reason-consulting').value,
            actualDisease: document.getElementById('actual-disease').value
            },
            personalHistory: {
                physiological: document.getElementById('physiological').value,
                pathological: document.getElementById('pathological').value,
                gynecology: document.getElementById('gynecology').value ,
                pathology: document.getElementById('pathology').value,
                abortions: document.getElementById('abortions').value,
                surgicalInterventions: document.getElementById('surgicalInterventions').value,
                pharmacologicalTreat: document.getElementById('pharmacological').value ,
                intoxications: document.getElementById('intoxications').value,
                hereditary: document.getElementById('hereditary').value ,
                habits: document.getElementById('habits').value
            },
            physicalExam:{
                vitalSigns: document.getElementById('vitalSigns').value,
                skin: document.getElementById('skin').value,
                head: document.getElementById('head').value,
                torax: document.getElementById('torax').value,
                cardiovascularSystem: document.getElementById('cardiovascularSystem').value,
                abdomen: document.getElementById('abdomen').value,
                genitals: document.getElementById('genitals').value,
                nervousSystem: document.getElementById('nervousSystem').value,
            },
            finalDiagnosis: document.getElementById('finalDiagnosis').value
        }
        
        console.log(recordData);

        if(recordData.interrogatory.name === '' || recordData.interrogatory.age === '' || recordData.interrogatory.sex === '' || recordData.interrogatory.reasonGonsulting === '' || recordData.presumptiveDiagnosis === ''){
            alert('There´s missing information')
            setRecordHandler(true);
        } else{
            db.collection('records').add(recordData);
            setRecordHandler(false);
        }   

    }

    function toggleInterrogatoryClass(e){
        int.classList.toggle('on');
        setToggleInterrogaroyView(!toggleInterrogatoryView);
    }
    
    function toggleHistoryClass(){
        history.classList.toggle('on');
        setToggleHistoryView(!toggleHistoryView)
    }

    function toggleExamsClass(){
        exams.classList.toggle('on');
        setToggleExamsView(!toggleExamsView)
    }

    useEffect(()=>{
        setUser(auth.currentUser)
    },[auth])

    return (
        <>
        {
            recordHandler ? 
        <form action="" className='record-form'>
            <Link to='/'><IoChevronBackSharp className='back-page'/></Link>
            <h1>Create new record</h1>
            <article className='form-interrogatory'>
                <div className='header'>
                    <h5>Interrogatory</h5>
                    <span onClick={toggleInterrogatoryClass}>{toggleInterrogatoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
                </div>
                <article id='interrogatory' className='interrogatory-options'>
                    <label htmlFor="">Name</label>
                    <input type="text" id='name' required/>
                    <label htmlFor="">Sex</label>
                    <select name="" id="sex">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                        <label htmlFor="">Age</label>
                        <input type="number" id='age' required/>
                    
                    <article className='form-consult'>
                        <label htmlFor="">Reason of consulting</label>
                        <textarea name="" id="reason-consulting" cols="30" rows="10"></textarea>
                        <label htmlFor="">Actual disease</label>
                        <input type="text"id='actual-disease' />
                    </article>
                </article>
            </article>


            <article className='form-history'>
                <div  className='header'>
                    <h5>Personal History</h5>
                    <span onClick={toggleHistoryClass}>{toggleHistoryView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
                </div>
                <div className='options' id='history'>
                    <label htmlFor="">Physiological</label>
                    <input type="text" id='physiological' />
                    <label htmlFor="">Pathological</label>
                    <input type="text" id='pathological' />
                    <label htmlFor="">Gynecology and obstetrics</label>
                    <input type="text" id='gynecology' />
                    <label htmlFor="">Pathology</label>
                    <input type="text" id='pathology' />
                    <label htmlFor="">Abortions</label>
                    <input type="text" id='abortions' />
                    <label htmlFor="">Surgical interventions</label>
                    <input type="text" id='surgicalInterventions' />
                    <label htmlFor="">Pharmacological treatments</label>
                    <input type="text" id='pharmacological' />
                    <label htmlFor="">Intoxications</label>
                    <input type="text"  id='intoxications'/>
                    <label htmlFor="">Hereditary History</label>
                    <input type="text" id='hereditary' />
                    <label htmlFor="">Habits</label>
                    <input type="text" id='habits' />
                </div>
            </article>
            <article className='form-results'>
                
                <div className='header'>
                    <h5>Physical Exams</h5>
                    <span  onClick={toggleExamsClass}>{toggleExamsView ? <FiChevronsUp/> : <FiChevronsDown/>}</span>
                </div>                
                <div className='form-exams' id='exams'>
                    <label htmlFor="">Vital Signs</label>
                    <input type="text" id='vitalSigns' />
                    <label htmlFor="">Skin</label>
                    <input type="text" id='skin' />
                    <label htmlFor="">Head</label>
                    <input type="text" id='head' />
                    <label htmlFor="">Torax</label>
                    <input type="text" id='torax' />
                    <label htmlFor="">Cardiovascular System</label>
                    <input type="text" id='cardiovascularSystem' />
                    <label htmlFor="">Abdomen</label>
                    <input type="text" id='abdomen' />
                    <label htmlFor="">Genitals</label>
                    <input type="text" id='genitals' />
                    <label htmlFor="">Nervous System</label>
                    <input type="text" id='nervousSystem' />                    
                </div>
            </article>
            <article className='form-diagnosis'>
                <div>
                        <h5 htmlFor="">Final Diagnosis</h5>
                        <input type="text" id='finalDiagnosis' required/>
                    </div>
                    <button className='btn-submit-form' onClick={(e)=> createRecord(e)}>Save</button>
            </article>

        </form>

        :
        <article className='form-success'>
            <h5>Medical record stored</h5>
            <button><Link to='/'>Go back <IoArrowBack/> </Link></button>
        </article>


        }
        </>
    )

}