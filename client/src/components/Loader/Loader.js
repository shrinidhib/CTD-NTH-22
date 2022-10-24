import './Loader.css'
const Loader = () => {
    return (
        <div class='layout'>
        {/* {console.log('in loader')} */}
            <div class='position'>

                <div class="loader">
                    <div class="ls-particles ls-part-1 mt-5"></div>
                    <div class="ls-particles ls-part-2 mt-5"></div>
                    <div class="ls-particles ls-part-3 mt-5"></div>
                    <div class="ls-particles ls-part-4 mt-5"></div>
                    <div class="ls-particles ls-part-5 mt-5"></div>
                    <div class="lightsaber ls-left ls-green"></div>
                    <div class="lightsaber ls-right ls-red"></div>
                    {/* <p>Loading</p> */}
                    
                </div>
                <div class="waviy">
                        <span style={{'--i':'1'}}>L</span>
                        <span style={{'--i':'2'}}>o</span>
                        <span style={{'--i':'3'}}>a</span>
                        <span style={{'--i':'4'}}>d</span>
                        <span style={{'--i':'5'}}>i</span>
                        <span style={{'--i':'6'}}>n</span>
                        <span style={{'--i':'7'}}>g</span>
                        <span style={{'--i':'8'}}>.</span>
                    </div>
            </div>
        </div>
    )
}

export default Loader;