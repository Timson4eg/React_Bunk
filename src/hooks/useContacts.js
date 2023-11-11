import { useQuery } from '@tanstack/react-query'
import UserService from '../services/User.service'

export const useContacts = () => {
	const { data, isLoading } = useQuery(
		['get Allusers'],
		() => UserService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	return { data, isLoading }
}
