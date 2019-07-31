import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.myjson.com/bins/kw7ai'
});

export default instance;