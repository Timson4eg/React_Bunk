import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../services/Auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const { isAuth, setIsAuth } = useAuth()

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => {
			AuthService.main(email, password, type)
		},
		{
			onSuccess: data => {
				setIsAuth(true)
				navigate('/')
				reset()
			}
		}
	)

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [setIsAuth])

	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			onSubmit,
			register,
			errors,
			reset,
			setType,
			handleSubmit
		}),
		[isLoading, errors]
	)
}
