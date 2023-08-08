import React,{useEffect, useRef, useState} from "react";

import BackPage from "../Components/BackPage";
import ListPatients from "../Components/RecordsList/ListPatients";
import Search from "../Components/RecordsList/Search";
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
        <section className='flex w-11/12 xl:w-full flex-wrap text-center items-center flex-col relative h-screen'>
            <BackPage url='/'/>
            <Search filterRef={filterRef} filterPatients={filterPatients} patientsFilter={patientsFilter}/>
            <h3 className="w-full text-cyan-500 font-bold text-xl lg:text-3xl my-7">Patients</h3>
            <ListPatients load={load} patients={patients} />
        </section>
    )
}