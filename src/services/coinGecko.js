import axios from "axios";

export const getCryptoChart = async (coinId) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/chart/${coinId}`);
    return res.data;
  } catch (err) {
    console.error("Erro ao buscar gráfico:", err);
    return [];
  }
};
