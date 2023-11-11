import React from 'react'
import styles from './LittleHeader.module.scss'
import Search from '../search/Search'
import UserItem from '../../../ui/user-item/UserItem'
import BtnLogOut from '../btnLogOut/BtnLogOut'

const List = ({ name, avatarPath }) => {
	return (
		<div className={styles.list}>
			<div>
				<Search />
			</div>

			<UserItem name={name} avatarPath={avatarPath} type='grey'></UserItem>
			<BtnLogOut />
		</div>
	)
}

export default List
