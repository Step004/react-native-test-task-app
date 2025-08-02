import tw from 'twrnc'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ActivityItem, RootStackScreenProps } from './types/root'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar, Image, TouchableOpacity, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useAddToFavorites } from '@api/favorites/useAddToFavorites'
import { BackButton } from './components/BackButton'

export const ActivityDetailsScreen = () => {
  const { mutate } = useAddToFavorites()
  const [imgError, setImgError] = useState(false)
  const navigation = useNavigation<RootStackScreenProps>()
  const route = useRoute()
  const { item } = route.params as { item: ActivityItem }

  const handleAddToFavorites = (id: number) => {
    mutate(id)
  }
  return (
    <SafeAreaView style={tw`bg-white flex-1`} edges={['bottom']}>
      <View style={tw`bg-white flex-1`}>
        <StatusBar hidden />
        <BackButton navigation={navigation} />
        <ScrollView
          style={tw`flex-1`}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Image
            source={
              !imgError && item.photoUrl
                ? { uri: item.photoUrl }
                : require('@assets/img/itemImg.png')
            }
            style={tw`w-full mb-[2px] h-[450px] rounded-b-[20px]`}
            resizeMode="cover"
            onError={() => {
              setImgError(true)
            }}
          />
          <View style={tw`p-5`}>
            <Text style={tw`text-2xl font-normal text-black`}>
              {item?.name || 'Activity Name'}
            </Text>
            <View style={tw`flex-row items-center justify-between mt-5 mb-10`}>
              <Text style={tw`text-base font-normal text-black`}>
                ${item?.price || 'Activity Name'}
              </Text>
              <Text style={tw`text-xs font-normal ml-[2px] text-gray`}>
                Included taxes and fees
              </Text>
            </View>
            <Text style={tw`text-base font-normal text-black mb-[10px]`}>
              Description
            </Text>
            <Text style={tw`text-sm font-normal text-gray`}>
              {item?.description || 'Description'}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw`bg-black p-5 rounded-full mx-5 mt-[60px] absolute bottom-2 left-0 right-0`}
          onPress={() => handleAddToFavorites(item.id)}
        >
          <Text style={tw`text-base font-normal text-white text-center`}>
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
