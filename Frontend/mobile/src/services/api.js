import axios from 'axios'

const api = axios.create({
    baseURL: '192.168.100.7:8080'
})

export default api