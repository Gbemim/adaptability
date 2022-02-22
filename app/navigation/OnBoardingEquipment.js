import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountScreen from '../Screens/AccountScreen'
import SettingScreen from '../Screens/SettingScreen'

const Stack = createNativeStackNavigator()

const OnBoardingEquipment = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='' component={AccountScreen}></Stack.Screen>
    <Stack.Screen name='Settings' component={SettingScreen}></Stack.Screen> */}
    </Stack.Navigator>
  )
}

export default OnBoardingEquipment
