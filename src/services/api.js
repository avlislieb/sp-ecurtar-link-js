import axios from "axios";

export const key = "fc3a73da863d235359738590931240066baa5382";


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;