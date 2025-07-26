import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useActivities } from '../hooks/useActivities'
import { ActivityItems } from './components/ActivityItems'
import { ActivityItem } from './types/root'
export const ActivitiesScreen = () => {
  const { data, isLoading } = useActivities()
  if (isLoading) {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
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
            <ActivityItems {...item} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
