import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

export type ActivityItem = {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

export type RootStackParamList = {
  ActivitiesScreen: undefined
  ActivityDetailsScreen: { item: ActivityItem }
}

export type RootStackScreenProps = NativeStackNavigationProp<RootStackParamList>
