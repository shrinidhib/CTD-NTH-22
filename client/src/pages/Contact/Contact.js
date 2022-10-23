import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";
import devraj from '../../assets/team/devraj.png';
import harsh from '../../assets/team/harsh.png';
import bhakti from '../../assets/team/bhakti.png';
const Contact = () => {
    const details = [
        {
            name: "Devraj Shetake",
            img : devraj,
            phone: 8208566305
        },
        {
            name: "Harsh Bhat",
            img : harsh,
            phone: 8983594252
        },
        {
            name: "Bhakti Mahurkar",
            img : bhakti,
            phone: 9307931414 
        }
    ]
    return (
        <div className='contact-page'>

            {/* <h1 className='topic-title'>Web Team</h1> */}
            <Container >
            
                <Row>
                    
                    {
                    details.map((data) => (
                    
                    <Col lg={4} sm={12}>
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
                        <div class="contactus-card"><img src={data.img} width="210px" alt='profile'></img>
                            <div class="card-name">
                                <h4 class="text">{data.name}</h4>
                                <h5 ><a href={`tel:+91 ${data.phone}`} style={{color:'blue'}} class="text1"><i class="fas fa-phone-alt"></i> {`tel:+91 ${data.phone}`}</a></h5>
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