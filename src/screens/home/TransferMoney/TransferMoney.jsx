import styles from './TransferMoney.module.scss'
import UserItem from '../../../ui/user-item/UserItem'

import Loader from '../../../ui/Loader/Loader'
import { useTransfer } from './useTransfer'

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
	//What Javascript statement in place of "?" will make the result always be between 6 and 7?

	if (isLoading) return <Loader />
	return (
		<div className={styles.wrapper}>
			<h3>Transfer Money</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='XXXX-XXXX-XXXX-XXXX'
					type='tel'
					error={errors?.toCardNumber?.message}
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
