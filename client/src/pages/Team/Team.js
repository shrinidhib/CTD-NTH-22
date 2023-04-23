import './Team.css'
import {useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import vansh from '../../assets/team/vansh.jpg'
import harsh from '../../assets/team/harsh.png'
import devraj from '../../assets/team/devraj.png'
import bhakti from '../../assets/team/bhakti.png'  
import riddhi from '../../assets/team/riddhi.jpeg'  
import dhapse from '../../assets/team/dhapse.jpg'  
import date from '../../assets/team/date.jpeg'  
import karan from '../../assets/team/karan.jpg'  
import kaushal from '../../assets/team/kaushal.jpg'  
const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const webteam = [
        {
            name: 'Vansh Teppalwar',
            img: vansh,
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Devraj Shetake',
            img: devraj,
            github: 'https://github.com/devrajshetake',
            linkedin: 'https://www.linkedin.com/in/devraj-shetake-439606206/'
        },
        {
            name: 'Harsh Bhat',
            img: harsh,
            github: 'https://github.com/Harususan',
            linkedin: 'https://www.linkedin.com/in/harshbhat/'
        },
    ]
    const nthteam=[
        {
            name: 'Riddhi',
            img: riddhi,
            insta:'https://www.instagram.com/riddhikul__/'
        },
        {
            name: 'Kshitij',
            img: dhapse,
            insta:'https://instagram.com/kshitij_dhapse/'
        },
        {
            name: 'Kaushal',
            img: kaushal,
            insta:'https://instagram.com/kaushal_n.kulkarni/'
        },
        {
            name: 'Atharva',
            img: date,
            insta:'https://www.instagram.com/atharva1_618/'
        },
        {
            name: 'Karan',
            img: karan,
            insta:'https://www.instagram.com/karanmundhadaofficial/'
        },
    ]
    return (
        <div className='team'>

            <h1 className='topic-title'>Web Team</h1>
            <div class="coreteam-members">

                {
                    webteam.map((data) => (
                        <section class="nes-container is-dark member-card ms-3">
                            <div class="avatar">
                                <img data-src={data.img} alt={data.name} class="" src={data.img}></img>
                            </div>
                            {/* {console.log(data)} */}
                            <div class="profile">
                                <h4 class="name">{data.name}</h4>
                                {/* <p>Creator of NES.css</p> */}
                                <div>
                                    <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="github">
                                        <i class="nes-icon github"></i>
                                    </a>
                                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                                        <i class="nes-icon linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
            
            
            <h1 className='topic-title'>NTH-TEAM</h1>
    
            <Container fluid className='container-adjust'>
                <Row className='nth-team'>
            {
                
                    nthteam.map((data)=>(
                <Col className="adjust" >
                    
                    <a href={data.insta} target="_black" class="contributor" rel="noopener noreferrer">
                    <img data-src={data.img} alt="Contributor" class="nes-avatar is-large is-rounded" src={data.img}></img>
                    <p>{data.name}</p>
                    </a>
                </Col>
                
                    ))
                
            }
            </Row>

              </Container>
        </div>
    )
}

export default Team;