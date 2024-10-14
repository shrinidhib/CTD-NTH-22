import { useEffect, useState } from "react";
import "./Question.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import ContactModal from "./Modals/ContactModal";
import ProfileModal from "./Modals/ProfileModal";
import HintModal from "./Modals/HintModal";
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { connect } from "react-redux";
// import ctd from '../../assets/ctd.png';
import Request from "../../api/requests";
import Requests from "../../api/requests";
import Loader from "../../components/Loader/Loader";

// import key from '../../assets/keys.png'
const Question = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [data, setData] = useState({});
  const [id, setId] = useState(-1);
  const [imageCnt, setImageCnt] = useState(1);
  let ans = useParams().ans;
  let navigate = useNavigate();
  const openModal = (e) => {
    // console.log(e);
    setId(e);
  }
  const closeModal = () => {
    setId(-1);
    // console.log('hit');
  }
  const redirectAns = () => {
    if (ans !== "put_your_ans_here") {
      navigate("/question/put_your_ans_here");
    }
  };

  const user = async (temp) => {
    try {
      const res = await Request.user();
      // console.log(res);
      // console.log(temp);
      temp = { ...(temp.data), ...(res.data) }
      // console.log(temp);

      // console.log('promts are ',data.promts);
      // console.log(temp.level,data.level);
      // console.log(temp.promts.split(' ')[0]);
      if (ans !== "put_your_ans_here") {
        if (temp.promts === "Wrong Answer!") {
          props.toast.toast.error(temp.promts, { autoClose: 4000 })
        }
        else if (temp.promts.split(' ')[0] === "Congratulations!!") {
          props.toast.toast.success(temp.promts, { autoClose: 6000 })
        }
        else {
          props.toast.toast.info(temp.promts, { autoClose: 6000 })
        }
      }
      else {
        props.toast.toast.info('Put Answer In URL After question/ ', { autoClose: 6000 })
      }

      setData(temp);

      let cnt = 0;
      if (temp.img1 != null) cnt++;
      if (temp.img2 != null) cnt++;
      if (temp.img3 != null) cnt++;
      if (temp.img4 != null) cnt++;
      setImageCnt(cnt)
      setLoaderStatus(false);
    }
    catch (err) { console.log(err); props.toast.toast.error(err.detail, { autoClose: 4000 }); };
  }

  const fetchData = async () => {
    // console.log(localStorage.getItem("auth-token"));
    try {
      const res = await Request.userquestion(ans);
      // console.log(res);
      user({ ...res });
    }
    catch (err) {
      // console.log(err);
      props.toast.toast.error(err.detail, { autoClose: 4000 })
    };

  }
  const eventStatus = async () => {
    try {
      const res = await Requests.time();
      // console.log(res);
      if (res.data.is_started) {
        fetchData();
        redirectAns();
      }
      else {
        // console.log('here in event');
        props.toast.toast('Contest Not Started', { autoClose: 5000 });
        navigate("/")
      }
    }
    catch (err) {
      // console.log(err);
      props.toast.toast.error(err.detail, { autoClose: 4000 });
    }
  }
  useEffect(() => {

    eventStatus();

  }, []);
  return (
    <div>
      {

        (props.loginStatus)
          ?
          loaderStatus
            ?
            <Loader />
            :

            <div className="question-page ">
              <div style={{ paddingTop: '200px', position: 'fixed' }}>
                <div class="view-sidebar">
                  {/* <img src={ctd} className="ctd-bar"></img> */}
                  <a href="https://www.instagram.com/pisbcredenz/" target="_blank">
                    {/* <i className="fab fa-instagram  instagram"></i> */}
                    <i class="nes-icon instagram mt-2 "></i>
                  </a>
                  <a href="https://www.linkedin.com/company/pisbieee/" target="_blank">
                    {/* <i className="fab fa-linkedin-in  linkedin"></i> */}
                    <i class="nes-icon linkedin  mt-1"></i>
                  </a>
                  <a href="https://www.facebook.com/pictieee/" target="_blank">
                    {/* <i className="fab fa-facebook-f  facebook"></i> */}
                    <i class="nes-icon facebook mt-1"></i>
                  </a>
                </div>
              </div>
              <Container fluid>
                <Row className="info">
                  <Col>

                  </Col>
                  <Col lg={10} sm={12}>
                    {/* {console.log('promts are ', data.promts)} */}

                    <h1>Level:{data?.level}</h1>
                    {/* <i class="fa-solid fa-key" class="nes-avatar is-rounded is-medium"></i> */}
                    {/* <img src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-gold-png-image_4420764.png" ></img> */}

                    <p>
                      {/* <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K' 
          class="nes-avatar is-rounded is-large"  > */}

                      <OverlayTrigger placement={'left'} overlay={<Tooltip id={'tooltip-left'}> <strong>{data.tooltip}</strong></Tooltip>}>
                        <a className="key"><img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K'
                          class="nes-avatar is-large"  >
                        </img></a>
                      </OverlayTrigger>
                      x{data?.keys}
                    </p>
                    <div className="ms-5">
                      {
                        imageCnt === 4
                          ?
                          <div className="cover4" >
                            <img src={data.img1}></img>
                            <img src={data.img2}></img>
                            <img src={data.img3}></img>
                            <img src={data.img4}></img>
                          </div>
                          :
                          imageCnt === 3
                            ?
                            <div className="cover4" >
                              <img src={data.img1}></img>
                              <img src={data.img2}></img>
                              <img src={data.img3}></img>
                            </div>
                            :
                            imageCnt === 2
                              ?
                              <div className="cover2 " >
                                {/* <img src={data.img1}></img>
                            <img src={data.img2}></img> */}

                                <div class="row">
                                  <div class="column">
                                    <img src={data.img1} alt="Snow" className="img2" ></img>
                                  </div>
                                  <div class="column">
                                    <img src={data.img2} alt="now" className="img2" ></img>
                                  </div>
                                </div>
                              </div>
                              :
                              <div className="img1">
                                <img className="cover1 " src={data.img1}></img>
                              </div>
                      }


                    </div>
                  </Col>
                  <Col >
                    <div class={`view-modal ${imageCnt === 4 ? 'cnt4' : 'cnt1'}`}>
                      {/* {console.log(data)} */}
                      {/* {console.log(id)} */}
                      {/* <a href="/leaderboard">
              <i class="fas fa-trophy fa-2x side-icons"></i>
              </a> */}
                      <OverlayTrigger placement={'left'} overlay={<Tooltip id={'tooltip-left'}> <strong>Hints</strong></Tooltip>}>
                        <button onClick={() => openModal(3)} class={id === 3 ? "btnisactive ms-2" : "btnisunactive ms-2 "} ><i class="fas fa-lightbulb-on fa-2x side-icons"></i></button>
                      </OverlayTrigger>

                      <OverlayTrigger placement={'left'} overlay={<Tooltip id={'tooltip-left'}> <strong>Profile</strong></Tooltip>}>
                        <button onClick={() => openModal(2)} class={id === 2 ? "btnisactive mt-5 ms-2" : "btnisunactive mt-5 ms-2"} ><i class="fas fa-user-alt fa-2x side-icons"></i></button>
                      </OverlayTrigger>

                      <OverlayTrigger placement={'left'} overlay={<Tooltip id={'tooltip-left'}> <strong>Instructions</strong></Tooltip>}>
                        <button onClick={() => navigate('/instructions')} class={"btnisunactive mt-5 ms-2"}  ><i class="fas fa-question fa-2x side-icons"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement={'left'} overlay={<Tooltip id={'tooltip-left'}> <strong>Contact</strong></Tooltip>}>
                        <button onClick={() => openModal(1)} class={id === 1 ? "btnisactive mt-5 ms-2" : "btnisunactive mt-5 ms-2"} ><i class="fas fa-address-card fa-2x side-icons"></i></button>
                      </OverlayTrigger>
                      {
                        id === 1 ? <ContactModal show={id === 1 ? true : false} onHide={() => closeModal()} />
                          : id === 2 ? <ProfileModal show={id === 2 ? true : false} onHide={() => closeModal()} data={{ username: data.username, phone: data.phone, current_level: data.current_level }} />
                            : id === 3 ? <HintModal show={id === 3 ? true : false} onHide={() => closeModal()} data={{ hints: data.hints, paidHintTaken: data.paidHintTaken, keys: data.keys, paidHint: data.paidHint, level: data.level, dataUpdate: fetchData }} toast={props.toast} id={id} />
                              : <></>
                      }
                    </div>

                  </Col>
                </Row>

              </Container>
            </div>
          :
          <>
            {navigate("/login")}
          </>
      }
    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}
export default connect(mapStateToProps)(Question);
