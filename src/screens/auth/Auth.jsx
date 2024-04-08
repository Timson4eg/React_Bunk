import styles from './auth.module.scss'
import MyInput from '../../ui/MyInput/MyInput'

import MyBtn from '../../ui/MyBtn/MyBtn'

import { useAuthPage } from './useAuthPage'

import Logo from '../../layout/Header/Logo/Logo'

const Auth = () => {
	const {
		onSubmit,
		register,
		errors,
		handleSubmit,
		btnSubmitState,
		setBtnSubmitState
	} = useAuthPage()

	return (
		<>
			<Logo />
			<div className={styles.auth}>
				<div className={styles.authWnidow}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{btnSubmitState ? <h1>SignIn</h1> : <h1>Register</h1>}

						<MyInput
							error={errors?.email?.message}
							placeholder='Enter Email'
							register={register}
							options={{ required: 'Email is required' }}
							name='email'
							type='text'
						/>
						<MyInput
							error={errors?.password?.message}
							placeholder='Enter Password'
							register={register}
							options={{ required: 'Password is required' }}
							name='password'
							type='password'
						/>

						<MyBtn>Submit</MyBtn>
					</form>
					<div className={styles.footer}>
						{btnSubmitState ? (
							<button
								onClick={() => {
									setBtnSubmitState(false)
								}}
							>
								register
							</button>
						) : (
							<button
								onClick={() => {
									setBtnSubmitState(true)
								}}
							>
								Sign in
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Auth
