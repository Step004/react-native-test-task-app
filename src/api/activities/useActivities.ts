import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from './activities'

export const useActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })
}
