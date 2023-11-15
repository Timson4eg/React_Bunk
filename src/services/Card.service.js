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
