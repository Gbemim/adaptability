import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppButton from '../../components/AppButton.js'
import AppText from '../../components/AppText.js'
import Screen from '../../components/Screen.js'

const Assurance1 = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.text}>
          We encourage you to seek advice from your exercise and/or
          professional(s) regarding the programme. While we are glad to see you
          exercise immediately, we also hope that you can exercise in the safest
          way possible.
        </AppText>
        <View style={styles.button}>
          <AppButton title='Yes I have!' />
          <AppButton
            title="No, I don't plan to"
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          />
          <AppButton
            title='No, but I will'
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  text: {
    alignSelf: 'center',
    marginTop: 50,
  },
  button: {
    marginTop: 80,
  },
})

export default Assurance1
