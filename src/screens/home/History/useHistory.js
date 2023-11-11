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
			console.log(list)
			if (list) {
				console.log(1)
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

	console.log(arr)

	// useEffect(() => {
	// 	if (data !== undefined) data.transactions = updateTransactionsList()
	// }, [setList, data])

	// console.log(data)

	return { data, isLoading, arr }
}
