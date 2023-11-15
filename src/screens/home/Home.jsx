import React, { useEffect, useMemo, useState } from 'react'
import Layout from '../../layout/Layout'

import Card from './Card/Card'
import Statistics from './Statistics/Statistics'
import History from './History/History'
import TransferMoney from './TransferMoney/TransferMoney'
import styles from './home.module.scss'
import Valet from './Valet/Valet'
import { useProfil } from './useProfil'

import { useAuth } from '../../hooks/useAuth'

import PopUp from '../../ui/PopUp/PopUp'
import { useNavigate } from 'react-router-dom'
import { useHistory } from './History/useHistory'

const Home = () => {
	const { isAuth, updateComponent, setUpdateComponent } = useAuth()
	const [visiblePopUp, setVisiblePopUp] = useState(false)

	const navigate = useNavigate()
	const [notfication, setNotfication] = useState(false)
	const [error, setEror] = useState(false)
	const [choisedUser, setChoisedUser] = useState('')

	const callBack = message => {
		if (message) {
			setNotfication(true)
			console.log(1)
		} else {
			setEror(true)
			console.log(2)
		}
	}

	const callBackSearch = cardNumber => {
		setChoisedUser(cardNumber)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setNotfication(false)
			setEror(false)
		}, 3000)

		return () => clearTimeout(timer)
	}, [callBack])

	if (!isAuth) navigate('/auth')

	return (
		<div className='wrapper-inner-page'>
			<Layout
				notfication={notfication}
				callBackSearch={callBackSearch}
				setChoisedUser={setChoisedUser}
				error={error}
			/>
			<PopUp
				visiblePopUp={visiblePopUp}
				setVisiblePopUp={setVisiblePopUp}
				fromCardNumber={'data.card.number'}
				callback={callBack}
				setNotfication={setNotfication}
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
							choisedUser={choisedUser}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
