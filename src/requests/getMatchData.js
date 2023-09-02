import axios from "axios";

const getMatchData = async (setMatchData) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/match";

  try {
    // destructuring nested objects from API response
    const {
      data: { match: matchData },
    } = await axios.get(endpoint);

    setMatchData(matchData);
  } catch (error) {
    console.log(error);
  }
};

export default getMatchData;
