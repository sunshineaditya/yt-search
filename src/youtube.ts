import axios from 'axios';

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    playlistId: 'Cf92cs7X5ak', //replace with ur play list id
    key: '', // replace with your actual API Key
  },
});