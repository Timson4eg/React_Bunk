import React, { useEffect, useMemo, useState } from 'react'
import styles from './header.module.scss'
import Logo from './Logo/Logo'
import Search from './search/Search'
import BtnLogOut from './btnLogOut/BtnLogOut'
import UserItem from '../../ui/user-item/UserItem'
import { useAuth } from '../../hooks/useAuth'
import { useContacts } from '../../hooks/useContacts'
import Loader from '../../ui/Loader/Loader'
import LittleHeader from './menu/LittleHeader'

const Header = ({
	name,
	avatarPath,
	callBackSearch,
	setChoisedUser,
	children
}) => {
	const { isAuth, setToCardNumber, toCardNumber } = useAuth()
	const { isLoading } = useContacts()

	if (isLoading) return <Loader />

	if (isAuth) {
		return (
			<div>
				{isLoading && <Loader />}

				<div className={styles.wrapper}>
					<Logo>Bunk</Logo>
					{children}

					<div className={styles.rightSide}>
						<div>
							<Search
								setToCardNumber={setToCardNumber}
								toCardNumber={toCardNumber}
							/>
						</div>

						<UserItem
							name={name}
							avatarPath={avatarPath}
							type='grey'
						></UserItem>
						<BtnLogOut />
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.wrapper}>
				<Logo>Bunk</Logo>
			</div>
		)
	}
}

export default Header
