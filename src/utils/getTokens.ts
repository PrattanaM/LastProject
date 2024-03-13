import axios from 'axios';

export default async function getTokens() {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
    }
    try {
        const response = await axios.post('https://api-dev2.keyspace.tech/auth/accessToken', {
            username: "pprsk@hotmail.com",
            password: "Pp6397931!",
            grant_type: "password",
        });
        const token = response.data.access_token;
        localStorage.clear();
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}