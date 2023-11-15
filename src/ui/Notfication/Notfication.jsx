import React, { useState } from 'react'
import styles from './Notfication.module.scss'
import cn from 'clsx'

const Notfication = ({ type = 'success', message }) => {
	return (
		<div
			className={cn(
				styles.notification,
				styles.out,
				styles[type]
				// { [styles.error]: type === 'error' },
				// { [styles.success]: type === 'success' }
			)}
		>
			{message}
		</div>
	)
}

export default Notfication
