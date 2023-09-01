import React, { useEffect, useState } from "react";
import "../styles/app.css";
import getMatchData from "../requests/getMatchData";
import MatchInfo from "./MatchInfo";

const App = () => {
  const [teams, setTeams] = useState({ homeTeam: "", awayTeam: "" });
  const [scores, setScores] = useState({ homeScore: 0, awayScore: 0 });

  useEffect(() => {
    getMatchData(setTeams, setScores);
  }, []);

  return (
    <div className="App">
      <h1 className="App__header">Premier League</h1>
      <MatchInfo teams={teams} scores={scores} />
    </div>
  );
};

export default App;
