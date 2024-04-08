import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { TOKEN } from '../api'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathName } = useLocation()

	useEffect(() => {
		console.log(isAuth)
	}, [])
}
