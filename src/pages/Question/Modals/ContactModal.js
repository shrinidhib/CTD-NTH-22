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
          <p>Karan Mundhada : +91-8080792381</p>
          <p>Kshitij Dhapse : +91-9325815244</p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;