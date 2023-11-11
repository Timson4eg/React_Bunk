import React from 'react'
import styles from './PopUp.module.scss'
import { useForm } from 'react-hook-form'
import { useTransfer } from '../../screens/home/TransferMoney/useTransfer'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from '../../screens/home/History/useHistory'
import { usePopUp } from './usePopUp'

const PopUp = ({ visiblePopUp, setVisiblePopUp, fromCardNumber }) => {
	const { updatePage, setUpdatePage } = useAuth()
	const { onSubmit, handleSubmit, register, errors } = usePopUp(
		setVisiblePopUp,
		fromCardNumber
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
						error={errors?.toCardNumber?.message}
					></input>
					<div>
						<button
							onClick={() => {
								setVisiblePopUp(false)
								setUpdatePage(false)
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
