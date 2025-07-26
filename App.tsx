import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigation/MainNavigation'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <GestureHandlerRootView>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
