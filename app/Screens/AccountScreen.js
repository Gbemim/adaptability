import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthContext from '../auth/context'

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Text onPress={() => navigation.navigate('Settings')}>Settings</Text>
      <View>
        <Text style={{ color: 'black' }}>{user}</Text>
        <Text
          style={{ color: 'red', marginTop: 50 }}
          onPress={() => setUser(null)}
        >
          Log Out
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default AccountScreen
