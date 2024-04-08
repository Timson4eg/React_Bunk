import React, { useEffect } from 'react'

import Header from './Header/Header'
import { useCheckToken } from '../hooks/useCheckToken'
import Logo from './Header/Logo/Logo'
import { useAuth } from '../hooks/useAuth'
import { useProfil } from '../screens/home/useProfil'
import Loader from '../ui/Loader/Loader'
import Notfication from '../ui/Notfication/Notfication'

const Layout = ({ notfication, callBackSearch, setChoisedUser, error }) => {
	// useCheckToken()
	const { data, isLoading } = useProfil()
	const { isAuth } = useAuth()

	if (!data) return <Loader />
	if (isLoading) return <Loader />

	return (
		<>
			{!isAuth ? (
				<Logo />
			) : (
				<Header
					name={data.name}
					avatarPath={data.avatarPath}
					callBackSearch={callBackSearch}
					setChoisedUser={setChoisedUser}
				>
					{/* <Notfication message={'ggWp'} /> */}
					{error && <Notfication message={'Error'} type={'erorr'} />}
					{notfication && <Notfication message={'Money is required'} />}
				</Header>
			)}
		</>
	)
}

export default Layout
