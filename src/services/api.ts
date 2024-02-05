import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pipefy.com/graphql', // Endpoint da API do Pipefy
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEFY_API_TOKEN}`, // Use seu token de API do Pipefy
    },
});

export default api;
