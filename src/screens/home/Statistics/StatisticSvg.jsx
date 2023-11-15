import React from 'react'
import styles from './Statistics.module.scss'
import Donat from './donat.jsx/Donat'
import { useStatistic } from './useStatistic'
import Loader from '../../../ui/Loader/Loader'
import cn from 'clsx'

const StatisticSvg = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			{data[0].value === null && data[1].value === null ? (
				<div>Pusto</div>
			) : (
				<div className={styles.circleChart}>
					<Donat data={data} />
				</div>
			)}
			{/* <div className={styles.circleChart}>
				<Donat data={data} />
			</div> */}

			<div>
				<div className={cn(styles.sign, styles.green)}>
					<h4>{`${data[0].label}`}</h4>
					<span>{`${data[0].value}`}</span>
				</div>
				<div className={cn(styles.sign, styles.purple)}>
					<h4>{`${data[1].label}`} </h4>
					<span>{`${data[1].value}`}</span>
				</div>
			</div>
		</div>
	)
}

export default StatisticSvg
