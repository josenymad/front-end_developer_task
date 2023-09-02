import React, { useEffect, useState } from "react";
import "../styles/app.css";
import getMatchData from "../requests/getMatchData";
import MatchInfo from "./MatchInfo";

const App = () => {
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    getMatchData(setMatchData);
  }, []);

  // the match data has loaded
  if (Object.keys(matchData).length) {
    const { name: competitionName } = matchData.meta.competition;

    return (
      <div className="App">
        <h1 className="App__header">{competitionName}</h1>
        <MatchInfo matchData={matchData} />
      </div>
    );
  }

  return (
    <p className="App__no-data">
      Sorry, there may be a problem with our servers if the stats have not
      loaded after a while. Please try again later.
    </p>
  );
};

export default App;
