import {Modal} from 'react-bootstrap';

function ContactModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        // aria-labelledby="example-custom-modal-styling-title"
        centered
        // size="lg"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Samir Wankhede : +91-7770011526</p>
          <p>Shrinidhi Balaji : +91-7506211747</p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;