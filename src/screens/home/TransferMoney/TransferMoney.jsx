import React from 'react'
import styles from './TransferMoney.module.scss'
import UserItem from '../../../ui/user-item/UserItem'
import { useQueries, useQuery } from '@tanstack/react-query'
import UserService from '../../../services/User.service'
import Loader from '../../../ui/Loader/Loader'
import { useTransfer } from './useTransfer'

const TransferMoney = ({ setVisiblePopUp, setToCardNumber, toCardNumber }) => {
	const {
		data,
		isLoading,
		register,
		handleSubmit,
		errors,
		onSubmit,
		fillInput
	} = useTransfer(setVisiblePopUp, setToCardNumber, toCardNumber)

	if (isLoading) return <Loader />

	return (
		<div className={styles.wrapper}>
			<h3>Transfer Money</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='XXXX-XXXX-XXXX-XXXX'
					type='number'
					error={errors?.toCardNumber?.message}
					{...register('toCardNumber', {
						required: 'toCardNumber is requred'
					})}
					name='toCardNumber'
				></input>

				<button>Send</button>
			</form>

			<div className={styles.list}>
				{data.map(user => (
					<UserItem
						name={user.name}
						avatarPath={user.avatarPath}
						type={'grey'}
						key={user.id}
						clickHandler={() => fillInput(user.card.number)}
					></UserItem>
				))}
			</div>
		</div>
	)
}

export default TransferMoney
