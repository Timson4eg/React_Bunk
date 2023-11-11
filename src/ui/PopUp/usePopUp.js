import { useForm } from 'react-hook-form'
import { useTransfer } from '../../screens/home/TransferMoney/useTransfer'

export const usePopUp = (setVisiblePopUp, fromCardNumber) => {
	const { handleSubmit, register, formState: errors, reset } = useForm()
	const { mutate } = useTransfer()

	const onSubmit = data => {
		mutate(Number(data.amount), fromCardNumber)
		reset()
		setVisiblePopUp(false)
	}
	return {
		onSubmit,
		handleSubmit,
		register,
		errors
	}
}
