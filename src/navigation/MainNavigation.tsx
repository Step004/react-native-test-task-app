import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { RootStackParamList } from '../screens/types/root'
import { ActivitiesScreen } from '../screens/ActivitiesScreen'
import { ActivityDetailsScreen } from '../screens/ActivityDetailsScreen'

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
