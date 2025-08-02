import { FlatList, Text, View } from 'react-native'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useActivities } from '@api/activities/useActivities'
import { ActivityItem, RootStackScreenProps } from './types/root'
import { ActivityCard } from './components/ActivityCard'
import { useNavigation } from '@react-navigation/native'
import { Loader } from './components/Loader'

export const ActivitiesScreen = () => {
  const { data, isLoading } = useActivities()
  const navigation = useNavigation<RootStackScreenProps>()
  console.log('ActivitiesScreen data:', data)

  if (isLoading) {
    return <Loader />
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`} edges={['top', 'bottom']}>
      <View style={tw`bg-white flex-1 items-center px-5`}>
        <Text style={tw`text-base mt-4 mb-9 text-black`}>Activities</Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
          }}
          style={{ width: '100%' }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }: { item: ActivityItem }) => (
            <ActivityCard item={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
