import React from 'react'
import styles from '../Card.module.scss'

const CardNumber = ({ children }) => {
	function formatCardNumberWithDashes(cardNumber) {
		return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-')
	}
	function formatCardNumber(cardNumber) {
		const formattedNumber = cardNumber.replace(/\s/g, '').match(/.{1,4}/g)
		return formattedNumber ? formattedNumber.join(' ') : ''
	}
	const number = formatCardNumber(children)
	return (
		<div className={styles.cardNumber}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				// stroke-width='1.5'
				stroke='currentColor'
			>
				<path
					// stroke-linecap='round'
					// stroke-linejoin='round'
					d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
				/>
			</svg>

			<div>
				<span className={styles.title}>Card Number</span>
				<div className={styles.number}>{number}</div>
			</div>
			<div className={styles.line}></div>
		</div>
	)
}

export default CardNumber
