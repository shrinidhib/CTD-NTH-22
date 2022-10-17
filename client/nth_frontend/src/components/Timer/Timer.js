
// import FlipDown from '.\FlipDown'
import {useState,useEffect} from 'react';

const Timer=()=>{
    // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
    const [day,setDay]=useState(0);
    const [hour,setHour]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
        // var test = new Date(Date.UTC(2022, 9, 28));
        // let eventDate=1666999800000;
        let eventDate=1666017000000;
        var test = new Date();
        // console.log(test);
        // console.log(test.getDay(),test.getDate(),test.getTime())
        // let start=new Date(eventDate);
        // console.log(start);
        // var date = new Date(1324339200000);
        // var dateToStr = date.toUTCString().split(' ');
        // var cleanDate = dateToStr[2] + ' ' + dateToStr[1] ;
        // console.log(cleanDate);
        eventDate-=Date.now();
        
        const interval = setInterval(() => {
            eventDate--;
            console.log('here');
            setSeconds(Math.floor((eventDate / 1000) % 60));
            setMinutes(Math.floor((eventDate / (1000 * 60)) % 60));
            setHour(Math.floor((eventDate / (1000 * 60 * 60)) % 24));
            setDay(Math.floor((eventDate)/(1000*60*60*24)));    
          }, 1000);
          return () => clearInterval(interval);
    },[day,hour,minutes,seconds,day])
    return(
        // <div id="flipdown" class="flipdown">hey</div>
        <div style={{color:'white'}}>
            {day}:{hour}:{minutes}:{seconds}
        </div>
    )
}

export default Timer;