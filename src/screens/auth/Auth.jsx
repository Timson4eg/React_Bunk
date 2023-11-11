import styles from './auth.module.scss'
import MyInput from '../../ui/MyInput/MyInput'

import Header from '../../layout/Header/Header'
import MyBtn from '../../ui/MyBtn/MyBtn'

import { useNavigate } from 'react-router-dom'

import { useAuthPage } from './useAuthPage'
import Loader from '../../ui/Loader/Loader'

import Layout from '../../layout/Layout'

const Auth = () => {
	const { onSubmit, register, errors, handleSubmit, isLoading } = useAuthPage()

	return (
		<>
			{isLoading && <Loader />}
			<Layout />
			<div className={styles.auth}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Sign in</h1>
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
					<footer className={styles.footer}>
						<button>register</button>
					</footer>
				</form>
			</div>
		</>
	)
}

export default Auth
