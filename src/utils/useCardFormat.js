export const useCardFormat = () => {
	const normalizeCardNumber = number => {
		return number.replace(/(\d{4})(?=\d)/g, '$1-')
	}
	const defaultCardNumber = number => {
		return number.match(/\d/g).join('')
	}
	return { normalizeCardNumber, defaultCardNumber }
}
