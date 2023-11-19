import React, { useEffect, useState } from 'react'
import styles from './Hisstory.module.scss'
import TransactionItem from './transaction-item/TransactionItem'
import { useQuery } from '@tanstack/react-query'
import TransactionsService from '../../../services/Transactions.service'
import Loader from '../../../ui/Loader/Loader'
import { useAuth } from '../../../hooks/useAuth'
import { useHistory } from './useHistory'

const History = () => {
	const [list, setList] = useState(0)
	const { data, isLoading, arr } = useHistory(list, setList)

	if (isLoading) return <Loader />

	return (
		<div className={styles.wrapper}>
			{isLoading && <Loader />}

			<div>
				<div className={styles.heading}>
					<h3>Recent Transaction</h3>
				</div>
				{arr.map(transaction => (
					<TransactionItem
						transaction={transaction}
						key={transaction.id}
					></TransactionItem>
				))}
				{data.transactions.length > 15 && (
					<button
						onClick={() => {
							setList(!list)
						}}
					>
						more
					</button>
				)}
			</div>
		</div>
	)
}

export default History
