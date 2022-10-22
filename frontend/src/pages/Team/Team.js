import './Team.css'

const Team = () => {
    const webteam = [
        {
            name: 'Vansh Teppalwar',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Devraj',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Harsh',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Mrunal',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },
        {
            name: 'Bhakti',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
        },{
            name: 'Omkar',
            img: 'https://github.com/BcRikko.png?size=80',
            github: 'https://github.com/VanshTeppalwar',
            linkedin: 'https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/'
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
            
            <a href="https://github.com/4k1k0" target="_black" class="contributor">
            <img data-src="https://github.com/4k1k0.png?size=64" alt="Contributor 4k1k0" class="nes-avatar is-large is-rounded" src="https://github.com/4k1k0.png?size=64"></img>
            <p>Devraj</p>
            </a>

        </div>
    )
}

export default Team;