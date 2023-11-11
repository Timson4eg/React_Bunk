import { $axios } from '../api'

class TransactionService {
	async getall() {
		return $axios.get('/transactions')
	}
}

export default new TransactionService()
