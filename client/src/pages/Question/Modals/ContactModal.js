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
          <p>Karan Lakhwani : <a href="tel:+91 98349 21293" style={{color:'blue'}} class="text1">+91 98349 21293</a></p>
          <p>Karan Lakhwani : <a href="tel:+91 98349 21293" style={{color:'blue'}} class="text1">+91 98349 21293</a></p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;