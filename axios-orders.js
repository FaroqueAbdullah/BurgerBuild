import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-5b69b.firebaseio.com/'
});

export default instance;