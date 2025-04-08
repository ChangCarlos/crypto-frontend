import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMarketTrend = async () => {
  const response = await axios.get(`${API_URL}/market-trend`);
  return response.data;
};

export const getMarketUpdate = async () => {
  const response = await axios.get(`${API_URL}/market-update`);
  return response.data;
};

export const getCryptoChart = async (coinId) => {
  const response = await axios.get(`${API_URL}/chart/${coinId}`);
  return response.data;
};
