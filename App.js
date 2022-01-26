import { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import WelcomeScreen from './app/Screens/WelcomeScreen'
import Screen from './app/components/Screen'
import MessageScreen from './app/Screens/MessageScreen'
import LoginScreen from './app/Screens/LoginScreen'
import AppTextInput from './app/components/AppTextInput'
import RegisterScreen from './app/Screens/RegisterScreen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import AuthContext from './app/auth/context'

export default function App() {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <NavigationContainer theme={navigationTheme}>
    //   <LoginScreen />
    // </NavigationContainer>
  )
}
