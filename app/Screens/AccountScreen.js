import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
// import AuthContext from '../auth/context'

import routes from '../navigation/routes'

function AccountScreen({ navigation }) {
  // const { user, setUser } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Text onPress={() => navigation.navigate(routes.SETTINGS)}>Settings</Text>
      <View>
        <Text style={{ color: 'black' }}>Username</Text>
        <Text style={{ color: 'red', marginTop: 50 }}>Log Out</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default AccountScreen
