import { $axios } from '../api'

class CardService {
	async transfer(amount, fromCardNumber, toCardNumber) {
		return $axios.patch('/cards/transfer-money', {
			amount,
			fromCardNumber,
			toCardNumber
		})
	}
}
export default new CardService()

// {
// 	"amount": 50,
// 	"fromCardNumber": "4824139548824197",
// 	"toCardNumber": "5865548032361311"
// }
// class TransactionService {
// 	async getall() {
// 		return $axios.get('/transactions')
// 	}
// }
