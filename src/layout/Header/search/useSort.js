import { useMemo } from 'react'
import { useContacts } from '../../../hooks/useContacts'

export const useSort = (users, query) => {
	//

	const newUsers = useMemo(() => {
		if (users === undefined) return {}
		return users.filter(user => user.name.includes(query))
	}, [query])

	return { newUsers }
}
