import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathName } = useLocation()

	useEffect(() => {
		const token = Cookies.get()
		if (!token) setIsAuth(false)
	}, [pathName, isAuth])
}
