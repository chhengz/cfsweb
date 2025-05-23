import axios from "axios";
const BASE_URL = import.meta.env.VITE_BAST_URL;

export const fetchData = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
