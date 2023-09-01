import axios from "axios";

const getMatchData = async (setTeams, setScores) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/match";

  try {
    const matchData = await axios.get(endpoint);
    setTeams({
      homeTeam: matchData.data.match.contestant[0].name,
      awayTeam: matchData.data.match.contestant[1].name,
    });
    setScores({
      homeScore: matchData.data.match.liveData.matchDetails.scores.total.home,
      awayScore: matchData.data.match.liveData.matchDetails.scores.total.away,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getMatchData;
