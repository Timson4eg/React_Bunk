import { useQuery } from '@tanstack/react-query'
import TransactionsService from '../../../services/Transactions.service'
import { useEffect, useState } from 'react'

export const useHistory = (list, setList) => {
	const [page, setPage] = useState()
	const { data, isLoading } = useQuery(
		['getAll'],
		() => TransactionsService.getall(),
		{
			select: ({ data }) => data
		}
	)

	const updateTransactionsList = list => {
		const arr = []
		if (data === undefined) return
		else {
			if (list) {
				data.transactions.forEach((element, index) => {
					if (index >= 10) return
					return (arr[index] = element)
				})
			} else {
				data.transactions.forEach((element, index) => {
					return (arr[index] = element)
				})
			}
		}

		return arr
	}
	const arr = updateTransactionsList(list)

	// useEffect(() => {
	// 	if (data !== undefined) data.transactions = updateTransactionsList()
	// }, [setList, data])

	// console.log(data)

	return { data, isLoading, arr }
}
