// APIリクエストのための基本設定
const BASE_URL = "https://example.com/api"; // ここに実際のAPIのベースURLを設定

const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default fetchAPI;
