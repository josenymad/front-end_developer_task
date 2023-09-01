import React from "react";
import arsenalBadge from "../images/arsenal.png";
import fulhamBadge from "../images/fulham.png";

const MatchInfo = ({ teams, scores }) => {
  const { homeTeam, awayTeam } = teams;
  const { homeScore, awayScore } = scores;
  return (
    <div className="match-info">
      <div className="match-info__home-team">
        <img
          src={arsenalBadge}
          alt="Home Team Badge"
          className="match-info__home-team__badge"
        />
        <h2 className="match-info__home-team__name">{homeTeam}</h2>
        <h3 className="match-info__home-team__score">{homeScore}</h3>
      </div>
      <div className="match-info__away-team">
        <img
          src={fulhamBadge}
          alt="Away Team Badge"
          className="match-info__away-team__badge"
        />
        <h2 className="match-info__away-team__name">{awayTeam}</h2>
        <h3 className="match-info__away-team__score">{awayScore}</h3>
      </div>
    </div>
  );
};

export default MatchInfo;
