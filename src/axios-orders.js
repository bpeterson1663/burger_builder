import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9b1fe.firebaseio.com/'
})

export default instance;