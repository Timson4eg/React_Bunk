import React, { useEffect, useState } from 'react'
import styles from './TransferMoney.module.scss'
import UserItem from '../../../ui/user-item/UserItem'
import { useQueries, useQuery } from '@tanstack/react-query'
import UserService from '../../../services/User.service'
import Loader from '../../../ui/Loader/Loader'
import { useTransfer } from './useTransfer'
import Notfication from '../../../ui/Notfication/Notfication'
import { useCardFormat } from '../../../utils/useCardFormat'

const TransferMoney = ({ setVisiblePopUp }) => {
	const {
		data,
		isLoading,
		register,
		handleSubmit,
		errors,
		onSubmit,
		fillInput,
		isSuccess,
		normalizeCardNumber
	} = useTransfer(setVisiblePopUp)

	if (isLoading) return <Loader />
	return (
		<div className={styles.wrapper}>
			{isSuccess && <Notfication message={'qqyopt'} />}
			<h3>Transfer Money</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='XXXX-XXXX-XXXX-XXXX'
					type='tel'
					error={errors?.toCardNumber?.message}
					// autoComplete='cc-number'
					{...register('toCardNumber', {
						required: 'toCardNumber is requred'
					})}
					onChange={event => {
						const { value } = event.target
						event.target.value = normalizeCardNumber(value)
					}}
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
