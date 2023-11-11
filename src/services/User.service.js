import { $axios } from '../api'

class UserService {
	async getProfil() {
		return $axios.get('users/profile')
	}
	async getAll() {
		return $axios.get('users')
	}
}

export default new UserService()
