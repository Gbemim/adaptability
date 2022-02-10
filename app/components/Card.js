import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function Card({ name, muscleGroup, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image} /> */}
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
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  //   image: {
  //     width: '100%',
  //     height: 200,
  //   },
  muscleGroup: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 7,
  },
})

export default Card