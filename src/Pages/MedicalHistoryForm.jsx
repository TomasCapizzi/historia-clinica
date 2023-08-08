import React,{useEffect, useRef, useState} from "react";
import { app, db } from "../Firebase/firebase";

import BackPage from "../Components/BackPage";
import Diagnosis from '../Components/Medical History/Form/Diagnosis';
import FormContainer from "../Components/Medical History/Form/FormContainer";
import FormSuccess from '../Components/Medical History/Form/FormSuccess';
import { getAuth } from "@firebase/auth";
import useExamsForm from "../Hooks/RecordForm/useExamsForm";
import useHistoryForm from "../Hooks/RecordForm/useHistoryForm";
import useInterrogatoryForm from "../Hooks/RecordForm/useInterrogatoryForm";

export default function MedicalHistoryForm(){   

    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const [recordHandler, setRecordHandler] = useState(true);

    const nameRef = useRef();
    const sexRef = useRef();
    const ageRef = useRef();
    const reasonConsultingRef = useRef();
    const actualDiseaseRef = useRef();

    const interrogatoryRefs = {nameRef,sexRef, ageRef, reasonConsultingRef,actualDiseaseRef}

    const physiologicalRef = useRef();
    const pathologicalRef = useRef();
    const gynecologyRef = useRef();
    const pathologyRef = useRef();
    const abortionsRef = useRef();
    const surgicalInterventionsRef = useRef();
    const pharmacologicalTreatRef = useRef();
    const intoxicationsRef = useRef();
    const hereditaryRef = useRef();
    const habitsRef = useRef();

    const historyRefs = {
        physiologicalRef,
        pathologicalRef,
        gynecologyRef,
        pathologyRef,
        abortionsRef,
        surgicalInterventionsRef,
        pharmacologicalTreatRef,
        intoxicationsRef,
        hereditaryRef,
        habitsRef
    }

    const vitalSignsRef = useRef();
    const skinRef = useRef();
    const headRef = useRef();
    const toraxRef = useRef();
    const cardiovascularSystemRef = useRef();
    const abdomenRef = useRef();
    const genitalsRef = useRef();
    const nervousSystemRef = useRef();

    const examRefs = {
        vitalSignsRef,
        skinRef,
        headRef,
        toraxRef,
        cardiovascularSystemRef,
        abdomenRef,
        genitalsRef,
        nervousSystemRef
    }

    const {getInterrogatoryData} = useInterrogatoryForm({interrogatoryRefs});
    const {getHistoryData} = useHistoryForm({historyRefs});
    const {getExamData} = useExamsForm({examRefs});

    const diagnosisRef = useRef();

    function createRecord(e){
        e.preventDefault();
        const recordData = {
            uid: user.uid,
            interrogatory: getInterrogatoryData(),
            personalHistory: getHistoryData(),
            physicalExam:getExamData(),
            finalDiagnosis: diagnosisRef.current.value
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

    useEffect(()=>{
        setUser(auth.currentUser)
    },[auth])

    return (
        <>
        {
            recordHandler ? 
                <form action="" className='flex flex-col flex-wrap w-full items-center min-h-screen relative'>
                    <BackPage url='/'/>
                    <h1 className="text-sky-700 text-xl sm:text-2xl font-bold mb-11">Create new record</h1>
                    <FormContainer interrogatoryRefs={interrogatoryRefs} historyRefs={historyRefs} examRefs={examRefs} />
                    <Diagnosis createRecord={createRecord} diagnosisRef={diagnosisRef} />
                </form>
            :   <FormSuccess/>
        }
        </>
    )

}