import nthlogo from "../../assets/nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
// import Particles from 'react-particles-js'
import Timer from "../../components/Timer/Timer";
import { connect } from "react-redux";
const Home = (props) => {
  return (
    <div className="nth-adjust">
    <div className="nth-home">
          <img src={nthlogo} ></img>
          <h3>Network Treasure Hunt</h3>
          <h5>Decrypt the Encrypted</h5>
          <Timer/>
          <Link to={props.loginStatus===true?"/instructions":"/login"}>
            <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
              Start Hunting
            </button>
          </Link>

      </div>
      </div>
  );
};

const mapStateToProps =(state)=>{
  return {
      loginStatus:state.loginStatus
  }
}
export default connect(mapStateToProps)(Home);