import axios from "axios";

const API_URL = 'https://crypto-backend-j8rg.onrender.com';

export const getMarketTrend = async () => {
  const response = await axios.get(`${API_URL}/api/market-trend`);
  return response.data;
};

export const getMarketUpdate = async () => {
  const response = await axios.get(`${API_URL}/api/market-update`);
  return response.data;
};

export const getCryptoChart = async (coinId) => {
  const response = await axios.get(`${API_URL}/api/chart/${coinId}`);
  return response.data;
};

