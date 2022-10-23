import './App.css';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Question from './pages/Question/Question';
import NavbarComp from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Background from './components/Background/Background';
import Instructions from './pages/Instructions/Instructions';
import Harry from './pages/Harry/Harry'
import toast, { ToastUtils } from "./utils/toastifyContainer";
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/404/ErrorPage';
function App() {
  return (
    <>
      <ToastUtils />

      <NavbarComp toast={{ container: <ToastUtils />, toast }}/>
      <div className='margin-br'>
      <Routes>
      <Route path="/" exact element={<Home toast={{ container: <ToastUtils />, toast }} />}/>
      <Route path="/register" element={<Register toast={{ container: <ToastUtils />, toast }} />} />
      <Route path="/about" element={<About/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login toast={{ container: <ToastUtils />, toast }} />} />
      <Route path="/instructions" element={<Instructions toast={{ container: <ToastUtils />, toast }} />} />
      <Route path="/question/:ans" element={<Question toast={{ container: <ToastUtils />, toast }}/>} /> 
      <Route path="/question" element={<Question toast={{ container: <ToastUtils />, toast }}/>} /> 
      <Route path="/question/ronald" element={<Harry toast={{ container: <ToastUtils />, toast }}/>} /> 
      <Route path="/leaderboard" element = {<Leaderboard toast={{ container: <ToastUtils />, toast }}/>} />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
      {/* <Background/>  */}
    
      
      </>

  );
}
export default App;
