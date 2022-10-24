import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import Request from "../../api/requests";
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const Leaderboard = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
    const [rank, setRank] = useState([]);
    const navigate=useNavigate();
    const eventStatus=async()=>{
        try{
          const res= await Request.time();
        //   console.log(res);
        //   console.log('started'); 
          if(res.data.is_started||res.data.is_ended){
            // props.loginStatus===false&&props.toast.toast.info('Login First ',{autoClose:6000})
            // setIs_event(true);
            fetchScores();
          }
                            
          else{
            props.toast.toast('Event Is Yet To Start', { autoClose: 5000 });
            navigate("/");
          }
                            
        }
        catch(err){
          console.log(err);
          props.toast.toast.error("Network Error", { autoClose: 4000 });
        }
      }
    const fetchScores= async()=> {
            await Request.leaderboard()
            .then(res => {
                // console.log(res)
                setRank(res.data)
            })
            .catch(err => {
                props.toast.toast.error("Error Fetching Leaderboard");
                console.log(err);
            })
    }

    useEffect(() => {
        // console.log("fetching scores");
        // fetchScores();
        setTimeout(()=>{
            setLoaderStatus(false);
            // console.log('in timee');
            eventStatus();
        },3000)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        loaderStatus
        ?
        <Loader/>
        :
        <div className="Leaderboard">
            <div className="high-scores">
                <p>High Scores</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className="tdhead">Rank</td>
                        <td className="tdhead">Name</td>
                        <td className="tdhead">Level</td>
                    </tr>
                </thead>
                <tbody>
                    {rank.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="tdbody">{idx + 1}</td>
                                <td className="tdbody">{val.username}</td>
                                <td className="tdbody">{val.current_level}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard