import React, { useEffect, useState } from "react";
import "../styles/app.css";
import getMatchData from "../requests/getMatchData";
import MatchInfo from "./MatchInfo";

const App = () => {
  const [matchData, setMatchData] = useState();
  const [alert, setAlert] = useState(
    "If the stats haven't loaded after a while there may be a problem with the server",
  );

  useEffect(() => {
    getMatchData(setMatchData, setAlert);
  }, []);

  if (matchData) {
    const { name: competitionName } = matchData.meta.competition;

    return (
      <div className="App">
        <h1 className="App__header">{competitionName}</h1>
        <MatchInfo matchData={matchData} />
      </div>
    );
  }

  return (
    <p className="App__no-data">{alert}. Sorry, please try again later.</p>
  );
};

export default App;
