import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    const details = [
        {
            name: 'Karan Mundhada',
            img: 'https://i.postimg.cc/9DLjkLbn/Karan.jpg',
            github: 'https://github.com/Karan-mundhada',
            linkedin: 'https://www.linkedin.com/in/karan-mundhada-075b071b7/',
            phone: '8080792381' // Make sure phone number is a string
        },
        {
            name: 'Kshitij Dhapse',
            img: 'https://i.postimg.cc/T1GPFsTt/kshitij1.jpg',
            instagram: 'https://www.instagram.com/kshitij_dhapse/',
            linkedin: 'https://www.linkedin.com/in/kshitijdhapse/',
            phone: '9325815244' // Make sure phone number is a string
        }
    ];

    return (
        <div className='contact-page'>
            <Container>
                <Row>
                    {details.map((data) => (
                        <Col lg={6} sm={12}>
                            <section class="nes-container is-dark member-card m-5">
                                <div class="contactus-card">
                                    <img src={data.img} width="210px"></img>
                                    <div class="card-name">
                                        <h4 class="text">{data.name}</h4>
                                        <h5>
                                            <a href={`tel:+91${data.phone}`} style={{ color: 'blue' }} class="text1">
                                                <i class="fas fa-phone-alt"></i> {data.phone}
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </section>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
