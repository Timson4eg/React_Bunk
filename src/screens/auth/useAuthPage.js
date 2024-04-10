import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../services/Auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const { isAuth, setIsAuth } = useAuth()
	const [btnSubmitState, setBtnSubmitState] = useState(true)
	const [message, setMessage] = useState('')
	const [isError, setIsError] = useState(false)
	const [notificationTimeout, setNotificationTimeout] = useState(null)

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading, isSuccess } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				setIsAuth(true)
				setMessage('Login')
				navigate('/')
				reset()
			},
			onError: error => {
				setMessage(error.message[0])
				setNotification(true)
				setIsError(true)
				setTimeout(() => {
					setIsError(false)
				}, 3000)
			}
		}
	)
	useEffect(() => {
		return () => {
			if (notificationTimeout) {
				clearTimeout(notificationTimeout)
			}
		}
	}, [])

	const onSubmit = data => {
		btnSubmitState ? setType('login') : setType('register')
		mutate(data)
	}
	return useMemo(
		() => ({
			onSubmit,
			register,
			errors,
			reset,
			setType,
			handleSubmit,
			btnSubmitState,
			setBtnSubmitState,
			message,
			isError,
			isSuccess
		}),
		[isLoading, errors, btnSubmitState, isError]
	)
}
