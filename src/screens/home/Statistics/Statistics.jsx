import React from 'react'
import styles from './Statistics.module.scss'
import StatisticSvg from './StatisticSvg'
import { useStatistic } from './useStatistic'
import Loader from '../../../ui/Loader/Loader'

const Statistics = () => {
	const { data, isLoading } = useStatistic()
	if (isLoading) return <Loader />

	return (
		<div className={styles.statistic}>
			<h3>Statistics</h3>
			<StatisticSvg data={data} />
		</div>
	)
}

export default Statistics
