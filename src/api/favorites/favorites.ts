import { apiClient } from '@api/apiClient'

export interface AddToFavoritesResponse {
  message: string
}
export const addToFavorites = async (
  id: number,
): Promise<AddToFavoritesResponse> => {
  const response = await apiClient.post<AddToFavoritesResponse>('/favorites', {
    id,
  })
  return response.data
}
