import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Instructions.css";
import r2d2 from "../../assets/r2d2.png";
import c3po from "../../assets/c3po.png";
import { connect } from "react-redux";

const Instructions = (props) => {
  let [r2d2_1, setR2D2_1] = useState(false);
  let [c3po_1, setC3PO_1] = useState(false);
  let [r2d2_2, setR2D2_2] = useState(false);
  let [c3po_2, setC3PO_2] = useState(false);
  let [inst, setInst] = useState(false);

  const activate = (bot,time) => {
    setTimeout(() => {
        setR2D2_1(true);
    }, time)
  }

  useEffect(() => {
    setTimeout(() => {
        setR2D2_1(true);
        document.getElementById("r2d21").play(); 
    }, 1000);
    setTimeout(() => {
        setC3PO_1(true);
        document.getElementById("c3p01").play();
    }, 5000);
    setTimeout(() => {
        setR2D2_2(true);
        document.getElementById("r2d22").play(); 
    }, 9000);
    setTimeout(() => {
        setC3PO_2(true);
        document.getElementById("c3p02").play();
    }, 15000);
    setTimeout(() => {
        setInst(true);
        setR2D2_1(false);
        setC3PO_1(false);
        setR2D2_2(false);
        setC3PO_2(false);
    }, 20000);
  }, [])
  return (
    // <section class="nes-container is-dark">
    <div className="instructions">
        <audio id="r2d21">
            {/* <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2-SOUND.ogg" type="audio/ogg"/> */}
            <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2+SOUND.mp3" type="audio/mpeg"/>
        </audio>
        <audio id="r2d22">
            {/* <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2-SOUND-2.ogg" type="audio/ogg"/> */}
            <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2+SOUND+2.mp3" type="audio/mpeg"/>
        </audio>
        <audio id="c3p01">
            {/* <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2-SOUND-2.ogg" type="audio/ogg"/> */}
            <source src="https://nth22.s3.ap-south-1.amazonaws.com/c3p01.mp3" type="audio/mpeg"/>
        </audio>
        <audio id="c3p02">
            {/* <source src="https://nth22.s3.ap-south-1.amazonaws.com/R2D2-SOUND-2.ogg" type="audio/ogg"/> */}
            <source src="https://nth22.s3.ap-south-1.amazonaws.com/c3p02.wav" type="audio/mpeg"/>
        </audio>
      <section class="message-list">
        {r2d2_1 && (<section class="message-left">

          <div class="nes-balloon from-left ">
            <p>Beep Bloop Blop Bleep Boop</p>
          </div>
        </section>)}
        {r2d2_1 && <img src={r2d2} className="r2d2"></img>}

        {c3po_1 && <section class="message-right" style={{ textAlign: "right" }}>
          {/* <i class="nes-bcrikko"></i> */}
          {/* <!-- Balloon --> */}
          <div class="nes-balloon from-right ">
            <p>OH MY GOODNESS!! NTH IS HERE!</p>
          </div>
          <br />
          <img src={c3po} className="c3po"></img>
          {/* <i class="snes-logo is-large"></i> */}
          {/* <i class="nes-smartphone is-small"></i> */}
        </section>}

        {r2d2_2 && (<section class="message-left">

          <div class="nes-balloon from-left ">
            <p>Bloop Blop Bleep Bleep Bloooop!!!!</p>
          </div>
        </section>)}
        {r2d2_2 && <img src={r2d2} className="r2d2"></img>}

        {c3po_2 && <section class="message-right" style={{ textAlign: "right" }}>
          {/* <i class="nes-bcrikko"></i> */}
          {/* <!-- Balloon --> */}
          <div class="nes-balloon from-right ">
            <p>I know its hard!! But that's the fun Part!</p><br/>
            <p>Just follow these Instructions.</p>
          </div>
          <br />
          <img src={c3po} className="c3po"></img>
          {/* <i class="snes-logo is-large"></i> */}
          {/* <i class="nes-smartphone is-small"></i> */}
        </section>}
        {inst && <div>
        <section class="message-left">
          <div class="nes-balloon inst">
            <ol className="inst-text ms-2">
              <li className="inst1-text">
                After logging in, there will be a question displayed which
                includes pictures and hints.
              </li>
              <li className="inst1-text">
                As you have logged in, your URL will be nth.pictieee .in /
                question To submit your answer, you have to put a '/' in the URL
                followed by the answer.
              </li>
              <li className="inst1-text">
                If your answer is correct, you will go to the next level,
                otherwise, you will be greeted with the same question with same
                level.
              </li>
              <li className="inst1-text">
                The one who solves as many questions and reaches the top level
                is displayed on the leaderboard.
              </li>
              <li className="inst1-text">
                If your answer is correct, you will go to the next level,
                otherwise, you will stay on the same level with the same
                question.
              </li>
              <li className="inst1-text">
                After the 24-hour hunt, the one on the top of the leaderboard
                wins!
              </li>
              <li className="inst1-text">
                The winner will be declared once and there will be no change in
                our decision. Furthermore, users should play with one account
                only.
              </li>
            </ol>
          </div>
        </section>
        {/* <section class="message-right" > */}
        <div style={{ textAlign: "center" }}>
          <Link to={props.loginStatus===true?"/question/put_your_ans_here":"/login"}>
            <button type="button" class="nes-btn is-warning">
              Hunt
            </button>
          </Link>
        </div>
        </div>}
        {/* </section> */}
      </section>
    
    </div>
    // </section>
    // <div class="nes-container is-rounded is-dark">
    // <div className="instructions">
    //     {/* <h4>&lt;instructions&gt;</h4> */}
    //     <h4 className="text-center" style={{background:"#3c9b5134",padding: "2%", borderRadius:"10px"}}>INSTRUCTIONS</h4>
    //     <div className="instructions-content text-center" style={{ color: "black" , background:"#3c9b5134",padding: "2%", borderRadius:"10px"}}>

    //     </div>
    //     {/* <h4>&lt;/instructions&gt;</h4> */}

    // </div>
    // </div>
  );
};
const mapStateToProps =(state)=>{
  return {
      loginStatus:state.loginStatus
  }
}
export default connect (mapStateToProps)(Instructions);
