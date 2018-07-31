import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080'
});

{/*instance.defaults.headers.common['Authorization'] = 'Token da74e73c798a7fd94141546f7469d57d931e4913'; */}

// instance.interceptors.request...

export default instance;
