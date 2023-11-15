import { $axios } from '../api'

class UpdateService {
	async action(amount, path) {
		return $axios.patch(`cards/balance/${path}`, amount)
	}
	// async withDrawl(amount) {
	// 	return $axios.patch('/cards/balance/withdrawal', amount)
	// }
}

export default new UpdateService()
