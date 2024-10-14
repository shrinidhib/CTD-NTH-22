import nthlogo from "../../assets/nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
// import Particles from 'react-particles-js'
import Timer from "../../components/Timer/Timer";
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import Requests from '../../api/requests';
import Loader from "../../components/Loader/Loader";
const Home = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [timerStatus, setTimerStatus] = useState(false);
  const [day, setDay] = useState('00');
  const [hour, setHour] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  // let days='00',hours='00',minutes='00',seconds='00';
  const fetchTimeHome = async () => {
    await Requests.time()
      .then(
        (res) => {
          setTimerStatus(res.data);
          if (res.data.is_started) props.toast.toast("Contest Started!!");
          // console.log(res);
          let cal = Math.floor(((res.data.time - Date.now() + 2000) / 1000) % 60);
          setSeconds(cal < 10 ? '0' + cal.toString() : cal.toString());

          cal = Math.floor(((res.data.time - Date.now() + 2000) / (1000 * 60)) % 60);
          setMinutes(cal < 10 ? '0' + cal.toString() : cal.toString());
          cal = Math.floor(((res.data.time - Date.now() + 2000) / (1000 * 60 * 60)) % 24);
          setHour(cal < 10 ? '0' + cal.toString() : cal.toString());
          cal = Math.floor(((res.data.time - Date.now() + 2000)) / (1000 * 60 * 60 * 24));
          setDay(cal < 10 ? '0' + cal.toString() : cal.toString());
          // console.log(day)
          setLoaderStatus(false);
        }
      )
      .catch(
        (err) => { console.log(err) }
      )
  }
  useEffect(() => {
    fetchTimeHome();
  }, [])
  return (
    <div>
      {
        loaderStatus
          ?
          <Loader />
          :
          <div className="nth-adjust ">
            <div className="nth-home">
              <img src={nthlogo} ></img>
              <h3>Network Treasure Hunt</h3>
              <h5>Decrypt the Encrypted</h5>
              {/* {console.log(timerStatus.time, Date.now(), timerStatus.time - Date.now())} */}
              {
                timerStatus.is_started === false
                  ?
                  timerStatus.time - Date.now() < 0
                    ?
                    <p style={{ color: 'yellow' }}>Contest Has Ended</p>
                    :


                    <Timer fetchTimeHome={fetchTimeHome} time={timerStatus.time} format={{ day, hour, seconds, minutes }} />
                  :
                  <Link to={props.loginStatus === true ? "/instructions" : "/login"}>
                    <button className="mr-3 ml-2 mt-2 mb-2 hunt-button ">
                      Start Hunting
                    </button>
                  </Link>
              }



            </div>
          </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}
export default connect(mapStateToProps)(Home);
