import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthContext from '../auth/context'

import routes from '../navigation/routes'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import authStorage from '../auth/storage'
import useAuth from '../auth/useAuth'

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth()

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Text style={{ color: 'red', marginTop: 50 }}>{user.name}</Text>
        <Text onPress={() => navigation.navigate(routes.SETTINGS)}>
          Settings
        </Text>
        <Text style={{ color: 'red', marginTop: 50 }} onPress={() => logOut()}>
          Log Out
        </Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default AccountScreen
