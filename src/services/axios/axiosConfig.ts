import axios from "axios";

const axiosConfig = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

export default axiosConfig;