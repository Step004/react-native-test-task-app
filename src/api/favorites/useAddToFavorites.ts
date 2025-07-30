import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'
import { addToFavorites, AddToFavoritesResponse } from './favorites'

export const useAddToFavorites = () => {
  return useMutation<AddToFavoritesResponse, Error, number>({
    mutationFn: (id: number) => addToFavorites(id),
    onSuccess: data => {
      Alert.alert('Success', data.message)
    },
    onError: error => {
      console.error('Error adding to favorites:', error)
    },
  })
}
