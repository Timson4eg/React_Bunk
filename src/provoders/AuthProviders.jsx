import Cookies from 'js-cookie'
import React, { createContext, useEffect, useState } from 'react'
import { TOKEN } from '../api'
export const AuthContext = createContext()

const AuthProviders = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	const [toCardNumber, setToCardNumber] = useState('')

	// useEffect(() => {
	// 	const token = Cookies.get()
	// 	if (token.qqyopta) {
	// 		console.log(token.qqyopta)
	// 	}
	// }, [isAuth])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				toCardNumber,
				setToCardNumber
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProviders
