import React from "react";
import { db } from '../../../Firebase/firebase';

export default function ExtraInfo({changeState, user}){

    const {uid, photoURL, displayName} = user    // Destructuring user

    function createUser(e){
        e.preventDefault()
        const specialty = document.getElementById('specialty').value;
        const userBirth = document.getElementById('user-birth').value;
        const userCollege = document.getElementById('user-college').value;

        if(specialty !== '' && userBirth !== '' && userCollege !== ''){
            const userData = {
                uid,
                photoURL,
                displayName,
                specialty: specialty,
                userBirth: userBirth,
                userCollege: userCollege
            }
            db.collection('users').add(userData)
        } else{
            alert('Missing info')
        }


        changeState();
    }

    return(        
        <form className='flex flex-col items-center'>
            <label htmlFor="" className="text-cyan-500 text-base md:text-lg">Birth</label>
            <input type="date" id='user-birth' className="bg-cyan-100 p-1 sm:p-2 w-60 text-sky-500 rounded-xl text-sm xs:text-base md:text-lg"/>
            <label htmlFor="" className="text-cyan-500 text-base md:text-lg">Specialty</label>
            <select name="" id="specialty" className="bg-cyan-100 p-1 sm:p-2 w-60 text-sky-500 rounded-xl text-sm xs:text-base md:text-lg">
                <option value="">Choose</option>
                <option value="pediatrician">Pediatrician</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="traumatologist">Traumatologist</option>
                <option value="surgeon">Surgeon</option>
                <option value="ophthalmologist">Ophthalmologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="clinical">Clinical</option>
                <option value="pathologist">Pathologist</option>
                <option value="rheumatologist">Rheumatologist</option>
                <option value="urologist">Urologist</option>
            </select>
            <label htmlFor="" className="text-cyan-500 text-base md:text-lg">University</label>
            <input type="text" id='user-college' className="bg-cyan-100 p-1 sm:p-2 w-60 text-sky-500 rounded-xl text-sm xs:text-base md:text-lg"/>
            <button onClick={(e)=> createUser(e)} className='mt-4 inline-flex w-40 md:w-60 h-10 md:h-14 border-none rounded-lg cursor-pointer text-base items-center justify-center transition ease-in all delay-300 relative overflow-hidden bg-cyan-300 after:content-[""] after:w-full after:h-full after:bg-cyan-700 after:absolute after:z-10 after:top-16 after:left-0 after:transition-all after:delay-50 after:ease-in-out hover:after:top-0'><span className="z-20 relative transition-all delay-300 text-white text-sm md:text-base">Submit info</span></button>
        </form>
    )
}