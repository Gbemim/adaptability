import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './app/Screens/WelcomeScreen'
import Screen from './app/components/Screen'
import MessageScreen from './app/Screens/MessageScreen'
import LoginScreen from './app/Screens/LoginScreen'
import AppTextInput from './app/components/AppTextInput'
import RegisterScreen from './app/Screens/RegisterScreen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <TabNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
    // <LoginScreen />
    // <RegisterScreen />
    // <WelcomeScreen />
  )
}
