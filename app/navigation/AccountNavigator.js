import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountScreen from '../Screens/AccountScreen'
import SettingScreen from '../Screens/SettingScreen'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Accounts' component={AccountScreen}></Stack.Screen>
    <Stack.Screen name='Settings' component={SettingScreen}></Stack.Screen>
  </Stack.Navigator>
)

export default AccountNavigator
