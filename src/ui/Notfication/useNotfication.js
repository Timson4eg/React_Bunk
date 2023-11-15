export const useNotfication = () => {
	const message = ''
	const type = ''
	const dateForNotfication = (messages, types) => {
		console.log(messages, types)
		message = messages
		type = types
		return message, type
	}
	console.log(message, type)
	return { message, type, dateForNotfication }
}
