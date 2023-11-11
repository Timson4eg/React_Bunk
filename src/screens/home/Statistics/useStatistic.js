import { useQuery } from '@tanstack/react-query'
import StatistiService from '../../../services/Statisti.service'

export const useStatistic = () => {
	const { data, isLoading } = useQuery(
		['get Statistic'],
		() => StatistiService.get(),
		{
			select: ({ data }) => data
		}
	)
	return { data, isLoading }
}
