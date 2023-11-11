import React from 'react'
import styles from '../Card.module.scss'

const Date = ({ children }) => {
	return (
		<div className={styles.date}>
			<span className={styles.title}>Expire Date</span>
			<div className={styles.number}>{children}</div>
			<div className={styles.line}></div>
		</div>
	)
}

export default Date
