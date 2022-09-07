import {Modal,Button} from 'react-bootstrap';
import {useState} from 'react';
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
          seterr('Insufficient Keys');
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
          Keys Remainig: {props.data.keys}<br/> 
          Cost For Extra Hints: 20
        </Modal.Body>
        <Modal.Footer >
        {/* <div class="ms-auto"> */}
        {/* <div class="d-flex justify-content-between "> */}
            {err!==""?err:<></>}
        {/* </div> */}
            
        {/* </div> */}
        <button type="button" onClick={fetchHint}  class={props.data.paidHintTaken?"btn btn-primary disabled":"btn btn-primary active"}>Show Hints</button>
            
          {/* <Button variant="secondary" >Close</Button>
          <Button variant="primary" curr_stauts >Submit</Button> */}

        </Modal.Footer>
      </Modal>
    );
  }


export default HintModal;