import React from "react";

const MatchInfo = ({ teams }) => {
  const { home, away } = teams;
  return (
    <div className="MatchInfo">
      <h2 className="MatchInfo__home-team">{home}</h2>
      <h2 className="MatchInfo__away-team">{away}</h2>
    </div>
  );
};

export default MatchInfo;
