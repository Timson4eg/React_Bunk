import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import CardService from '../../../services/Card.service'
import { useContacts } from '../../../hooks/useContacts'
import { useAuth } from '../../../hooks/useAuth'
import { useEffect, useMemo } from 'react'
import { useCardFormat } from '../../../utils/useCardFormat'

export const useTransfer = setVisiblePopUp => {
	const { data, isLoading } = useContacts()
	const { setToCardNumber, toCardNumber } = useAuth()
	const { defaultCardNumber, normalizeCardNumber } = useCardFormat()

	const client = useQueryClient()

	const { mutate, isSuccess, error } = useMutation(
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

	const {
		register,
		handleSubmit,
		formState: errors,
		reset,
		setValue
	} = useForm()

	useEffect(() => {
		fillInput(toCardNumber)
	}, [toCardNumber, setToCardNumber])

	const onSubmit = data => {
		setVisiblePopUp(true)
		setToCardNumber(defaultCardNumber(data.toCardNumber))
		reset()
	}

	const fillInput = number => {
		setValue('toCardNumber', normalizeCardNumber(number))
	}

	return {
		data,
		isLoading,
		register,
		handleSubmit,
		errors,
		error,
		fillInput,
		onSubmit,
		isSuccess,
		mutate,
		normalizeCardNumber
	}
	// return useMemo(
	// 	() => (),
	// 	[error, errors, isLoading, isSuccess, loadNotfication, status]
	// )
}

// useMemo(
// 	() => ({ 	}),	[error, errors, isLoading, isSuccess]
// )
