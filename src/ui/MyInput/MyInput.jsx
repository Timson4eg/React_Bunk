import React from 'react'
import styles from './MyInput.module.scss'

const MyInput = ({ register, name, error, options, ...rest }) => {
	return (
		<div>
			<input
				{...register(name, options)}
				{...rest}
				className={styles.myInput}
				// placeholder={placeholder}
				// type={type}
				// name={name}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default MyInput
