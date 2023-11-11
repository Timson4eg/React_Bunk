import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import CardService from '../../../services/Card.service'
import { useContacts } from '../../../hooks/useContacts'
import { useAuth } from '../../../hooks/useAuth'

export const useTransfer = (setVisiblePopUp, refetchHistory, updatePage) => {
	const { data, isLoading } = useContacts()
	const { setToCardNumber, toCardNumber } = useAuth()
	const client = useQueryClient()

	const { mutate } = useMutation(
		['transferMOney'],
		(amount, fromCardNumber) =>
			CardService.transfer(amount, fromCardNumber, toCardNumber),
		{
			onSuccess: () => {
				client.invalidateQueries({ queryKey: ['getAll'] })
				client.invalidateQueries({ queryKey: ['get Statistic'] })
				client.invalidateQueries({ queryKey: ['get profil'] })
			}
		}
	)

	// const { mutate } = useMutation(
	// 	['transferMOney'],
	// 	(amount, fromCardNumber) => {
	// 		CardService.transfer(amount, fromCardNumber, toCardNumber)
	// 	},
	// 	{
	// 		onSuccess: () => {
	// 			client.invalidateQueries({ queryKey: ['get profil'] })
	// 		}
	// 	}
	// )
	// {
	// 	onSuccess: () => {
	// 		client.invalidateQueries({ queryKey: ['getAll'] })
	// 		client.invalidateQueries({ queryKey: ['get Statistic'] })
	// 		client.invalidateQueries({ queryKey: ['get profil'] })
	// 	}
	// }

	const {
		register,
		handleSubmit,
		formState: errors,
		reset,
		setValue
	} = useForm()

	const onSubmit = data => {
		setVisiblePopUp(true)
		setToCardNumber(data.toCardNumber)
		reset()
	}

	const fillInput = number => {
		setValue('toCardNumber', number)
	}

	return {
		data,
		isLoading,
		register,
		handleSubmit,
		errors,
		fillInput,
		onSubmit,
		mutate
	}
}
