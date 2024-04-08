import React, { useEffect, useMemo, useState } from 'react'
import styles from './Search.module.scss'
import { useSort } from './useSort'
import { useContacts } from '../../../hooks/useContacts'
import Loader from '../../../ui/Loader/Loader'
import UserItem from '../../../ui/user-item/UserItem'
import cn from 'clsx'
import { useTransfer } from '../../../screens/home/TransferMoney/useTransfer'
import { useAuth } from '../../../hooks/useAuth'

const Search = ({ setToCardNumber, toCardNumber }) => {
	const { data, isLoading } = useContacts()

	const [searchQuery, setSearchQuery] = useState('')
	const { newUsers } = useSort(data, searchQuery)

	const [visibleMenu, setVisibleMenu] = useState(false)

	useEffect(() => {
		if (searchQuery.length > 0 && newUsers.length < 5) {
			setVisibleMenu(true)
		} else {
			setVisibleMenu(false)
		}
	}, [setSearchQuery, searchQuery])

	return (
		<div className={styles.search}>
			{isLoading && <Loader />}
			<div className={styles.wrapper} onClick={() => console.log(1)}>
				<svg
					onClick={() => {
						setVisibleMenu(!visibleMenu)
					}}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					// stroke-width='1.5'
					stroke='currentColor'
				>
					<path
						// stroke-linecap='round'
						// stroke-linejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				<input
					value={searchQuery}
					onChange={e => {
						setSearchQuery(e.target.value)
						// setVisibleMenu(!visibleMenu)
					}}
					placeholder='Search contacts...'
					type='text'
				/>
			</div>
			<div className={cn(styles.list, { [styles.active]: visibleMenu })}>
				<div>
					{newUsers.map(user => (
						<UserItem
							name={user.name}
							avatarPath={user.avatarPath}
							type={'grey'}
							key={user.id}
							clickHandler={() => {
								setToCardNumber(user.card.number)
								setVisibleMenu(false)
								setSearchQuery('')
							}}
							onClick={() => {}}
						></UserItem>
					))}
				</div>
			</div>
		</div>
	)
}

export default Search
