import axios from "axios";

export const httpClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    }
});
