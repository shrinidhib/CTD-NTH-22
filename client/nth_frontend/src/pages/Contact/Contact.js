import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    const details = [
        {
            name: "Vansh Teppalwar",
            img: 'https://github.com/4k1k0.png?size=64',
            instagram: 'https://github.com/4k1k0.png?size=64',
            linkedin: 'https://github.com/4k1k0.png?size=64',
            phone: 7972851721
        },
        {
            name: "Vansh Teppalwar",
            img: 'https://github.com/4k1k0.png?size=64',
            instagram: 'https://github.com/4k1k0.png?size=64',
            linkedin: 'https://github.com/4k1k0.png?size=64',
            phone: 7972851721
        }
    ]
    return (
        <div className='contact-page'>

            {/* <h1 className='topic-title'>Web Team</h1> */}
            <Container >
            
                <Row>
                    
                    {
                    details.map((data) => (
                    
                    <Col lg={6} sm={12}>
                        {/* <section class="nes-container is-dark member-card">
                            <div class="avatar">
                                <img data-src={data.img} alt="Core Member B.C.Rikko" class="" src={data.img}></img>
                            </div>
                            {console.log(data)}
                            <div class="profile">
                                <h4 class="name">{data.name}</h4>
                                <div>
                                    <a href={data.instagram} target="_blank" rel="noopener" aria-label="github">
                                        <i class="nes-icon instagram"></i>
                                    </a>
                                    <a href={data.linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                                        <i class="nes-icon linkedin"></i>
                                    </a>
                                </div>
                                <a href="tel:+91 94033 04652"><i class="fas fa-phone-alt"></i> +91 94033 04652</a>
                            </div>
                        </section> */}
                        <section class="nes-container is-dark member-card m-5">
                        <div class="contactus-card"><img src={data.img} width="210px"></img>
                            <div class="card-name">
                                <h4 class="text">{data.name}</h4>
                                <h5 ><a href="tel:+91 98349 21293" style={{color:'blue'}} class="text1"><i class="fas fa-phone-alt"></i> +91 98349 21293</a></h5>
                            </div>
                        </div>
                        </section>
                    </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default Contact;