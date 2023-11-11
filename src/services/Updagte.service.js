import { $axios } from '../api'

class UpdateService {
	topUp(amount) {
		return $axios.patch('cards/balance/top-up', amount)
	}
	withDrawl(amount) {
		return $axios.patch('/cards/balance/withdrawal', amount)
	}
}

export default new UpdateService()
