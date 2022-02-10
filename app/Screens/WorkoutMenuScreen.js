import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import routes from '../navigation/routes'

function WorkoutMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate(routes.WORKOUT_DETAIL)}>
        List of Workouts
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default WorkoutMenuScreen
