import './App.css';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      </Routes>
      </>

  );
}
export default App;
