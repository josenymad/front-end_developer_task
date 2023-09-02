import axios from "axios";

const getMatchData = async (setMatchData) => {
  const endpoint = "https://frontend-tech-test-ashy.vercel.app/api/match";

  try {
    // destructuring nested objects from API response
    const {
      data: { match },
    } = await axios.get(endpoint);

    setMatchData(match);
  } catch (error) {
    console.log(error);
  }
};

export default getMatchData;
