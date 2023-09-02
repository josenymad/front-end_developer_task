import axios from "axios";

const getMatchData = async (setTeams, setScores) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/match";

  try {
    // destructuring nested objects from API response
    const {
      data: { match },
    } = await axios.get(endpoint);

    setTeams({
      homeTeam: match.contestant[0].name,
      awayTeam: match.contestant[1].name,
    });
    setScores({
      homeScore: match.liveData.matchDetails.scores.total.home,
      awayScore: match.liveData.matchDetails.scores.total.away,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getMatchData;
