import React from 'react';
import Pagination from './Pagination';
const LeaderboardList = ({ rank, indexOfFirstPost,rankPerPage, totalrank ,paginate }) => {
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
                                <td className="tdbody">{indexOfFirstPost +idx + 1}</td>
                                <td className="tdbody">{val.username}</td>
                                <td className="tdbody">{val.current_level}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        <Pagination rankPerPage={rankPerPage} totalrank={totalrank} paginate={paginate} />
        </div>
  );
};

export default LeaderboardList;