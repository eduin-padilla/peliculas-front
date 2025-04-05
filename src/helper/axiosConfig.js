import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL : 'https://peliculasact.onrender.com',
})

export{
    axiosInstance
}
