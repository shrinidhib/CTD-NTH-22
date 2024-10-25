import nthlogo from "../../assets/nth-logo.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
          <div className="nth-adjust ">
            <div className="nth-home">
              <img src={nthlogo} ></img>
              <h3>Network Treasure Hunt</h3>
              <h5>Decrypt the Encrypted</h5>

              <h1 style={{'margin': 42}}>Under Maintenance</h1>
            </div>
          </div>
    </div>
  );
};

export default Home;
