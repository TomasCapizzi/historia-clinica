import './Styles/main.scss'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{useState} from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MedicalHistoryForm from "./Pages/MedicalHistoryForm";
import Navbar from "./Components/Navbar";
import PatientDetail from "./Pages/PatientDetail";
import RecordsList from "./Pages/RecordsList";
import UserContextProvider from "./Context/UserContext";
import {app} from "./Firebase/firebase";

function App() {

 // const {user, setUser} =  useContext(UserContext)

  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  onAuthStateChanged(auth, (fbUser)=>{
    fbUser ? setUser(fbUser) : setUser(null)
  })

  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            {
              user ? <Route path='/' element={ <Home  user={user} setUser={setUser} />}/> 
              :  <Route path='/'element={<Login/> } />
            }         
            <Route path='/form' element={user ? <MedicalHistoryForm/> : <Login/>}/>
            <Route path='/records-list' element={user? <RecordsList/> : <Login/>} />
            <Route path='/patient/:id'  element={user? <PatientDetail/> : <Login/> } />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
