import React from 'react'
import style from './Loader.module.scss'

const Loader = () => {
	return (
		<img
			className={style.loader}
			src='/public/three-dots.svg'
			alt='loader'
			draggable={false}
		></img>
	)
}

export default Loader
