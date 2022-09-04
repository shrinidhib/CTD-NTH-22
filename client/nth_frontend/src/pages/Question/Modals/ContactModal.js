import {Modal} from 'react-bootstrap';


function ContactModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Karan Lakhwani : +91-8329049174</p>
          <p>Karan Lakhwani : +91-8329049174</p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;