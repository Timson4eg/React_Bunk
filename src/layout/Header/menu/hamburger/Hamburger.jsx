import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import { useState } from 'react'
import List from '../List'

// import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

const Hamburger = ({ name, avatarPath }) => {
	const [isShow, setIsShow] = useState()

	// const { ref, isShow, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<List name={name} avatarPath={avatarPath}></List>
		</div>
	)
}

export default Hamburger
