import { useForm } from 'react-hook-form'
import { useTransfer } from '../../screens/home/TransferMoney/useTransfer'

export const usePopUp = (setVisiblePopUp, fromCardNumber, callback) => {
	const { handleSubmit, register, formState: errors, reset } = useForm()
	const { mutate, isSuccess, error } = useTransfer(callback)

	const onSubmit = data => {
		mutate(Number(data.amount), fromCardNumber)
		if (error) callback(false)
		else callback(true)

		reset()
		setVisiblePopUp(false)
	}
	return {
		onSubmit,
		handleSubmit,
		register,
		errors,
		isSuccess
	}
}
