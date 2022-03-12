import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'

import AppButton from '../../components/AppButton.js'
import AppText from '../../components/AppText.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'

const FrequencyOfWorkout4 = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={0.3}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        <AppText style={styles.text}>
          What situation best describe your active level? I workout or I am
          active ...
        </AppText>
        <View style={styles.listOfOptions}>
          <AppButton
            title='5 to 7 times per week'
            textStyle={styles.options}
            theStyle={styles.button}
          />
          <AppButton
            title='Couple of times per week'
            textStyle={styles.options}
            theStyle={styles.button}
            // onPress={}
          />
          <AppButton
            title='Once or twice per week'
            textStyle={styles.options}
            theStyle={styles.button}
            // onPress={}
          />
          <AppButton
            title='Rarely'
            textStyle={styles.options}
            theStyle={styles.button}
            // onPress={}
          />
          <AppButton
            title='Never'
            textStyle={styles.options}
            theStyle={styles.button}
            // onPress={}
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
  listOfOptions: {
    marginTop: 40,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 25,
    marginBottom: 30,
    backgroundColor: colors.secondary_images,
    borderColor: 'black',
    borderWidth: 1,
    width: '78%',
    alignSelf: 'center',
  },
  options: {
    textTransform: 'none',
    fontWeight: 'normal',
    paddingBottom: 21,
  },
})

export default FrequencyOfWorkout4
