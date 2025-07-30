import { apiClient } from '@api/apiClient'

export interface AddToFavoritesResponse {
  message: string
}
export const addToFavorites = async (id: number) => {
  const response = await apiClient.post('/favorites', { id })
  return response.data
}
