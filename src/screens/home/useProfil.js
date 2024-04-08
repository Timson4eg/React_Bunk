import { useQuery } from '@tanstack/react-query'
import UserService from '../../services/User.service'

export const useProfil = () => {
	return useQuery(['get profil'], () => UserService.getProfil(), {
		select: ({ data }) => data
	})
}
