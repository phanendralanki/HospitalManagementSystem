import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import PatientRegistration from './components/PatientRegistration';
import PatientLogin from './components/PatientLogin';
import DoctorLogoin from './components/DoctorLogin';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patientRegistration" element={<PatientRegistration />} />
          <Route path="/patientLogin" element={<PatientLogin/>}/>
          <Route path="/doctorLogin" element={<DoctorLogoin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
