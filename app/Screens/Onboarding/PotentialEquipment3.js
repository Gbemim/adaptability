import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View, ScrollView, Button, Pressable } from 'react-native'

import AppButton from '../../components/AppButton.js'
import AppText from '../../components/AppText.js'
import Screen from '../../components/Screen.js'
import colors from '../../config/colors.js'
const PotentialEquipment3 = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title='Next >'
            onPress={console.log('Click')}
            color={colors.dark}
          />
        </View>

        <AppText style={styles.text}>
          Do you use equipment or do you plan to use equipment?
        </AppText>
        <ScrollView
          automaticallyAdjustsScrollIndicatorInsets={true}
          centerContent={true}
        ></ScrollView>
        <View>
          <AppButton title='I agree' />
          <AppButton
            title='Cancel'
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    width: '100%',
    height: '100%',
  },
  header: {
    fontWeight: '800',
    marginTop: 50,
    paddingBottom: 30,
  },
  text: {
    alignSelf: 'center',
  },
  button: {
    paddingBottom: 10,
    marginLeft: '77%',
  },
})

export default PotentialEquipment3
