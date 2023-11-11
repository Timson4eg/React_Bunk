import React from 'react'

import Header from './Header/Header'
import { useCheckToken } from '../hooks/useCheckToken'
import Logo from './Header/Logo/Logo'
import { useAuth } from '../hooks/useAuth'
import { useProfil } from '../screens/home/useProfil'
import Loader from '../ui/Loader/Loader'

const Layout = () => {
	useCheckToken()
	const { data, isLoading } = useProfil()
	const { isAuth } = useAuth()
	if (isLoading) return <Loader />
	return (
		<>
			{!isAuth ? (
				<Logo />
			) : (
				<Header name={data.name} avatarPath={data.avatarPath}></Header>
			)}
		</>
	)
}

export default Layout
