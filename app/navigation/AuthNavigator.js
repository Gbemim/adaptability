import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Welcome'
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{ title: '' }}
    />
    <Stack.Screen
      name='Sign Up'
      component={RegisterScreen}
      options={{ title: '' }}
    />
  </Stack.Navigator>
)

export default AuthNavigator
