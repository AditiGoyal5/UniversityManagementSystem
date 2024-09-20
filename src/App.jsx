import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/ContactUs';
import StudentInfo from './pages/StudentInfo';
import Academics from './pages/Academics';
import Register from './pages/Register';
import Quiz from './component/Quiz';

function App() {
  return (
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/studentInfo" element={<StudentInfo />}/>
        <Route path="/studentAcademics" element={<Academics />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
      
  
  );
}

export default App;
