import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Request from "../../api/requests";
import Loader from "../../components/Loader/Loader";
import "./Feedback.css"
const Feedback = (props) => {

    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loaderStatus, setLoaderStatus] = useState(false);

    let navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoaderStatus(true);

        await Request.feedback({ name, feedback })
            .then(data => {
                props.toast.toast.success("Feedback Submitted!!");
                navigate("/");

            })
            .catch(err => {
                console.log(err);
                props.toast.toast.error("Network Error");

            })
        setLoaderStatus(false);
    };
    return (

        <div>
            {props.toast.container}
            {

                loaderStatus
                    ?
                    <Loader />
                    :
                    <div className="feedback-page">
                        <form onSubmit={handleSubmit}>
                            <div >

                                <div className="nes-container is-dark with-title " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                                    <span class="title">Feedback</span>
                                    <div class="nes-field">
                                        <label for="name_field" class="col">Name</label>
                                        <input id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            placeholder="type your name"
                                            className="login-form-input"
                                            required
                                        />
                                    </div>
                                    <div class="nes-field ">
                                        <label for="name_field" class="col">Feedback</label>

                                        <textarea id="feedback"
                                            name="feedback"
                                            value={feedback}
                                            onChange={e => setFeedback(e.target.value)}
                                            type="text"
                                            placeholder="type your feedback"
                                            required>

                                        </textarea>
                                    </div>
                                    <div className="login-button">
                                        <button type="submit">
                                            Submit
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

            }
        </div>
    );
};

export default Feedback;
