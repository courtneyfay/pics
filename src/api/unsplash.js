import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c4b956b73c728e144fb1b6b09ce953b3630790319bf6ae9abcf1e053bd27ab12'
    }
});