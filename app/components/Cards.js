import React from 'react'

import { View, StyleSheet, Image } from 'react-native'
import AppButton from './AppButton'
import AppText from './AppText'
import colors from '../config/colors'

function Cards({ nameOfCard, image, onPressButton }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <AppText style={styles.title}>{nameOfCard}</AppText>
      <AppButton title={'+'} theStyle={styles.button} onPress={onPressButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_images,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '45%',
    margin: 2,
  },

  title: {
    marginBottom: 7,
    marginTop: 7,
    alignSelf: 'center',
    textAlign: 'center',
  },

  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  button: {
    padding: 8,
  },
})

export default Cards
