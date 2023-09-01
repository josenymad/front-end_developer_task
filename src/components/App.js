import React, { useEffect, useState } from "react";
import "../styles/app.css";
import getMatchData from "../requests/getMatchData";
import MatchInfo from "./MatchInfo";

const App = () => {
  const [teams, setTeams] = useState({ home: "", away: "" });

  useEffect(() => {
    getMatchData(setTeams);
  }, []);

  return (
    <div className="App">
      <h1 className="App__header">Premier League</h1>
      <MatchInfo teams={teams} />
    </div>
  );
};

export default App;
