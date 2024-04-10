import Layout from '../../layout/Layout'
import Card from './Card/Card'
import Statistics from './Statistics/Statistics'
import History from './History/History'
import TransferMoney from './TransferMoney/TransferMoney'
import styles from './home.module.scss'
import Valet from './Valet/Valet'
import PopUp from '../../ui/PopUp/PopUp'
import { UseHomePage } from './UseHomePage'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const {
		isAuth,
		updateComponent,
		setUpdateComponent,
		notification,
		setNotification,
		error,
		selectedUser,
		setSelectedUser,
		callBackSearch,
		visiblePopUp,
		setVisiblePopUp,
		callBack
	} = UseHomePage()
	const navigate = useNavigate()
	if (!isAuth) navigate('/auth')

	return (
		<div className='wrapper-inner-page'>
			<Layout
				notification={notification}
				callBackSearch={callBackSearch}
				setSelectedUser={setSelectedUser}
				error={error}
			/>
			<PopUp
				visiblePopUp={visiblePopUp}
				setVisiblePopUp={setVisiblePopUp}
				fromCardNumber={'data.card.number'}
				callback={callBack}
				setNotification={setNotification}
			/>
			<div>
				<div className={styles.home}>
					<div>
						<Card
							updateComponent={updateComponent}
							setUpdateComponent={setUpdateComponent}
						/>

						<History />
					</div>
					<div>
						<Statistics />
						<Valet />
						<TransferMoney
							setVisiblePopUp={setVisiblePopUp}
							selectedUser={selectedUser}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
