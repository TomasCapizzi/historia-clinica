import React,{useState} from "react";
import './Styles/main.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from "./Firebase/firebase";
import MedicalHistoryForm from "./Components/Medical History/MedicalHistoryForm";
import RecordsList from "./Components/Medical History/RecordsList";
import PatientDetail from "./Components/Medical History/PatientDetail";



function App() {

  const [user, setUser] = useState(null)

  const auth = getAuth(app);

  onAuthStateChanged(auth, (fbUser)=>{
    fbUser ? setUser(fbUser) : setUser(null)
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
        {
          user ? 
            <Route path='/' element={ <Home  user={user} setUser={setUser} /> }/>  :
            <Route path='/' element={ <Login  setUser={setUser}/> } />
        }
        <Route path='/form' element={ <MedicalHistoryForm/> }/>
        <Route path='/records-list' element={ <RecordsList /> } />
        <Route path='/patient/:id'  element={ <PatientDetail/> } />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
