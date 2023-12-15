import fetchAPI from "./api";

const getWeatherInfo = async (location) => {
  const endpoint = `/weather?location=${encodeURIComponent(location)}`;
  return fetchAPI(endpoint);
};

export { getWeatherInfo };
