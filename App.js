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

export default function App() {
  return (
    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>
    <LoginScreen />
    // <WelcomeScreen />
  )
}
