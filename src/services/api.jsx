import axios from "axios"

export const api = axios.create({
	baseURL: 'https://tracking-deploy.onrender.com',
	timeout: 10000,
})