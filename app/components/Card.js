import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function Card({ name, muscleGroup, onPress, image }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.muscleGroup}>{muscleGroup}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
    marginLeft: 25,
    marginTop: 10,
    borderColor: colors.medium,
    borderWidth: 1,
    width: 230,
    height: 330,
  },
  detailsContainer: {
    padding: 20,
  },
  muscleGroup: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 7,
  },

  image: {
    width: '100%',
    height: undefined,
    //resizeMode: 'contain',
    aspectRatio: 1,
    // alignSelf: 'center',
  },
})

export default Card
