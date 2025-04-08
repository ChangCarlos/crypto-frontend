import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getCryptoChart = async (coinId) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/chart/${coinId}`);
    return res.data;
  } catch (err) {
    console.error("Erro ao buscar gráfico:", err);
    return [];
  }
};
