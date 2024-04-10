import Cookies from 'js-cookie'
import React, { createContext, useEffect, useState } from 'react'
import { TOKEN } from '../api'
export const AuthContext = createContext()

const AuthProviders = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))
	const [notification, setNotification] = useState(false)
	const [error, setError] = useState()
	const [toCardNumber, setToCardNumber] = useState('')

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				toCardNumber,
				setToCardNumber,
				notification,
				setNotification,
				error,
				setError
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProviders
