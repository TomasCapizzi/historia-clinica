import React from "react";
import { db} from '../../Firebase/firebase';

export default function ExtraInfo({changeState, user}){

    const {uid, photoURL, displayName} = user    

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

    /*
            const userData = {
            uid,
            photoURL,
            displayName,

        }
    */

    return(
        <form className='extra-info'>
            <label htmlFor="">Birth</label>
            <input type="date" id='user-birth'/>
            <label htmlFor="">Specialty</label>
            <select name="" id="specialty">
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
            <label htmlFor="">University</label>
            <input type="text" id='user-college' />
            <button onClick={(e)=> createUser(e)} >Submit info</button>
        </form>
    )
}