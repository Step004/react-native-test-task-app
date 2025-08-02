import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import BackIcon from '@assets/svg/BackIcon.svg'
import { RootStackScreenProps } from '@screens/types/root'

export const BackButton = ({
  navigation,
}: {
  navigation: RootStackScreenProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.goBack()
      }}
      style={tw`bg-cardWhite rounded-full p-4 absolute top-9 left-3 z-10`}
    >
      <BackIcon />
    </TouchableOpacity>
  )
}
