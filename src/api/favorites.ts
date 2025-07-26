import { apiClient } from './apiClient'

export const addToFavorites = async (id: number) => {
  const response = await apiClient.post('/favorites', { id })
  return response.data
}
