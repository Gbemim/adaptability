import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import * as Progress from 'react-native-progress'

import AppText from '../../components/AppText.js'
import AppTextInput from '../../components/AppTextInput.js'
import Cards from '../../components/Cards.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'

const PotentialEquipments3 = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Progress.Bar
          progress={0.3}
          width={null}
          animationConfig={{ bounciness: 1 }}
          color={'rgba(64, 66, 82, 1)'}
        />
        <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View>

        <AppText style={styles.text}>
          In 280 characters or less, what is your GOAL while using AdaptAbility?
        </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        >
          <View style={styles.childContainer}>
            <AppTextInput
              inputStyle={styles.goal}
              allowFontScaling={true}
              multiline={true}
              placeholder={
                'I want to be able to workout 3 days a week for at least a month'
              }
              keyboardAppearance={'default'}
              maxLength={280}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    paddingTop: 10,
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 20,
    paddingBottom: 10,
    marginLeft: '77%',
  },
  childContainer: {
    width: '100%',
    bottom: 200,
  },
  text: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  goal: {
    fontSize: 16,
  },
})

export default PotentialEquipments3
