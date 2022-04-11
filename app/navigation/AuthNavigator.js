import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import Assurance1 from '../Screens/Onboarding/Assurance1'
import TermsAndConditions2 from '../Screens/Onboarding/TermsAndConditions2'
import PotentialEquipments3 from '../Screens/Onboarding/PotentialEquipments3'
import FrequencyOfWorkout4 from '../Screens/Onboarding/FrequencyOfWorkout4'
import Goal5 from '../Screens/Onboarding/Goal5'
import Muscles6 from '../Screens/Onboarding/Muscles6'
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
    <Stack.Screen
      name='Assurance'
      component={Assurance1}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
    <Stack.Screen
      name='Terms And Conditions'
      component={TermsAndConditions2}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
    <Stack.Screen
      name='Potential Equipments'
      component={PotentialEquipments3}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
    <Stack.Screen
      name='Frequency Of Workout'
      component={FrequencyOfWorkout4}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
    <Stack.Screen
      name='Goal'
      component={Goal5}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
    <Stack.Screen
      name='Muscles'
      component={Muscles6}
      options={{ headerShown: false }}
      // options={{ title: '' }}
    />
  </Stack.Navigator>
)

export default AuthNavigator
