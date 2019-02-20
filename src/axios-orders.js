import axios from 'axios';

const  instance = axios.create({
    baseURL: 'https://react-my-burger-2df95.firebaseio.com/'
});

export default instance;