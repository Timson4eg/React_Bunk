import React from 'react'
import styles from '../Card.module.scss'
import { useFormatMoney } from '../../../../utils/useFormatMoney'

const Balance = ({ children }) => {
	const number = useFormatMoney(children)

	return (
		<div className={styles.balance}>
			<span className={styles.title}>Balance</span>
			<div className={styles.number}>{number}</div>
		</div>
	)
}

export default Balance
