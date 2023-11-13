import styles from './auth.module.scss'
import MyInput from '../../ui/MyInput/MyInput'

import Header from '../../layout/Header/Header'
import MyBtn from '../../ui/MyBtn/MyBtn'

import { useNavigate } from 'react-router-dom'

import { useAuthPage } from './useAuthPage'
import Loader from '../../ui/Loader/Loader'

import Logo from '../../layout/Header/Logo/Logo'
import { useState } from 'react'

const Auth = () => {
	const {
		onSubmit,
		register,
		errors,
		handleSubmit,
		btnSubmitState,
		setBtnSubmitState
	} = useAuthPage()
	// const [btnSubmitState, setBtnSubmitState] = useState(true)
	console.log(btnSubmitState)

	return (
		<>
			{/* {isLoading && <Loader />} */}
			{/* <Layout /> */}
			<Logo />
			<div className={styles.auth}>
				<div className={styles.authWnidow}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{btnSubmitState ? <h1>SignIn</h1> : <h1>Register</h1>}

						<MyInput
							error={errors?.email?.message}
							placeholder='Enter Email'
							register={register}
							options={{ required: 'Email is requred' }}
							name='email'
							type='text'
						/>
						<MyInput
							error={errors?.password?.message}
							placeholder='Enter Pasword'
							register={register}
							options={{ required: 'Pasword is requred' }}
							name='password'
							type='password'
						/>

						{/* <MyInput placeholder='Enter email' type='text' name='email' />
						<MyInput placeholder='Enter password' type='text' name='email' /> */}
						<MyBtn>Submit</MyBtn>
					</form>
					<div className={styles.footer}>
						{btnSubmitState ? (
							<button
								onClick={() => {
									setBtnSubmitState(false)
									console.log(1)
								}}
							>
								register
							</button>
						) : (
							<button
								onClick={() => {
									setBtnSubmitState(true)
									console.log(2)
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
