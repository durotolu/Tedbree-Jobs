// import axios from 'axios';
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://api.jobboard.tedbree.com/v1/',
    headers: {
      Authorization: token || "96|4UCpDIbWFT3nmp3kQWeuqC7vm03aa1eqFdG2AgbO",
      'Content-Type': 'application/json'
    }
  });
};