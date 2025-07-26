import tw from 'twrnc'
import { BackIcon } from '../../assets/svg/BackIcon'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ActivityItem } from './types/root'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar, Image, TouchableOpacity, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

export const ActivityDetailsScreen = () => {
  const [imgError, setImgError] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const { item } = route.params as { item: ActivityItem }

  const handleBack = () => {
    navigation.goBack()
  }
  const handleAddToFavorites = () => {
    console.log('Add to Favorites:', item.name)
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`} edges={['bottom']}>
      <View style={tw`bg-white flex-1`}>
        <StatusBar hidden />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleBack}
          style={tw`bg-[#f7f7f7] rounded-full p-4 absolute top-9 left-3 z-10`}
        >
          <BackIcon />
        </TouchableOpacity>
        <ScrollView
          style={tw`flex-1`}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Image
            source={
              !imgError && item.photoUrl
                ? { uri: item.photoUrl }
                : require('../../assets/img/itemImg.png')
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
              <Text style={tw`text-xs font-normal ml-[2px] text-[#9d9d9d]`}>
                Included taxes and fees
              </Text>
            </View>
            <Text style={tw`text-base font-normal text-black mb-[10px]`}>
              Description
            </Text>
            <Text style={tw`text-sm font-normal text-[#9d9d9d]`}>
              {item?.description || 'Description'}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw`bg-[#000] p-5 rounded-full mx-5 mt-[60px] absolute bottom-2 left-0 right-0`}
          onPress={() => handleAddToFavorites()}
        >
          <Text style={tw`text-base font-normal text-white text-center`}>
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
