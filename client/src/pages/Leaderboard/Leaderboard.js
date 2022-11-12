import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import Request from "../../api/requests";
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import LeaderboardList from './LeaderboardList';
const Leaderboard = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
    const [rank, setRank] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rankPerPage] = useState(2);
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
          props.toast.toast.error(err.message+', visit contact page to resolve',{ autoClose: 5000 });
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
      // Get current rank
  const indexOfLastPost = currentPage * rankPerPage;
  const indexOfFirstPost = indexOfLastPost - rankPerPage;
  const currentrank = rank.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        loaderStatus
        ?
        <Loader/>
        :
        
        // <>
        <LeaderboardList rankPerPage={rankPerPage} totalrank={rank.length} paginate={paginate} rank={currentrank} indexOfFirstPost={indexOfFirstPost}/>
        
    )
}

export default Leaderboard