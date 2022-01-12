import React from 'react'
import { Text, StyleSheet, Platform, View } from 'react-native'

import color from '../config/color'

function AppButton({ title }) {
  const login = 'Login'
  return (
    <View>
      <View style={styles.login}>
        <Text style={styles.textLogin}>{login}</Text>
      </View>
      <View style={styles.register}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    // backgroundColor: color.primary,
    height: 50,
    width: '35%',
    position: 'absolute',
    bottom: 150,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 40,
    // alignSelf: 'center',
    justifyContent: 'center',
  },
  register: {
    backgroundColor: color.primary,
    height: 50,
    width: '35%',
    position: 'absolute',
    bottom: 70,
    borderRadius: 100,
    margin: 40,
    // alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.secondary,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLogin: {
    color: color.primary,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default AppButton
