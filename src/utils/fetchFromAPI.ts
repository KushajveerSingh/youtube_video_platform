import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}