import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function WorkoutDetailsScreen({ route }) {
  const workout = route.params
  return (
    <View style={styles.container}>
      <Text>Detailed explanation of {workout.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default WorkoutDetailsScreen
