import styles from './Valet.module.scss'
import MyInput from '../../../ui/MyInput/MyInput'
import MyBtn from '../../../ui/MyBtn/MyBtn'

import { useValet } from './useValet'

const Valet = () => {
	const {
		register,
		handleSubmit,
		errors,
		onSubmit,
		purpleBtn,
		greenBtn,
		isSuccess
	} = useValet()

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<MyInput
					error={errors?.amount?.message}
					placeholder='Enter amount'
					register={register}
					options={{ required: 'Email is requred' }}
					name='amount'
					type='number'
				></MyInput>
				<div className={styles.btns}>
					<MyBtn color={'green'} clickHandler={purpleBtn}>
						Top-Up
					</MyBtn>
					<MyBtn color={'purple'} clickHandler={greenBtn}>
						Widthdrawl
					</MyBtn>
				</div>
			</form>
		</div>
	)
}

export default Valet
