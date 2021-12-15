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
import UserContextProvider from "./Context/UserContext";


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
