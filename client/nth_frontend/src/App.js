import './App.css';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './pages/Question/Question';
import NavbarComp from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
  return (
    <>
      
      <NavbarComp />
      
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      {/* <Route path="/team" component={Webteam} />
      <Route path="/contact" component={Contact} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/question/:ans" element={<Question/>} />
      {/* <Route path='/leaderboard' component = {LeaderBoard} /> */}
      </Routes>
      <Footer />
      
      <div class="animation-wrapper" >
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      </div>
    
      
      </>

  );
}
export default App;
