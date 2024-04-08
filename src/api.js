import axios from 'axios'
import Cookies from 'js-cookie'
// import { TOKEN } from './app.constans'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
export const TOKEN = 'qqyopta'

export const $axios = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})

$axios.interceptors.request.use(config => {
	config.headers.Authorization = Cookies.get(TOKEN)
		? `Bearer ${Cookies.get(TOKEN)}`
		: ''
	return config
})
