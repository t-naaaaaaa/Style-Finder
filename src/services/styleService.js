import fetchAPI from "./api";

const getStyleRecommendations = async (userPreferences) => {
  const endpoint = "/styles/recommendations";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPreferences),
  };
  return fetchAPI(endpoint, options);
};

export { getStyleRecommendations };
