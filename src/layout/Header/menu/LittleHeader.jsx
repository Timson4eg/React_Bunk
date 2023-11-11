import React from 'react'
import styles from './LittleHeader.module.scss'
import Logo from '../Logo/Logo'

import Hamburger from './hamburger/Hamburger'
import List from './List'

const LittleHeader = ({ name, avatarPath }) => {
	return (
		<div className={styles.LittleHeader}>
			{/* <Logo>Bunk</Logo> */}
			<Hamburger name={name} avatarPath={avatarPath}></Hamburger>
		</div>
	)
}

export default LittleHeader
