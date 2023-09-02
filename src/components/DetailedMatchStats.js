import React from "react";
import "../styles/detailed-match-stats.css";

const DetailedMatchStats = ({ liveData }) => {
  // destructuring to save variables for rendering
  const [
    { value: homeTeamShots },
    { value: homeTeamShotsOnTarget },
    { value: homeTeamCorners },
    { value: homeTeamPossession },
  ] = liveData.lineups.home.stats;
  const [
    { value: awayTeamYellowCards },
    { value: awayTeamRedCards },
    { value: awayTeamCorners },
    { value: awayTeamShotsOnTarget },
    { value: awayTeamShots },
    { value: awayTeamPossession },
  ] = liveData.lineups.away.stats;

  return (
    <div className="detailed-match-stats">
      <h4 className="detailed-match-stats__full-time__header">Full Time</h4>
      <div className="detailed-match-stats__full-time__container">
        <div className="detailed-match-stats__full-time__home-team">
          <p className="detailed-match-stats__full-time__home-team__shots">
            {homeTeamShots}
          </p>
          <p className="detailed-match-stats__full-time__home-team__shots-on-target">
            {homeTeamShotsOnTarget}
          </p>
          <p className="detailed-match-stats__full-time__home-team__corners">
            {homeTeamCorners}
          </p>
          <p className="detailed-match-stats__full-time__home-team__possession">
            {homeTeamPossession}%
          </p>
        </div>
        <div className="detailed-match-stats__full-time__descriptions">
          <p className="detailed-match-stats__full-time__descriptions__shots">
            Shots
          </p>
          <p className="detailed-match-stats__full-time__descriptions__shots-on-target">
            Shots On Target
          </p>
          <p className="detailed-match-stats__full-time__descriptions__corners">
            Corners
          </p>
          <p className="detailed-match-stats__full-time__descriptions__possession">
            Possession
          </p>
          <p className="detailed-match-stats__full-time__descriptions__yellow-cards">
            Yellow Cards
          </p>
          <p className="detailed-match-stats__full-time__descriptions__red-cards">
            Red Cards
          </p>
        </div>
        <div className="detailed-match-stats__full-time__away-team">
          <p className="detailed-match-stats__full-time__away-team__shots">
            {awayTeamShots}
          </p>
          <p className="detailed-match-stats__full-time__away-team__shots-on-target">
            {awayTeamShotsOnTarget}
          </p>
          <p className="detailed-match-stats__full-time__away-team__corners">
            {awayTeamCorners}
          </p>
          <p className="detailed-match-stats__full-time__away-team__possession">
            {awayTeamPossession}%
          </p>
          <p className="detailed-match-stats__full-time__away-team__yellow-cards">
            {awayTeamYellowCards}
          </p>
          <p className="detailed-match-stats__full-time__away-team__red-cards">
            {awayTeamRedCards}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedMatchStats;
