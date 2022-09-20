import React,{useEffect, useRef, useState} from "react";

import {BsSearch} from 'react-icons/bs';
import {IoChevronBackSharp} from 'react-icons/io5';
import { Link } from "react-router-dom";
import Patient from "../Components/Medical History/Patient";
import PatientSearch from "../Components/Medical History/PatientSearch";
import Spinner from "../Components/Spinner";
import { app } from "../Firebase/firebase";
import { getAuth } from "@firebase/auth";
import useFilterRecords from "../Hooks/useFilterRecords";
import useGetRecordList from "../Hooks/useGetRecordList";

export default function RecordsList(){

    const [load, setLoad] = useState(false);
    const [patients, setPatients] = useState([]);
    const [patientsFilter, setPatientsFilter] = useState([]);
    const auth = getAuth(app);
    const {getList} = useGetRecordList({setPatients, setLoad});
    const filterRef = useRef();
    const {filterPatients} = useFilterRecords({filterRef, patients, setPatientsFilter});
    
    useEffect(()=>{
        getList(auth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <section className='records-list'>
            <Link to='/'><IoChevronBackSharp className='back-page'/></Link>
            <div className='search-container'>
                <input type="text" ref={filterRef} onChange={filterPatients}/>
                <BsSearch/>
            </div>
            {
                patientsFilter.length >0 && <div className='search-results'>
                    {patientsFilter.map(
                    item => <PatientSearch key={item.id} patient={item}/>
                
                    )}
                    </div>
            }
            <h3>Patients</h3>
            <div className='patients-container'>
                { load ?
                    (patients.length>0) ? patients.map(
                        item => <Patient key={item.id} patient={item}/>
                    ) : 
                    <div className='no-patients'>
                        <p>You haven´t add any patients</p>
                        <button className="btn2"><Link to='/form'><span>Add +</span></Link></button>
                    </div>
                    : <Spinner/>
                }
            </div>

        </section>
    )
}