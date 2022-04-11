import React, { useState, useEffect } from 'react'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import jwtDecode from 'jwt-decode'

import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'

//Testing Screens
import Assurance1 from './app/Screens/Onboarding/Assurance1'
import TermsAndConditions2 from './app/Screens/Onboarding/TermsAndConditions2'
import PotentialEquipments3 from './app/Screens/Onboarding/PotentialEquipments3'
import FrequencyOfWorkout4 from './app/Screens/Onboarding/FrequencyOfWorkout4'
import Goal5 from './app/Screens/Onboarding/Goal5'
import Muscles6 from './app/Screens/Onboarding/Muscles6'
import OnboardingNavigator from './app/navigation/OnboardingNavigator'

export default function App() {
  navigationRef = useNavigationContainerRef()

  const [user, setUser] = useState()

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    setUser(jwtDecode(token))
  }

  useEffect(() => {
    restoreToken()
  }, [])

  // testing = () => {
  //   if (user) {
  //     ;<OnboardingNavigator />
  //   }
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <NavigationContainer theme={navigationTheme} ref={navigationRef}>
    //     {user ? <OnboardingNavigator /> || <Muscles6 /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
    // <Assurance1 />
    // <TermsAndConditions2 />
    // <PotentialEquipments3 />
    // <FrequencyOfWorkout4 />
    // <Goal5 />
    // <Muscles6 />
  )
}
