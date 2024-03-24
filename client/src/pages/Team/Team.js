import './Team.css'

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
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/karan-mundhada-075b071b7/'
        },
        {
            name: 'Hitesh',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Atharva',
            img: 'https://i.postimg.cc/JsrLKfNX/Atharva-Date.jpg',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/atharva-date-04345b256/'
        },
        {
            name: 'Riddhi',
            img: 'https://i.postimg.cc/c630JM1v/Riddhi-Kulkarni.jpg',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/riddhi-kulkarni-9a6b84232/'
        },
    ]
    return (
        <div className='team'>

            <h1 className='topic-title'>Web Team</h1>
            <div class="coreteam-members">

                {
                    webteam.map((data) => (
                        <section class="nes-container is-dark member-card">
                            <div class="avatar">
                                <img data-src={data.img} alt="Core Member B.C.Rikko" class="" src={data.img}></img>
                            </div>
                            {console.log(data)}
                            <div class="profile">
                                <h4 class="name">{data.name}</h4>
                                {/* <p>Creator of NES.css</p> */}
                                <div>
                                    <a href={data.github} target="_blank" rel="noopener" aria-label="github">
                                        <i class="nes-icon github"></i>
                                    </a>
                                    <a href={data.linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                                        <i class="nes-icon linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
            
            
            <h1 className='topic-title'>NTH-TEAM</h1>
            {/* <div style="display: flex; justify-content: center;"> */}
            <a href="https://github.com/4k1k0" target="_black" class="contributor">
            <img data-src="https://i.postimg.cc/Pv1jFhVW/Jobin.jpg" alt="Contributor 4k1k0" class="nes-avatar is-large is-rounded" src="https://i.postimg.cc/Pv1jFhVW/Jobin.jpg"></img>
            <p>Jobin</p>
            </a>
            <a href="https://github.com/4k1k0" target="_black" class="contributor">
            <img data-src="https://i.postimg.cc/PpwsPTjg/Samir.jpg" alt="Contributor 4k1k0" class="nes-avatar is-large is-rounded" src="https://i.postimg.cc/PpwsPTjg/Samir.jpg"></img>
            <p>Samir</p>
            </a>
            <a href="https://github.com/4k1k0" target="_black" class="contributor">
            <img data-src="https://i.postimg.cc/N57t6sHY/Samruddhi.jpg" alt="Contributor 4k1k0" class="nes-avatar is-large is-rounded" src="https://i.postimg.cc/N57t6sHY/Samruddhi.jpg"></img>
            <p>Samruddhi</p>
            </a>
            <a href="https://github.com/4k1k0" target="_black" class="contributor">
            <img data-src="https://i.postimg.cc/dLKvZkD4/Srinidhi1.jpg" alt="Contributor 4k1k0" class="nes-avatar is-large is-rounded" src="https://i.postimg.cc/dLKvZkD4/Srinidhi1.jpg"></img>
            <p>Srinidhi</p>
            </a>
            {/* </div> */}
        </div>
    )
}

export default Team;