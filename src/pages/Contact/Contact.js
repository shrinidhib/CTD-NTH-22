import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    const details = [
        {
            name: 'Samir Wankhede',
            img: 'https://i.postimg.cc/PpwsPTjg/Samir.jpg',
            github: 'https://github.com/Samir-Wankhede' ,
            linkedin: 'https://www.linkedin.com/in/samir-wankhede/',
            phone: '7770011526' // Make sure phone number is a string
        },
        {
            name: 'Shrinidhi Balaji',
            img: 'https://i.postimg.cc/Df449XG7/IMG-20240621-WA0013-2.jpg',
            github: 'https://github.com/shrinidhib',
            linkedin: 'https://www.linkedin.com/in/b-shrinidhi/',
            phone: '7506211747' // Make sure phone number is a string
        }
    ];

    return (
        <div className='contact-page'>
            <Container>
                <Row>
                    {details.map((data) => (
                        <Col lg={6} sm={12}>
                            <section class="nes-container is-dark member-card m-5 mx-auto">
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
