import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'
import CardNumber from './detail/CardNumber'
import Date from './detail/Date'
import Cvc from './detail/Cvc'
import Balance from './detail/Balance'
import Loader from '../../../ui/Loader/Loader'
import { useProfil } from '../useProfil'
import { useAuth } from '../../../hooks/useAuth'

const Card = () => {
	const { data, isLoading } = useProfil()

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<CardNumber>{data.card.number}</CardNumber>
					<Date>{data.card.expireDate}</Date>
					<Cvc>{data.card.cvc}</Cvc>
					<Balance>{data.card.balance}</Balance>
				</>
			)}
		</div>
	)
}

export default Card
