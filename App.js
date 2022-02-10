import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './app/Screens/WelcomeScreen'
import Screen from './app/components/Screen'
import SettingScreen from './app/Screens/SettingScreen'
import LoginScreen from './app/Screens/LoginScreen'
import AppTextInput from './app/components/AppTextInput'
import RegisterScreen from './app/Screens/RegisterScreen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import WorkoutMenuScreen from './app/Screens/WorkoutMenuScreen'
import AppNavigator from './app/navigation/AppNavigator'

export default function App() {
  // const [user, setUser] = useState()

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <NavigationContainer theme={navigationTheme}>
    //     {user ? <AuthNavigator /> : <AppNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>

    <NavigationContainer theme={navigationTheme}>
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
    // <LoginScreen />
    // <RegisterScreen />
    // <WelcomeScreen />
    // <SettingScreen />
    // <WorkoutMenuScreen/>
  )
}
