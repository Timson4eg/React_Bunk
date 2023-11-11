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

	const { mutate: withdrawal } = useMutation(
		['withDrawl balance'],
		amount => UpdagteService.withDrawl(amount),
		{
			onSuccess: () => {
				client.invalidateQueries({ queryKey: ['get profil'] })
			}
		}
	)
	const { mutate: topUp } = useMutation(
		['topup balance'],
		amount => UpdagteService.topUp(amount),
		{
			onSuccess: () => {
				client.invalidateQueries({ queryKey: ['get profil'] })
			}
		}
	)

	const onSubmit = data => {
		if (btnType === 'purple') topUp({ amount: Number(data.amount) })
		else withdrawal({ amount: Number(data.amount) })

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
		greenBtn
	}
}
