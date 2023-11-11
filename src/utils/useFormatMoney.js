export const useFormatMoney = number => {
	return new Intl.NumberFormat('ru-RU', {
		currency: 'RUB',
		style: 'currency'
	}).format(number)
}
