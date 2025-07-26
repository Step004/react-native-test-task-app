import { useMutation } from '@tanstack/react-query'
import { addToFavorites } from '../api/favorites'
import { Alert } from 'react-native'

export const useFavorites = () => {
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
