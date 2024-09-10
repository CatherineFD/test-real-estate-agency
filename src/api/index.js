import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json',
    },
});

export default {
    getUserByUserName(username) {
        return axiosApi.get('users?username='+username);
    },
    getUsersByUserNames(usernames) {
        const query = usernames.map(username => `username=${encodeURIComponent(username)}`).join('&');
        return axiosApi.get(`users?${query}`);
    }
}
