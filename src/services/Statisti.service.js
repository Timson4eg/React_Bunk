import { $axios } from '../api'

class StatisticService {
	async get() {
		return $axios('/statistics')
	}
}

export default new StatisticService()
