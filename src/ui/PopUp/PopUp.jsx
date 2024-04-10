import React from 'react'
import styles from './PopUp.module.scss'
import { usePopUp } from './usePopUp'

const PopUp = ({
	visiblePopUp,
	setVisiblePopUp,
	fromCardNumber,
	callback,
	setNotfication
}) => {
	const { onSubmit, handleSubmit, register, errors, isSuccess } = usePopUp(
		setVisiblePopUp,
		fromCardNumber,
		callback
	)

	const rootClasses = [styles.popUp]
	if (visiblePopUp) rootClasses.push(styles.active)

	return (
		<div
			className={rootClasses.join(' ')}
			onClick={() => setVisiblePopUp(false)}
		>
			<div className={styles.wrapper} onClick={e => e.stopPropagation()}>
				<h3>Type amount</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('amount', { required: 'amount is requred' })}
						name='amount'
						type='number'
						placeholder='Enter the amount'
						error={errors?.toCardNumber?.message}
					></input>
					<div>
						<button
							onClick={() => {
								setVisiblePopUp(false)
							}}
						>
							Canel
						</button>
						<button
							onClick={() => {
								handleSubmit(onSubmit)
								setVisiblePopUp(false)
							}}
						>
							Ok
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PopUp
