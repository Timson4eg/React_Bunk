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

	const callBack = bool => {
		setUpdateComponent(bool)
		console.log(updateComponent)
	}
	const navigate = useNavigate()

	if (!isAuth) navigate('/auth')

	return (
		<div className='wrapper-inner-page'>
			<Layout />
			<PopUp
				visiblePopUp={visiblePopUp}
				setVisiblePopUp={setVisiblePopUp}
				fromCardNumber={'data.card.number'}
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
						<TransferMoney setVisiblePopUp={setVisiblePopUp} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
