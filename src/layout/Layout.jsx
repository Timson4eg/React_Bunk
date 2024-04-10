import Header from './Header/Header'
import Logo from './Header/Logo/Logo'
import { useAuth } from '../hooks/useAuth'
import { useProfil } from '../screens/home/useProfil'
import Loader from '../ui/Loader/Loader'
import Notification from '../ui/Notification/Notification'

const Layout = ({ callBackSearch, setSelectedUser, error }) => {
	const { data, isLoading } = useProfil()
	const { isAuth, notification } = useAuth()

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
				>
					{error && <Notification message={'Error'} type={'erorr'} />}
					{notification && <Notification message={'Money is required'} />}
				</Header>
			)}
		</>
	)
}

export default Layout
