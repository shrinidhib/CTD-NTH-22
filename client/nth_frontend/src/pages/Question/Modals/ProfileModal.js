import {Modal,Button} from 'react-bootstrap';

function ProfileModal(props) {
    console.log(props);
    return (
        
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Username-{props.data.username}</p>
            <p>Phone-{props.data.phone}</p>
            <p>On level: {props.data.current_level}</p>
          
        </Modal.Body>
        
      </Modal>
    );
  }


export default ProfileModal;