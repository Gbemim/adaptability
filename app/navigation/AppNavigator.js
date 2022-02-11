import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

import ActivityScreen from '../Screens/ActivityScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import WorkoutButton from './WorkoutButton'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator initialRouteName='Feed'>
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='home' color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={({ navigation }) => ({
        headerShown: false,
        tabBarButton: () => (
          <WorkoutButton onPress={() => navigation.navigate('Feed')} />
        ),
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name='energy' color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name='Activity'
      component={ActivityScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='chart-timeline-variant'
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator
