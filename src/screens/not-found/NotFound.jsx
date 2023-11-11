import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const { isAuth } = useAuth
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate('/auth')
	}, [])

	return <div>Not found</div>
}

export default NotFound
