import axios from "axios";

export const dummyJson = axios.create({
    baseUrl: 'https://dummyjson.com',
})