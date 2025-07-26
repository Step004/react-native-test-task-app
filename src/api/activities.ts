import { apiClient } from './apiClient'

export const fetchActivities = async () => {
  const response = await apiClient.get('/activities')
  return response.data
}
