import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:4000',
    baseUrl: 'https://peliculasact.onrender.com'
})

export{
    axiosInstance
}
