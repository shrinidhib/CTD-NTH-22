import {Modal,Button} from 'react-bootstrap';
import {useState} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Request from '../../../api/requests';
import axios from 'axios';
function BuyHintModal(props) {
  const [err, seterr] = useState("");
  // console.log('buy hint modal',props)
    const fetchHint = async () => {
        // console.log("hit");
        // localStorage.setItem("extra-hints", " ")
        // fetch("http://localhost:8000/question/extra-hint/", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //     Authorization: `Token ${localStorage.getItem("auth-token")}`,
        //   },
        // })
        //   .then((response) => {
        //     console.log(localStorage.getItem("extra-hints"));
        //     return response.json();
        //   })
          await Request.extrahint()
          // axios.post('http://localhost:8000/question/extra-hint/',null,{headers: {
          //       "content-type": "application/json",
          //       Authorization: `Token ${localStorage.getItem("auth-token")}`,
          //     }})
          .then((res) => {
            // console.log(typeof res);console.log(res);
            // console.log(res.extraHint);
            // console.log(res.status);
            // console.log(localStorage.getItem("extra-hints"));
            if (res.data.extraHint !== undefined) {
              // props.data.paidHintTaken=true;
              props.data.dataUpdate();
              // console.log(props.data);
              // console.log(res.data.extraHint);
              // localStorage.setItem("extra-hints", res.data.extraHint);
            //   setextraHints(localStorage.getItem("extra-hints"));
            props.toast.toast.success('Extra Hints Are Available!');  
            props.onHide();
              
            } else {
              // console.log(res.data.status);
              props.toast.toast.error(res.data.status);
              seterr(res.data.status);
            }
          })
          .catch((err) => {
            // console.log(err);
            props.toast.toast.error('Error Fetching Hints');
            seterr("Error Fetching Hints");
          });
      };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Buy Hints</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to buy the hint?
        <p>
        Keys available : {props.data.keys}<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K"
                class="nes-avatar is-rounded is-medium"
              ></img>
        </p>
        <p>
        Cost : {props.data.level+1}<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K"
                class="nes-avatar is-rounded is-medium"
              ></img>
        </p>
      </Modal.Body>
      <Modal.Footer>
              <p>{err !== "" ? err: <></>}</p>

        <button type="button"
            // onClick={fetchHint}  
            onClick={() => {console.log('ok');fetchHint();}}
            // class={props.data.paidHintTaken?"btn btn-primary disabled":"btn btn-primary active"}>
            class="btn btn-primary " style={{color:'white'}}
        >
            Confirm
        </button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default BuyHintModal;
