import {Modal,Button} from 'react-bootstrap';
import {useState} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function HintModal(props) {
    const [extraHints,setextraHints]=useState(localStorage.getItem("extra-hints"));
    const [err,seterr]=useState("");
    console.log(props);
    const fetchHint=()=>{
      console.log('hit');
      // localStorage.setItem("extra-hints", " ")
        fetch('http://localhost:8000/question/extra-hint/',{ 
          method: "POST",
          headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
        })
        .then(response => {
          // console.log(localStorage.getItem("extra-hints"));
            return response.json()
          })
        .then(res => {
            console.log(typeof(res));
            // console.log(res.extraHint);
            // console.log(res.status);
            console.log(localStorage.getItem("extra-hints"));
            if(res.extraHint!==undefined){
              // props.data.paidHintTaken=true;
              props.data.dataUpdate();
              console.log(props.data);
              console.log(res.extraHint);
              localStorage.setItem("extra-hints",res.extraHint);
              setextraHints(localStorage.getItem("extra-hints"));
            }
            else {
              console.log(res.status)
              seterr(res.status);
            }
            
        })
        .catch(err=>{
          console.log(err);
          seterr('Error Fetching Keys');
        })
    }
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hints
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          console.log(props.data.paidHintTaken&&extraHints)
        }
          <p>Hints:{props.data.hints}</p>
          {(props.data.paidHintTaken&&extraHints)?<p>Extra Hints:{extraHints}</p>:<></>}
          <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K' class="nes-avatar is-rounded is-medium"  ></img>
          - {props.data.keys}<br/> 
          {/* Cost For Extra Hints: 20 */}
        </Modal.Body>
        <Modal.Footer >
        {/* <div class="ms-auto"> */}
        {/* <div class="d-flex justify-content-between "> */}
            {err!==""?err:props.data.paidHintTaken?'Hint Taken':<></>}
        {/* </div> */}
            
        {/* </div> */}
        <p>
        <OverlayTrigger placement={'left'} overlay={ <Tooltip id={'tooltip-left'}> <strong>Extra Hints</strong></Tooltip> }>
        <button type="button" onClick={fetchHint}  class={props.data.paidHintTaken?"btn btn-primary disabled":"btn btn-primary active"}>Show Hints</button>
        </OverlayTrigger>
        {/* <br/> */}
        -5x<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K' class="nes-avatar is-rounded is-medium"  ></img>
        </p>    
          {/* <Button variant="secondary" >Close</Button>
          <Button variant="primary" curr_stauts >Submit</Button> */}
        {/* <p>-5x</p> */}
        
          
        </Modal.Footer>
      </Modal>
    );
  }


export default HintModal;