import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WorkoutMenuScreen from '../Screens/WorkoutMenuScreen'
import WorkoutDetailsScreen from '../Screens/WorkoutDetailsScreen'

const Stack = createNativeStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name='Explore' component={WorkoutMenuScreen}></Stack.Screen>
    <Stack.Screen
      name='Workout Detail'
      component={WorkoutDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
)

export default FeedNavigator
