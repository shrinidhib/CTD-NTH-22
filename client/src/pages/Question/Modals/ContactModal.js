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
          <p>Devraj Shetake : <a href="tel:+91 8208566305" style={{color:'blue'}} class="text1">+91 8208566305</a></p>
          <p>Harsh Bhat : <a href="tel:+91 8983594252" style={{color:'blue'}} class="text1">+91 8983594252</a></p>
          <p>Bhakti Mahurkar : <a href="tel:+91 9307931414" style={{color:'blue'}} class="text1">+91 9307931414</a></p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;