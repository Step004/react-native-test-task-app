import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { ActivitiesScreen } from '@screens/ActivitiesScreen'
import { ActivityDetailsScreen } from '@screens/ActivityDetailsScreen'
import { RootStackParamList } from '@screens/types/root'

const Stack = createStackNavigator<RootStackParamList>()

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} />
      <Stack.Screen
        name="ActivityDetailsScreen"
        component={ActivityDetailsScreen}
      />
    </Stack.Navigator>
  )
}

export default MainNavigation
