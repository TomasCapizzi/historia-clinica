import React,{useState, useEffect} from "react";
import Spinner from "../Spinner";
import { getAuth } from "@firebase/auth";
import { app, db } from "../../Firebase/firebase";
import Patient from "./Patient";
import {BsSearch} from 'react-icons/bs';
import PatientSearch from "./PatientSearch";
import {IoChevronBackSharp} from 'react-icons/io5';
import { Link } from "react-router-dom";


export default function RecordsList(){

    const [load, setLoad] = useState(false);
    const [patients, setPatients] = useState([]);
    const [patientsFilter, setPatientsFilter] = useState([])
    const auth = getAuth(app)

    function getList(user){
        const list = db.collection('records');
        list.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    })
                )
                setPatients(data.filter(item => item.uid === user.currentUser.uid))
                setLoad(true)
            }
        )
    }

    function filterPatients(){
        const filter = document.getElementById('filter').value;
        if(filter.length >0){
            setPatientsFilter(patients.filter(item => item.interrogatory.name.toLowerCase().includes(filter)))
        } else{
            setPatientsFilter([])
        }
        
    }


    useEffect(()=>{
        getList(auth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <section className='records-list'>
            <Link to='/'><IoChevronBackSharp className='back-page'/></Link>
            <div className='search-container'>
                <input type="text" id='filter' onChange={filterPatients}/>
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
                        <button><Link to='/form'>Add +</Link></button>
                    </div>

                    : <Spinner/>
                }
            </div>

        </section>
    )
}