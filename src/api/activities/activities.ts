import { apiClient } from '@api/apiClient'
import { ActivityItem } from '@screens/types/root'

export const fetchActivities = async (): Promise<ActivityItem[]> => {
  const response = await apiClient.get<ActivityItem[]>('/activities')
  return response.data
}
