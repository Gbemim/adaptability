import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import jwtDecode from 'jwt-decode'

import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'

//Testing Screens
import Assurance1 from './app/Screens/Onboarding/Assurance1'
import TermsAndConditions2 from './app/Screens/Onboarding/TermsAndConditions2'
import PotentialEquipment3 from './app/Screens/Onboarding/PotentialEquipment3'

export default function App() {
  const [user, setUser] = useState()

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    setUser(jwtDecode(token))
  }

  useEffect(() => {
    restoreToken()
  }, [])

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <NavigationContainer theme={navigationTheme}>
    //     {user ? <AppNavigator /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
    // <Assurance1 />
    // <TermsAndConditions2 />
    <PotentialEquipment3 />
  )
}
