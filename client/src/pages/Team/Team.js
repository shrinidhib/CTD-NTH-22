import './Team.css'
import {useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import vansh1 from '../../assets/team/vansh1.png'
import mrunal from '../../assets/team/mrunal.png'
import harsh from '../../assets/team/harsh.png'
import devraj from '../../assets/team/devraj.png'
import omkar from '../../assets/team/omkar.png' 
import bhakti from '../../assets/team/bhakti.png' 
import vidhi from '../../assets/team/vidhi.png'  
import safiya from '../../assets/team/safiya.png'  
const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const webteam = [
        {
            name: 'Vansh Teppalwar',
            img: vansh1,
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
        {
            name: 'Mrunal Golivadekar',
            img: mrunal,
            github: ' https://github.com/mrunalg25',
            linkedin: 'https://www.linkedin.com/in/mrunal-golivadekar-27b34121a/'
        }
    ]
    const nthteam=[
        {
            name: 'Devraj',
            img: devraj,
            insta:'https://www.instagram.com/devrajshetake/'
        },
        {
            name: 'Harsh',
            img: harsh,
            insta:'https://instagram.com/_harusu_san_?igshid=YmMyMTA2M2Y='
        },
        {
            name: 'Bhakti',
            img: bhakti,
            insta:'https://instagram.com/bhakti.mahurkar22?igshid=YmMyMTA2M2Y='
        },
        {
            name: 'Vidhi',
            img: vidhi,
            insta:'https://www.instagram.com/sovidhii/'
        },
        {
            name: 'Safiya',
            img: safiya,
            insta:'https://www.linkedin.com/in/safiya-amin-907386206/'
        },
        {
            name: 'Omkar',
            img: omkar,
            insta:'https://instagram.com/omkarkulkarni25?igshid=YmMyMTA2M2Y='
        }
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
                            {console.log(data)}
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