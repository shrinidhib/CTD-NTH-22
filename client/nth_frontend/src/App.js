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
import toast, { ToastUtils } from "./utils/toastifyContainer";
function App() {
  return (
    <>
      <ToastUtils />

      <NavbarComp toast={{ container: <ToastUtils />, toast }}/>
      <div className='margin-br'>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      {/* <Route path="/team" component={Webteam} />
      <Route path="/contact" component={Contact} /> */}
      <Route path="/login" element={<Login toast={{ container: <ToastUtils />, toast }} />} />
      <Route path="/instructions" element={<Instructions toast={{ container: <ToastUtils />, toast }} />} />
      <Route path="/question/:ans" element={<Question toast={{ container: <ToastUtils />, toast }}/>} /> 
      <Route path="/question" element={<Question toast={{ container: <ToastUtils />, toast }}/>} /> 
      {/* <Route path='/leaderboard' component = {LeaderBoard} /> */}
      </Routes>
      </div>
      <Footer />
      <Background/> 
    
      
      </>

  );
}
export default App;
