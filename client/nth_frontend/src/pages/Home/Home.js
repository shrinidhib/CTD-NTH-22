import nthlogo from "../../assets/nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
// import Particles from 'react-particles-js'

const Home = () => {
  return (
    <div className="nth-home">
        <img src={nthlogo} ></img>
        <h3>Network Treasure Hunt</h3>
        <h5>Decrypt the Encrypted</h5>
        <Link to="/question/put_your_answer_here">
          <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
            Start Hunting
          </button>
        </Link> 
      
      {/* <img src={nthlogo} alt="nth-logo" />
      <h3>Network Treasure Hunt</h3>
      <h5>Decrypt the Encrypted</h5>
      <Link to="/hunt">
        <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
          Start Hunting
        </button>
      </Link> */}
    </div>
  );
};

export default Home;