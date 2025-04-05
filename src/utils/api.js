import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const DATA_URL = import.meta.env.VITE_DATA_API_URL;

export const fetchMembers = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching members:", err);
    throw err;
  }
};

export const fetchData = async () => {
  try {
    const res = await axios.get(DATA_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
