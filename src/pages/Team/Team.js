import './Team.css'
import {useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
const Team = () => {
    const webteam = [
        {
            name: 'Kshitij',
            img: 'https://i.postimg.cc/T1GPFsTt/kshitij1.jpg',
            github: 'https://github.com/KshitijDhapse',
            linkedin: 'https://www.linkedin.com/in/kshitijdhapse/'
        },
        {
            name: 'Karan',
            img: 'https://i.postimg.cc/9DLjkLbn/Karan.jpg',
            github: 'https://github.com/Karan-mundhada',
            linkedin: 'https://www.linkedin.com/in/karan-mundhada-075b071b7/'
        },
        {
            name: 'Hitesh',
            img: 'https://i.postimg.cc/PrMvqYnh/Profile-Picture.jpg',
            github: 'https://github.com/Hvshitesh',
            linkedin: 'https://www.linkedin.com/in/hitesh-sonawane-0a3129257/'
        },
        {
            name: 'Atharva',
            img: 'https://i.postimg.cc/JsrLKfNX/Atharva-Date.jpg',
            github: 'https://github.com/Atharva9621',
            linkedin: 'https://www.linkedin.com/in/atharva-date-04345b256/'
        },
        {
            name: 'Riddhi',
            img: 'https://i.postimg.cc/c630JM1v/Riddhi-Kulkarni.jpg',
            github: 'https://github.com/riddhikul',
            linkedin: 'https://www.linkedin.com/in/riddhi-kulkarni-9a6b84232/'
        },
    ]
    const nthteam=[
        {
            name: 'Jobin',
            img: 'https://i.postimg.cc/Pv1jFhVW/Jobin.jpg',
            insta:'https://www.instagram.com/jobin.j0/'
        },
        {
            name: 'Shrinidhi',
            img: 'https://i.postimg.cc/dLKvZkD4/Srinidhi1.jpg',
            insta:'https://instagram.com/_nidhi1214'
        },
        {
            name: 'Samruddhi',
            img: 'https://i.postimg.cc/N57t6sHY/Samruddhi.jpg',
            insta:'https://www.instagram.com/samruddhi.__.shinde/'
        },
        {
            name: 'Samir',
            img: 'https://i.postimg.cc/PpwsPTjg/Samir.jpg',
            insta:'https://www.instagram.com/_samirwankhede_/'
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