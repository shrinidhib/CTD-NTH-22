import {Modal,Button} from 'react-bootstrap';
function HintModal(props) {
    console.log(props);
    const fetchHint=()=>{
      console.log('hit');
        fetch('http://localhost:8000/question/extra-hint/',{ 
          method: "GET",
          headers: { "content-type": "application/json", "Authorization":`Token 89ddf2a201f432dce078e7f3a7d4085f8ac013f3` },
        })
        .then(response => {
            return response.json()
          })
        .then(res => {
            console.log(res);
        })
        .catch(err=>console.log(err))
    }
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hints
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.data.hints}</p>
        </Modal.Body>
        <Modal.Footer >
        <div class="ms-auto">
        {/* <div class="d-flex justify-content-between "> */}
            Keys Remainig: {props.data.keys}<br/>Cost For Hint: {props.data.paidHint}
        {/* </div> */}
            
        </div>
        <button type="button" onClick={fetchHint}  class={props.data.paidHintTaken?"btn btn-primary disabled":"btn btn-primary active"}>Show Hints</button>
            
          {/* <Button variant="secondary" >Close</Button>
          <Button variant="primary" curr_stauts >Submit</Button> */}

        </Modal.Footer>
      </Modal>
    );
  }


export default HintModal;