import axios from 'axios';

const KEY = 'AIzaSyD1845wRqfh_gM2wVftNE5x1dCbFw8VAM8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
