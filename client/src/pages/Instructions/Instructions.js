import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./Instructions.css";
import r2d2 from "../../assets/r2d2.png";
import c3po from "../../assets/c3po.png";
import { connect } from "react-redux";
import Requests from "../../api/requests";
const Instructions = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  let [r2d2_1, setR2D2_1] = useState(false);
  let [c3po_1, setC3PO_1] = useState(false);
  let [r2d2_2, setR2D2_2] = useState(false);
  let [c3po_2, setC3PO_2] = useState(false);
  let [inst, setInst] = useState(false);
  let [skipped, setSkipped] = useState(false);
  const [is_event, setIs_event] = useState(false);
  
  const eventStatus = async () => {
    setLoaderStatus(true);
    try {
      const res = await Requests.time();
      console.log(res);
      console.log('started');
      if (res.data.is_started) {
        props.loginStatus === false && props.toast.toast.info('Login First ', { autoClose: 6000 })
        setIs_event(true);
      }

      // else{
      //   props.toast.toast('Contest Not Started', { autoClose: 5000 });
      //   navigate("/");
      // }

    }
    catch (err) {
      console.log(err);
      props.toast.toast.error("Network Error", { autoClose: 6000 });
    }
    setLoaderStatus(false);
  }

  const skipInst = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setInst(true);
      setR2D2_1(false);
      setC3PO_1(false);
      setR2D2_2(false);
      setC3PO_2(false);
      setSkipped(true);
    }
  };

  useEffect(() => {
    eventStatus();
    setTimeout(() => {
      setR2D2_1(true);
      // document.getElementById("r2d21").play();
    }, 1000);
    setTimeout(() => {
      setC3PO_1(true);
      // document.getElementById("c3p01").play();
    }, 4000);
    setTimeout(() => {
      setR2D2_2(true);
      // document.getElementById("r2d22").play();
    }, 6000);
    setTimeout(() => {
      setC3PO_2(true);
      // document.getElementById("c3p02").play();
    }, 8000);
    setTimeout(() => {
      setInst(true);
      setR2D2_1(false);
      setC3PO_1(false);
      setR2D2_2(false);
      setC3PO_2(false);
    }, 12000);
    // document.addEventListener("keydown", skipInst, true);
    window.addEventListener('keydown', skipInst);
    return () => {
      window.removeEventListener('keydown', skipInst);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    // <section class="nes-container is-dark">
    loaderStatus
      ?
      <loaderStatus />
      :
      <div className="adjust">
        <div className="instructions">
          {/* { !skipped &&
          <div>
            <audio id="r2d21">
              <source
                src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2+SOUND.mp3"
                type="audio/mpeg"
              />
            </audio>
            <audio id="r2d22">
              <source
                src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2+SOUND+2.mp3"
                type="audio/mpeg"
              />
            </audio>
            <audio id="c3p01">
              <source
                src="https://nth22.s3.ap-south-1.amazonaws.com/c3p01.mp3"
                type="audio/mpeg"
              />
            </audio>
            <audio id="c3p02">
              <source
                src="https://nth22.s3.ap-south-1.amazonaws.com/c3p02.wav"
                type="audio/mpeg"
              />
            </audio>
          </div>
        } */}
          <section class="message-list">
            {!skipped && !inst && <div>
              {r2d2_1 && (
                <section class="message-left">
                  <div class="nes-balloon from-left ">
                    <p className="msg">Beep Bloop Blop Bleep Boop</p>
                  </div>
                </section>
              )}
              {r2d2_1 && <img src={r2d2} className="r2d2" alt='r2d2'></img>}

              {c3po_1 && (
                <section class="message-right" style={{ textAlign: "right" }}>
                  {/* <i class="nes-bcrikko"></i> */}
                  {/* <!-- Balloon --> */}
                  <div class="nes-balloon from-right ">
                    <p className="msg">OH MY GOODNESS!! NTH IS HERE!</p>
                  </div>
                  <br />
                  <img src={c3po} className="c3po" alt='c3po'></img>
                  {/* <i class="snes-logo is-large"></i> */}
                  {/* <i class="nes-smartphone is-small"></i> */}
                </section>
              )}

              {r2d2_2 && (
                <section class="message-left">
                  <div class="nes-balloon from-left ">
                    <p className="msg">Bloop Blop Bleep Bleep Bloooop!!!!</p>
                  </div>
                </section>
              )}
              {r2d2_2 && <img src={r2d2} className="r2d2" alt='r2d2'></img>}

              {c3po_2 && (
                <section class="message-right" style={{ textAlign: "right" }}>
                  {/* <i class="nes-bcrikko"></i> */}
                  {/* <!-- Balloon --> */}
                  <div class="nes-balloon from-right ">
                    <p className="msg">
                      I know its hard!! But that's the fun Part! <br />
                      Just follow these Instructions.
                    </p>

                    {/* <p className="msg"></p> */}
                  </div>
                  <br />
                  <img src={c3po} className="c3po" alt='c3po'></img>
                  {/* <i class="snes-logo is-large"></i> */}
                  {/* <i class="nes-smartphone is-small"></i> */}
                </section>
              )}
            </div>}

            {inst && (
              <div>
                <h1 style={{ textAlign: "center", color: "red", padding: '10px' }}>INSTRUCTIONS</h1>
                <section class="message-left">
                  <div class="nes-balloon inst">
                    <ol className="inst-text ms-2">
                      <li className="inst1-text">
                        After logging in, there will be a question displayed which
                        includes pictures and hints.
                      </li>
                      <li className="inst1-text">
                        As you have logged in, your URL will be nth.pictieee .in /
                        question To submit your answer, you have to put a '/' in
                        the URL followed by the answer.
                      </li>
                      <li className="inst1-text">
                        If your answer is correct, you will go to the next level,
                        otherwise, you will be greeted with the same question with
                        same level.
                      </li>
                      <li className="inst1-text">
                        The one who solves as many questions and reaches the top
                        level is displayed on the leaderboard.
                      </li>
                      <li className="inst1-text">
                        If your answer is correct, you will go to the next level,
                        otherwise, you will stay on the same level with the same
                        question.
                      </li>
                      <li className="inst1-text">
                        After the 24-hour hunt, the one on the top of the
                        leaderboard wins!
                      </li>
                      <li className="inst1-text">
                        The winner will be declared once and there will be no
                        change in our decision. Furthermore, users should play
                        with one account only.
                      </li>
                    </ol>
                  </div>
                </section>
                <div style={{ textAlign: "center" }}>
                  <Link
                    to={
                      is_event
                        ?
                        props.loginStatus
                          ? "/question/put_your_ans_here"
                          : "/login"
                        :
                        props.loginStatus
                          ?
                          '/'
                          :
                          '/login'
                    }
                  >
                    <button type="button" class="nes-btn is-warning" onClick={() => {
                      !is_event && !props.loginStatus && props.toast.toast('Login First', { autoClose: 5000 })
                      !is_event && props.loginStatus && props.toast.toast('Event Is Yet To Start', { autoClose: 3000 })
                    }
                    }>
                      Hunt
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {/* </section> */}
          </section>
        </div>

        {!inst && <div className="container text-center skip" onClick={() => { setSkipped(true); setInst(true); }} >
          <p>Press ESC or click <button style={{backgroundColor:'transparent',border:'none',color: 'inherit'}}>here</button> to skip.</p>
        </div>}

      </div>

  );
};
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
  };
};
export default connect(mapStateToProps)(Instructions);
