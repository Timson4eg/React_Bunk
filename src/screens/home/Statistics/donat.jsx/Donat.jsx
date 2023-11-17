import React from 'react'
import styles from './Donat.module.scss'
import { useDonat } from './useDonat'

const Donat = ({ data }) => {
	const { getSvg } = useDonat({ data })
	const svg = getSvg()
	const g = svg.getElementsByTagName('g')
	const path = svg.getElementsByTagName('path')

	const atrFirst = path[0].getAttribute('d')
	const atrSec = path[1].getAttribute('d')

	// const atr = path.getAttribute('d')
	// const strSec = svg.querySelector('last-child')

	return (
		<div className={styles.donutChart}>
			{' '}
			<svg
				className={styles.donutChart}
				width='250'
				height='250'
				viewBox='-5 -5 265 265'
			>
				<g transform='translate(128.75, 128.75)'>
					<path
						d={atrFirst}
						fill='none'
						strokeWidth='50'
						stroke='#08f0c8'
						className='rotate'
					></path>
					<path
						d={atrSec}
						fill='none'
						stroke='#917cff'
						strokeWidth='50'
						className='rotate'
					></path>
				</g>
			</svg>
		</div>
	)
}

export default Donat
