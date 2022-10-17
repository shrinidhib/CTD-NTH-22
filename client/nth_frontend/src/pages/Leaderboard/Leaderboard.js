import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import axios from 'axios';

const Leaderboard = () => {
    const [scores, setScores] = useState([]);

    async function fetchScores() {
        // const scores = await api.database.listDocuments(process.env.REACT_APP_APPWRITE_COLLECTION_ID, [], 10, 0, '','', ['score'], ['DESC']);

        // console.log(scores.documents);
        // setScores(scores.documents);
        axios.get('http://localhost:8000/leaderboard',{
            headers: { "content-type": "application/json" }
            
        })
            
            .then(data => {
                console.log(data)
                // navigate("/question/put_your_ans_here");
            })
            .catch(err => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     console.log("Realtime function called");
    //     const unsubscribe = api.subscribe([process.env.REACT_APP_APPWRITE_COLLECTIONS], (data) => {
    //         if (data.event === 'database.documents.create') {
                
    //             const newScores = [...scores];
    //             const newScore = data.payload;
    //             newScores.push(newScore);
    //             newScores.sort((a, b) => b.score - a.score);
    //             newScores.splice(10, newScores.length - 10);
    //             setScores(newScores);

    //         } else if (data.event === 'database.documents.update') {
    //             fetchScores();
    //         }
    //     })
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [scores])
    
    useEffect(() => {
        console.log("fetching scores");
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
                        <td className="tdhead">Score</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {scores.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="tdbody">{idx + 1}</td>
                                <td className="tdbody">{val.player}</td>
                                <td className="tdbody">{val.score}</td>
                            </tr>
                        );
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard