import React from 'react'
import styles from './UserItem.module.scss'
import cn from 'clsx'

const UserItem = ({ name, avatarPath, type = 'black', clickHandler }) => {
	return (
		<button
			className={cn(styles.usetItem, { [styles.grey]: type === 'grey' })}
			onClick={() => clickHandler()}
		>
			<img src={avatarPath} />
			<span>{name}</span>
		</button>
	)
}

export default UserItem
