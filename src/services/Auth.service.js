import Cookies from 'js-cookie'
import { $axios, TOKEN } from '../api'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})
			if (data.accessToken) Cookies.set(TOKEN, data.accessToken)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}
export default new AuthService()
