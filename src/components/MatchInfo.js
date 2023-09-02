import React from "react";
import arsenalBadge from "../images/arsenal.png";
import fulhamBadge from "../images/fulham.png";
import DetailedMatchStats from "./DetailedMatchStats";
import "../styles/match-info.css";

const MatchInfo = ({ matchData }) => {
  // destructuring to save variables for rendering
  const { contestant, liveData } = matchData;
  const homeTeamName = contestant[0].name;
  const awayTeamName = contestant[1].name;
  const { home: homeTeamScore, away: awayTeamScore } =
    liveData.matchDetails.scores.total;

  return (
    <div className="match-info">
      <div className="match-info__results">
        <div className="match-info__home-team">
          <img
            src={arsenalBadge}
            alt="Home Team Badge"
            className="match-info__home-team__badge"
          />
          <h2 className="match-info__home-team__name">{homeTeamName}</h2>
          <h3 className="match-info__home-team__score">{homeTeamScore}</h3>
        </div>
        <div className="match-info__away-team">
          <img
            src={fulhamBadge}
            alt="Away Team Badge"
            className="match-info__away-team__badge"
          />
          <h2 className="match-info__away-team__name">{awayTeamName}</h2>
          <h3 className="match-info__away-team__score">{awayTeamScore}</h3>
        </div>
      </div>

      <DetailedMatchStats liveData={liveData} />
    </div>
  );
};

export default MatchInfo;
