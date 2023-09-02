import React, { useEffect, useState } from "react";
import "../styles/app.css";
import getMatchData from "../requests/getMatchData";
import MatchInfo from "./MatchInfo";

const App = () => {
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    getMatchData(setMatchData);
  }, []);

  return (
    <div className="App">
      <h1 className="App__header">Premier League</h1>
      {Object.keys(matchData).length ? (
        <MatchInfo matchData={matchData} />
      ) : (
        <p className="App__no-data">
          Sorry, there may be a problem with our servers if the stats have not
          loaded after a while. Please try again later.
        </p>
      )}
    </div>
  );
};

export default App;
