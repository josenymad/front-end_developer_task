import axios from "axios";

const getMatchData = async (setMatchData, setAlert) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/matchs";

  try {
    // destructuring nested objects from API response
    const {
      data: { match: matchData },
    } = await axios.get(endpoint);

    setMatchData(matchData);
  } catch (error) {
    setAlert(error.message);
  }
};

export default getMatchData;
