import React from "react";
import { Link } from "react-router-dom";
import './Instructions.css'
import r2d2 from '../../assets/r2d2.png'
import c3po from '../../assets/c3po.png'
const Instructions = () => {
    return (
        // <section class="nes-container is-dark">
        <div className="instructions">
            <section class="message-list" >
                <section class="message-left" >
                    {/* <i class="nes-bcrikko"></i> */}
                    {/* <i class="nes-mario is-small"></i> */}
                    {/* <!-- Balloon --> */}
                    
                    <div class="nes-balloon from-left " >
                        <p>Beep Bloop Blop Bleep Boop</p>
                    </div>
                </section>
                <img src={r2d2} className="r2d2"></img>

                <section class="message-right" style={{textAlign:'right'}}>
                    {/* <i class="nes-bcrikko"></i> */}
                    {/* <!-- Balloon --> */}
                    <div class="nes-balloon from-right " >
                        <p >OH MY GOODNESS!! NTH IS HERE!</p>
                    </div>
                    <br/>
                <img src={c3po} className="c3po"></img>
                    {/* <i class="snes-logo is-large"></i> */}
                    {/* <i class="nes-smartphone is-small"></i> */}
                </section>
                <section class="message-left" >
                    {/* <!-- Balloon --> */}
                    {/* <i class="nes-mario" style={{textAlign:'left'}}></i> */}
                    <div class="nes-balloon inst" >
                        <ol className="inst-text ms-2">
                        <li className="inst1-text">After logging in, there will be a question displayed which includes pictures and hints.</li>
                        <li className="inst1-text">As you have logged in, your URL will be nth.pictieee .in / question To submit your answer, you have to put a '/' in the URL followed by the answer.</li>
                        <li className="inst1-text">If your answer is correct, you will go to the next level, otherwise, you will be greeted with the same question with same level.</li>
                        <li className="inst1-text">The one who solves as many questions and reaches the top level is displayed on the leaderboard.</li>
                        <li className="inst1-text">If your answer is correct, you will go to the next level, otherwise, you will stay on the same level with the same question.</li>
                        <li className="inst1-text">After the 24-hour hunt, the one on the top of the leaderboard wins!</li>
                        <li className="inst1-text">The winner will be declared once and there will be no change in our decision. Furthermore, users should play with one account only.</li>
                        </ol>
                    </div>
                    
                </section>
                {/* <section class="message-right" > */}
                <div style={{textAlign:'center'}}><Link  to={"/question/put_your_ans_here"}><button  type="button" class="nes-btn is-warning">Hunt</button></Link></div>
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

export default Instructions;
