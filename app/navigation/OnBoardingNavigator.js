import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

import PotentialEquipments3 from '../Screens/Onboarding/PotentialEquipments3'
import FrequencyOfWorkout4 from '../Screens/Onboarding/FrequencyOfWorkout4'
import Goal5 from '../Screens/Onboarding/Goal5'
import Muscles6 from '../Screens/Onboarding/Muscles6'

import ActivityScreen from '../Screens/ActivityScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import WorkoutButton from './WorkoutButton'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const OnboardingNavigator = () => (
  <Stack.Navigator>
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

export default OnboardingNavigator
