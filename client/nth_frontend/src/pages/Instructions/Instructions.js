import React from "react";
import { Link } from "react-router-dom";
const Instructions = () => {
    return (
        // <section class="nes-container is-dark">
        <div className="instructions">
            <section class="message-list" >
                <section class="message -left" >
                    {/* <i class="nes-bcrikko"></i> */}
                    <i class="nes-mario is-small"></i>
                    {/* <!-- Balloon --> */}
                    <div class="nes-balloon from-left " >
                        <p>Welcome to NTH website</p>
                    </div>
                    
                </section>
                <section class="message -right" style={{textAlign:'right'}}>
                    {/* <i class="nes-bcrikko"></i> */}
                    {/* <!-- Balloon --> */}
                    <div class="nes-balloon from-right " >
                        <p >Instructions</p>
                    </div>
                    <i class="snes-logo is-large"></i>
                    {/* <i class="nes-smartphone is-small"></i> */}
                </section>
                <section class="message -left" >
                    {/* <!-- Balloon --> */}
                    <i class="nes-mario" style={{textAlign:'left'}}></i>
                    <div class="nes-balloon " style={{padding:'',width:'800px',backgroundColor: 'transparent',color:'white'}}>
                        <ol >
                        <li>After logging in, there will be a question displayed which includes pictures and hints.</li>
                        <li>As you have logged in, your URL will be https://nth.pictieee.in/question To submit your answer, you have to put a '/' in the URL followed by the answer.</li>
                        <li>If your answer is correct, you will go to the next level, otherwise, you will be greeted with the same question with same level.</li>
                        <li>The one who solves as many questions and reaches the top level is displayed on the leaderboard.</li>
                        <li>If your answer is correct, you will go to the next level, otherwise, you will stay on the same level with the same question.</li>
                        <li>After the 24-hour hunt, the one on the top of the leaderboard wins!</li>
                        <li>The winner will be declared once and there will be no change in our decision. Furthermore, users should play with one account only.</li>
                        </ol>
                    </div>
                    
                </section>
                <section class="message -right" >
                    <Link class="nes-balloon " to={"/question/put_your_ans_here"}><button  type="button" class="nes-btn is-warning">Hunt</button></Link>
                </section>
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
