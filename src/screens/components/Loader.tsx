import { ActivityIndicator, View } from 'react-native'
import tw from 'twrnc'

export const Loader = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  )
}
