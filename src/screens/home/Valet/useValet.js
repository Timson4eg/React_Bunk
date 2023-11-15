import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import UpdagteService from '../../../services/Updagte.service'
import { useForm } from 'react-hook-form'

export const useValet = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const client = useQueryClient()

	const [btnType, setBtnType] = useState('')

	// const { mutate: withdrawal } = useMutation(
	// 	['action'],
	// 	amount => UpdagteService.withDrawl(amount),
	// 	{
	// 		onSuccess: () => {
	// 			client.invalidateQueries({ queryKey: ['get profil'] })
	// 		}
	// 	}
	// )
	const { mutate, isSuccess } = useMutation(
		['topup balance'],
		({ amount, path }) => UpdagteService.action({ amount }, path),
		{
			onSuccess: () => {
				client.invalidateQueries({ queryKey: ['get profil'] }, 'withdrawal')
			}
		}
	)

	const onSubmit = data => {
		if (btnType === 'purple')
			mutate({ amount: Number(data.amount), path: 'top-up' })
		else mutate({ amount: Number(data.amount), path: 'withdrawal' })

		reset()
	}

	const purpleBtn = e => {
		const type = 'purple'
		setBtnType(type)
	}

	const greenBtn = e => {
		const type = 'green'
		setBtnType(type)
	}
	return {
		register,
		handleSubmit,
		errors,
		reset,
		onSubmit,
		purpleBtn,
		greenBtn,
		isSuccess
	}
}
