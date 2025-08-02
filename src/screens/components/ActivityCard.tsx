import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { useState } from 'react'
import FireIcon from '@assets/svg/FireIcon.svg'
import StarIcon from '@assets/svg/StarIcon.svg'
import LocationIcon from '@assets/svg/LocationIcon.svg'
import { ActivityItem, RootStackScreenProps } from '@screens/types/root'

export const ActivityCard = ({
  item,
  navigation,
}: {
  item: ActivityItem
  navigation: RootStackScreenProps
}) => {
  const [imgError, setImgError] = useState(false)

  const handlePress = (item: ActivityItem) => {
    navigation.navigate('ActivityDetailsScreen', { item })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`relative w-full`}
      onPress={() => {
        handlePress(item)
      }}
    >
      {item.rating > 4.5 && (
        <View
          style={tw`absolute top-5 left-5 z-10 bg-yellow p-[6px] rounded-full`}
        >
          <FireIcon />
        </View>
      )}
      <Image
        source={
          !imgError && item.photoUrl
            ? { uri: item.photoUrl }
            : require('../../../assets/img/image.png')
        }
        style={tw`w-full h-[139px] mb-[2px] rounded-[20px]`}
        resizeMode="cover"
        onError={() => {
          setImgError(true)
        }}
      />
      <View style={tw`p-5 bg-cardWhite rounded-[20px] `}>
        <View style={tw`flex-row items-center justify-between mb-3`}>
          <Text style={tw`text-base font-normal text-black`}>
            {item?.name || 'Activity Name'}
          </Text>
          <View style={tw`flex-row items-center`}>
            <StarIcon />
            <Text style={tw`text-xs font-normal ml-[2px] text-black`}>
              {item?.rating || 4.5}
            </Text>
          </View>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <View style={tw`flex-row items-center`}>
            <LocationIcon />
            <Text style={tw`text-xs font-normal ml-[6px] text-black`}>
              {item?.location || 'Location'}
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-sm font-normal text-black`}>
              ${item?.price || '00'}
            </Text>
            <Text style={tw`text-xs font-normal text-gray`}> / night</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
