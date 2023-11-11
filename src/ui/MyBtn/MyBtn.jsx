import React from 'react'
import styles from './MyBtn.module.scss'
import cn from 'clsx'

const MyBtn = ({ children, clickHandler, color = 'simple' }) => {
	return (
		<button
			onClick={clickHandler}
			className={cn(
				styles.btn,
				{ [styles.purple]: color === 'purple' },
				{ [styles.green]: color === 'green' }
			)}
		>
			{children}
		</button>
	)
}

export default MyBtn
