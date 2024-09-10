import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json',
    },
});

export default {
    getUsersByUserNames(usernames) {
        const query = usernames.map(username => `username=${encodeURIComponent(username)}`).join('&');
        return axiosApi.get(`users?${query}`);
    },
    getUsersById(usernames) {
        const query = usernames.map(username => `id=${encodeURIComponent(username)}`).join('&');
        return axiosApi.get(`users?${query}`);
    }
}
