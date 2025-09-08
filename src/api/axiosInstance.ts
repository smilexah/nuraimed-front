import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api", //"https://api.di-clinic.kz/api", // process.env.NEXT_PUBLIC_API_BASE_URL ||
    // timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
