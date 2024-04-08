import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../services/Auth.service'
import { TOKEN } from '../../api'
import Cookies from 'js-cookie'
import { useCheckToken } from '../../hooks/useCheckToken'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const { isAuth, setIsAuth } = useAuth()
	const [btnSubmitState, setBtnSubmitState] = useState(true)

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
				console.log(1)
				setIsAuth(true)
				navigate('/')
				reset()
			}
		}
	)

	useEffect(() => {
		console.log(1)
		if (isAuth) navigate('/')
	}, [setIsAuth])

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
			setBtnSubmitState
		}),
		[isLoading, errors, btnSubmitState]
	)
}
