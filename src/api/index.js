import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json',
    },
});

export default {
    getUsersByUserNames(usernames, limit, page) {
        const queryUsers = usernames.map(username => `username=${encodeURIComponent(username)}`).join('&');
        const query = `${queryUsers}&_limit=${limit}&_page=${page}`;
        return axiosApi.get(`users?${query}`);
    },
    getUsersById(usernames, limit, page) {
        const queryUsers = usernames.map(username => `id=${encodeURIComponent(username)}`).join('&');
        const query = `${queryUsers}&_limit=${limit}&_page=${page}`;
        return axiosApi.get(`users?${query}`);
    }
}
