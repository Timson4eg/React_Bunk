import axios from 'axios'
import Cookies from 'js-cookie'
// import { TOKEN } from './app.constans'

// const API_URL = `${import.meta.env.SERVET_URL}/api`
const API_URL = `http://localhost:4200/api`
export const TOKEN = 'qqyopta'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
