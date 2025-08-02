import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'
import { addToFavorites } from './favorites'

export const useAddToFavorites = () => {
  return useMutation({
    mutationFn: (id: number) => addToFavorites(id),
    onSuccess: data => {
      Alert.alert('Success', data.message)
    },
    onError: error => {
      console.error('Error adding to favorites:', error)
    },
  })
}
