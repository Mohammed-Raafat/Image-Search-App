import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UAkybUXGc3-k1qNnEjCjiagkT4yMl5bteDX2H9FLHNQ'
    }
});