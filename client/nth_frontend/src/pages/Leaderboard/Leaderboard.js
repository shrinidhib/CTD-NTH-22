import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import Request from "../../api/requests";

const Leaderboard = (props) => {
    const [rank, setRank] = useState([]);

    const fetchScores= async()=> {
            await Request.leaderboard()
            .then(res => {
                console.log(res)
                setRank(res.data)
            })
            .catch(err => {
                props.toast.toast.error("Error Fetching Leaderboard");
                console.log(err);
            })
    }

    useEffect(() => {
        // console.log("fetching scores");
        fetchScores();
    },[])

    return (
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