import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function WorkoutMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Workout Detail')}>
        List of Workouts
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default WorkoutMenuScreen
