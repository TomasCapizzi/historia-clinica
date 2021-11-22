import React,{useState, useEffect} from "react";
import Spinner from "../Spinner";
import { getAuth } from "@firebase/auth";
import { app, db } from "../../Firebase/firebase";
import Patient from "./Patient";
import {BsSearch} from 'react-icons/bs';


export default function RecordsList(){

    const [load, setLoad] = useState(false);
    const [patients, setPatients] = useState([]);
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
                console.log(user.currentUser)
                setPatients(data.filter(item => item.uid === user.currentUser.uid))
                setLoad(true)
            }
        )
    }


    useEffect(()=>{
        //setUser(auth.currentUser);
        getList(auth)
    },[])

    return(
        <section className='records-list'>
            <div className='search-container'>
                <input type="text" />
                <BsSearch/>
            </div>
            <h3>Patients</h3>
            <div className='patients-container'>
                { load ?
                    patients && patients.map(
                        item => <Patient key={item.id} patient={item}/>
                    )
                    :
                    <Spinner/>
                }
            </div>

        </section>
    )
}