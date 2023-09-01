import axios from "axios";

const getMatchData = async (setTeams) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/match";

  try {
    const matchData = await axios.get(endpoint);
    setTeams({
      home: matchData.data.match.contestant[0].name,
      away: matchData.data.match.contestant[1].name,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getMatchData;
