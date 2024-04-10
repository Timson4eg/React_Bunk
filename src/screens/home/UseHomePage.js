import React, { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const UseHomePage = () => {
	const { isAuth, updateComponent, setUpdateComponent } = useAuth()
	const [visiblePopUp, setVisiblePopUp] = useState(false)
	const { notification, setNotification } = useAuth()
	const { error, setError } = useAuth()
	const [selectedUser, setSelectedUser] = useState('')

	const callBack = message => {
		if (message) {
			setNotification(true)
		} else {
			setError(true)
		}
	}

	const callBackSearch = cardNumber => {
		setSelectedUser(cardNumber)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setNotification(false)
			setError(false)
		}, 3000)

		return () => clearTimeout(timer)
	}, [callBack])
	return useMemo(
		() => ({
			isAuth,
			updateComponent,
			setUpdateComponent,
			notification,
			setNotification,
			selectedUser,
			setSelectedUser,
			callBackSearch,
			visiblePopUp,
			setVisiblePopUp,
			callBack
		}),
		[setError, callBack]
	)
}
