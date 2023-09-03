import React from "react";
import "../styles/detailed-match-stats.css";

const DetailedMatchStats = ({ liveData }) => {
  // used array destructuring to save multiple variables efficiently
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
        <ul className="detailed-match-stats__full-time__home-team__list">
          <li className="detailed-match-stats__full-time__home-team__shots">
            {homeTeamShots}
          </li>
          <li className="detailed-match-stats__full-time__home-team__shots-on-target">
            {homeTeamShotsOnTarget}
          </li>
          <li className="detailed-match-stats__full-time__home-team__corners">
            {homeTeamCorners}
          </li>
          <li className="detailed-match-stats__full-time__home-team__possession">
            {homeTeamPossession}%
          </li>
        </ul>
        <ul className="detailed-match-stats__full-time__descriptions__list">
          <li className="detailed-match-stats__full-time__descriptions__shots">
            Shots
          </li>
          <li className="detailed-match-stats__full-time__descriptions__shots-on-target">
            Shots On Target
          </li>
          <li className="detailed-match-stats__full-time__descriptions__corners">
            Corners
          </li>
          <li className="detailed-match-stats__full-time__descriptions__possession">
            Possession
          </li>
          <li className="detailed-match-stats__full-time__descriptions__yellow-cards">
            Yellow Cards
          </li>
          <li className="detailed-match-stats__full-time__descriptions__red-cards">
            Red Cards
          </li>
        </ul>
        <ul className="detailed-match-stats__full-time__away-team__list">
          <li className="detailed-match-stats__full-time__away-team__shots">
            {awayTeamShots}
          </li>
          <li className="detailed-match-stats__full-time__away-team__shots-on-target">
            {awayTeamShotsOnTarget}
          </li>
          <li className="detailed-match-stats__full-time__away-team__corners">
            {awayTeamCorners}
          </li>
          <li className="detailed-match-stats__full-time__away-team__possession">
            {awayTeamPossession}%
          </li>
          <li className="detailed-match-stats__full-time__away-team__yellow-cards">
            {awayTeamYellowCards}
          </li>
          <li className="detailed-match-stats__full-time__away-team__red-cards">
            {awayTeamRedCards}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedMatchStats;
