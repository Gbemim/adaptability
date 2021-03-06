import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'

import AppButton from '../../components/AppButton.js'
import AppText from '../../components/AppText.js'
import Screen from '../../components/Screen.js'
import routes from '../../navigation/routes'

function Assurance1({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={0.16}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        <AppText style={styles.text}>
          We encourage you to seek advice from your exercise and/or
          professional(s) regarding the programme. While we are glad to see you
          exercise immediately, we also hope that you can exercise in the safest
          way possible.
        </AppText>
        <View style={styles.button}>
          <AppButton
            title='Yes I have!'
            onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)}
          />
          <AppButton
            title="No, I don't plan to"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
          <AppButton
            title='No, but I will'
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 15,
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
