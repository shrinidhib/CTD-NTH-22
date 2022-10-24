import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";
import devraj from '../../assets/team/devraj.png';
import harsh from '../../assets/team/harsh.png';
import bhakti from '../../assets/team/bhakti.png';
import Requests from '../../api/requests';
import {useState,useEffect} from 'react';
const Contact = () => {
  const [loaderStatus, setLoaderStatus] = useState(false);
    const eventStatus = async () => {
        await Requests.time()
        .catch ((err)=> {
          console.log(err);
          setLoaderStatus(true);
        })
      }
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
    useEffect(()=>{
        eventStatus();
    },[])
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
                    {
                        loaderStatus
                        ?
                        <div>
                        <p style={{color:'white'}}><p style={{color:'red',display:'contents'}}>To resolve the Network Error:</p> On Chrome, click on 3 dots --&gt; settings --&gt; privacy and security --&gt; use secure dns --&gt; choose another provider --&gt; select Google (public DNS)
                        </p>    
                        <p style={{color:'white','text-decoration': 'underline'}}>If the network error persists, contact any of the organizers.
                        </p>
                        </div>
                        :
                        <></>
                    }
                </Row>
            </Container>
            
        </div>
    )
}

export default Contact;