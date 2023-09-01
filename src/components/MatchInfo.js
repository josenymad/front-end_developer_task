import React from "react";

const MatchInfo = ({ teams, scores }) => {
  const { homeTeam, awayTeam } = teams;
  const { homeScore, awayScore } = scores;
  return (
    <div className="match-info">
      <div className="match-info__home-team">
        <h2 className="match-info__home-team__name">{homeTeam}</h2>
        <h3 className="match-info__home-team__score">{homeScore}</h3>
      </div>
      <div className="match-info__away-team">
        <h2 className="match-info__away-team__name">{awayTeam}</h2>
        <h3 className="match-info__away-team__score">{awayScore}</h3>
      </div>
    </div>
  );
};

export default MatchInfo;
